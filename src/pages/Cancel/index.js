import React, {useState} from 'react';
import {Modal} from 'react-native';

import {Container, Title, Span, AreaInfos, TextTitle, ButtonModal} from '../../Styles/cancel';

import ModalCancel from '../../components/ModalCancel';

import Icon from 'react-native-vector-icons/FontAwesome';

export default function Cancel() {

  const [showModal, setShowModal] = useState(false);

  function handleModal(){
    setShowModal(!showModal);
  }

 return (
   <Container>

      <Title>Aqui estão todos os seus pedidos <Span>pendentes.</Span> </Title>

      <AreaInfos>
        <ButtonModal onPress={handleModal}>
          <TextTitle>Suporte tecnico</TextTitle>
          <Icon name="circle" size={25} color='#FAFF00' />
        </ButtonModal>
      </AreaInfos>

      {showModal && (
        <Modal transparent={true} animationType='slide' visible={showModal}>
          <ModalCancel closeModal={ () => setShowModal(false) } />
        </Modal>
      )}

   </Container>
  );
}