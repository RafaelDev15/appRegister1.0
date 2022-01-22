import React, {useEffect, useState, useContext, useCallback} from 'react';
import {Modal, FlatList, RefreshControl, Button, ActivityIndicator} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {AuthContext} from '../../contexts/auth';

import Header from '../../components/Header';
import Requests from '../../components/Requests';
import Loading from '../../components/Loading';

import { 
    Container, 
    SubHome, 
    AreaRefister, 
    TextRegister, 
    AreaIcons,
    AreaInfos,
    Title,
    IconNew,
    TextIcon ,
    ButtonInfos
} from '../../Styles/home';
import api from '../../server/api';

export default function Home() {

    const [requests, setRequests] = useState([]);

    const [refreshing, setRefreshing] = useState(false);
    const [loadingList, setLoadingList] = useState(false);

    const {user} = useContext(AuthContext);

    useEffect(() => {

        loadRequests();

       /* async function loadRequests(){

            await api.get(`/request/${user && user._id}`)
            .then((res) => {
                setRequests(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
        }

        loadRequests();*/
       
    }, []);

    //Calling data from API user
    async function loadRequests(){
        setLoadingList(true);
        await api.get(`/request/${user && user._id}`)
        .then((res) => {
            setRequests(res.data);
            setRefreshing(false);
            setLoadingList(false);
        })
        .catch((err) => {
            console.log(err);
            setRefreshing(false);
            setLoadingList(false);
        })
    }

    //Function that updates array data
    const handleRefresh = () => {
        setRefreshing(true);
        loadRequests();
    }

    const navigation = useNavigation();

 return (
   <Container>

       <Header />

       <SubHome>
           <AreaRefister>
                <TextRegister style={{fontStyle: 'italic'}}>Pedidos registrados</TextRegister>
                <TextRegister>N° {requests.length} </TextRegister>
           </AreaRefister>

           <AreaIcons>

                <IconNew onPress={ () => navigation.navigate('New')}>
                    <Icon name='plus' size={30} color='#4C85F0' />
                    <TextIcon>Novo</TextIcon>
                </IconNew>

                <IconNew onPress={ () => navigation.navigate('Cancel')}>
                    <Icon name='close' size={30} color='#4C85F0' />
                    <TextIcon>Cancelar</TextIcon>
                </IconNew>

           </AreaIcons>
       </SubHome>
         
       <FlatList 
        keyExtractor={item => item._id}
        data={requests}
        renderItem={ ({item}) => <Requests data={item} /> }
        refreshControl={
           <RefreshControl 
            refreshing={refreshing}
            onRefresh={handleRefresh}   
           />
       }
       />

   </Container>
  );
}