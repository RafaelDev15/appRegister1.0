import React from 'react';

import {Container, TextModal, Span, AreaInfos, ButtonDelete, BtnDelete, ButtonClose} from '../../Styles/modal';

import Icon from 'react-native-vector-icons/FontAwesome';

    export default function ModalCancel({closeModal}) {
 return (
   <Container>
       <AreaInfos>

        <ButtonClose onPress={closeModal}>
            <Icon name='close' size={25} color='#AAA' />
        </ButtonClose>

        <TextModal>Assunto: <Span>Suporte tecnico</Span> </TextModal>

        <TextModal>Tipo: <Span>Empresa</Span> </TextModal>

        <TextModal>Descrição:</TextModal>
        <Span>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Aliquam ornare massa at leo laoreet, quis fringilla purus 
        varius. Etiam ullamcorper volutpat nunc. Sed tempus gravida
        nunc. Maecenas eget vulputate nisl. Integer euismod ante at 
        nunc accumsan vehicula. In cursus lorem vel feugiat hendrerit. 
        Proin rutrum, lacus vitae sollicitudin convallis.
        </Span>

        <ButtonDelete>
            <BtnDelete>Deletar pedido</BtnDelete>
        </ButtonDelete>

       </AreaInfos>
   </Container>
  );
}