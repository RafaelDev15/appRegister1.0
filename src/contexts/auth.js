import React, {useState, createContext, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import api from '../server/api';

export const AuthContext = createContext({});

export default function AuthPorvider({children}){

    const [user, setUser] = useState(null);
    const [loadingAuth, setLoadingAuth] = useState(false);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {

        async function loadStorage(){
            const storage = await AsyncStorage.getItem('AUTH_USER');

            if(storage){
                setUser(JSON.parse(storage));
                setLoading(false);
            }

            setLoading(false);
        }

        loadStorage();

    }, []);

    async function signIn(email, password){
        setLoadingAuth(true);

        await api.post('/auth', {email, password})
        .then((res) => {

            const USER = res.data.user;

            const TOKEN = res.data.token;
            setUser(USER);
            storage(USER);
            setLoadingAuth(false);

        })
        .catch((err) => {
            console.log(err);
            setLoadingAuth(false);
        })
    }

    async function signUp(name, email, password){
        await api.post('/user', {name, email, password})
        .then((res) => {

            api.defaults.headers = res.data._id;

            console.log(res);

            const TOKEN_REGISTER = res.data.token;
            setUser(TOKEN_REGISTER);
        })
        .catch((err) => {console.log(err)})
    }

    async function storage(data){
        await AsyncStorage.setItem('AUTH_USER', JSON.stringify(data));
    }

    async function logOut(){
        await AsyncStorage.clear()
        .then(() => {
            setUser(null);
        })
    }

    return(
        <AuthContext.Provider
            value={{ 
                signed: !!user,
                user,
                signIn,
                signUp,
                logOut,
                loadingAuth,
                loading
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}
