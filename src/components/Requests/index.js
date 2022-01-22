import React, {useState, useCallback} from 'react';
import { View, Modal } from 'react-native';

import Detalhes from '../Detalhes';

import Icon from 'react-native-vector-icons/FontAwesome';

import Animated, {FlipInEasyY} from 'react-native-reanimated';

import {   
    AreaInfos,
    Title,
    ButtonInfos
} from '../../Styles/home';

export default function Requests({data}) {

    const [showModal, setShowModal] = useState(false);

    function handleCloseModal(){
        setShowModal(!false)
    }

 return (
        <View style={{ width: '100%'}}>
        <Animated.View entering={FlipInEasyY}>
         <AreaInfos>

            <ButtonInfos onPress={handleCloseModal}>
                <Title numberOfLines={1} > {data.title} </Title>
                <Icon name="circle" size={25} color={ data.status ? '#0EA501' : '#FAFF00' } />
            </ButtonInfos>

        </AreaInfos>
        </Animated.View>
           {showModal && (
                <Modal>
                    <Detalhes close={ () => setShowModal(false) } dados={data} />
                </Modal>
            )}
     </View>
  );
}