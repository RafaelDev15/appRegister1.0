import React from 'react';

import {
    Container, 
    TextModal, 
    Span, 
    AreaInfos, 
    ButtonDelete, 
    BtnDelete, 
    ButtonClose, 
    AreaStatus, 
    Status,
    Label,
    ButtonStatus,
    BtnStatus
} from '../../Styles/modal';

import Icon from 'react-native-vector-icons/FontAwesome';

export default function Detalhes({close, dados}) {
 return (
    <Container>
        <AreaInfos>

            <Label>Detalhes do seu pedido</Label>

            <ButtonClose onPress={close}>
                <Icon name='close' size={25} color='#AAA' />
            </ButtonClose>

            <TextModal>Assunto: <Span> {dados.title} </Span> </TextModal>

            <TextModal>Tipo: <Span> {dados.type} </Span> </TextModal>

            <TextModal>Descrição:</TextModal>
                <Span>
                    {dados.description}
                </Span>
            
            <AreaStatus>
                <Status>Status:</Status>
                <ButtonStatus status={dados.status} disabled={true}>
                    <BtnStatus text={dados.status}> {dados.status ? 'Atendido' : 'Pendente'} </BtnStatus>
                </ButtonStatus>
            </AreaStatus>

        </AreaInfos>
    </Container>
  );
}