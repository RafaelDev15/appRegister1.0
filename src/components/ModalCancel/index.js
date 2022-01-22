import React, {useState} from 'react';
import {Modal} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import api from '../../server/api';

import {Container, TextModal, Span, AreaInfos, ButtonDelete, BtnDelete, ButtonClose} from '../../Styles/modal';

export default function ModalCancel({closeModal, dataModal}) {

    const [modal, setModal] = useState(null);

    async function handleDelete(){

        await api.delete(`/request/${dataModal._id}`)
        .then(() => {
            alert("Pedido deletado com sucesso");
            setModal(closeModal);

        })
        .catch((err) => {
            console.log(err);
        })
    }

 return (
   <Container>
       <AreaInfos>

        <ButtonClose onPress={closeModal}>
            <Icon name='close' size={25} color='#AAA' />
        </ButtonClose>

        <TextModal>Assunto: <Span> {dataModal.title} </Span> </TextModal>

        <TextModal>Tipo: <Span> {dataModal.type} </Span> </TextModal>

        <TextModal>Descrição:</TextModal>
        <Span>
            {dataModal.description}
        </Span>

        <ButtonDelete onPress={handleDelete}>
            <BtnDelete>Deletar pedido</BtnDelete>
        </ButtonDelete>

       </AreaInfos>

   </Container>
  );
}