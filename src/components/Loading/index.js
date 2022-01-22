import React, {useEffect} from 'react';
import { View, StyleSheet, Animated } from 'react-native';

export default function Loading() {

    const AnimatedValue = new Animated.Value(0);

    useEffect(() => {
        cricleAnimated();

        return () => cricleAnimated();
    }, [])

    const cricleAnimated = () => {
        AnimatedValue.setValue(0)
        Animated.timing(
            AnimatedValue,
            {
                toValue: 1,
                duration: 400,
                useNativeDriver: false
            }
        ).start(() => {
            setTimeout(() => {
                cricleAnimated()
            }, 1000);
        })
    }

    const translateX = AnimatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [-2, 500]
    })

 return (
   <View style={styles.container}>
       <View style={styles.content}>
            <Animated.View 
                style={{
                    width: '95%',
                    height: '100%',
                    opacity: 0.5,
                    backgroundColor: '#000119',
                    transform: [{ translateX: translateX }]
                }}
            />
       </View>

       <View style={styles.content}>
            <Animated.View 
                style={{
                    width: '95%',
                    height: '100%',
                    opacity: 0.5,
                    backgroundColor: '#000119',
                    transform: [{ translateX: translateX }]
                }}
            />
       </View>

       <View style={styles.content}>
            <Animated.View 
                style={{
                    width: '95%',
                    height: '100%',
                    opacity: 0.5,
                    backgroundColor: '#000119',
                    transform: [{ translateX: translateX }]
                }}
            />
       </View>

       <View style={styles.content}>
            <Animated.View 
                style={{
                    width: '95%',
                    height: '100%',
                    opacity: 0.5,
                    backgroundColor: '#000119',
                    transform: [{ translateX: translateX }]
                }}
            />
       </View>
   </View>
  );
}

const styles = StyleSheet.create({
    container:{
        marginLeft: 20,
        marginRight: 20,
        width: '100%',
        height: 60,   
    },

    content:{
        backgroundColor: "#191A30",
        width: '95%',
        height: 60,
        borderRadius: 10,
        marginLeft: 10,
        marginTop: 20,
        overflow: 'hidden'
    }
});