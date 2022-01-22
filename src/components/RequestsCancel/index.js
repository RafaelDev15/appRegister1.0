import React, {useState} from 'react';
import { View, Modal } from 'react-native';

import {AreaInfos, TextTitle, ButtonModal} from '../../Styles/cancel';

import ModalCancel from '../ModalCancel';

import Icon from 'react-native-vector-icons/FontAwesome';

export default function RequestsCancel({data}) {

  const [showModal, setShowModal] = useState(false);

  function handleModal(){
    setShowModal(!showModal);
  }

 return (
   <View>
        <AreaInfos>
            <ButtonModal onPress={handleModal}>
                <TextTitle numberOfLines={1}> {data.title} </TextTitle>
                <Icon name="circle" size={25} color='#FAFF00' />
            </ButtonModal>
        </AreaInfos>

      {showModal && (
        <Modal transparent={true} animationType='slide' visible={showModal}>
          <ModalCancel closeModal={ () => setShowModal(false) } dataModal={data} />
        </Modal>
      )}

   </View>
  );
}