import React, {useState} from 'react';
import {Modal} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

import Detalhes from '../../components/Detalhes';
import Header from '../../components/Header';

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

export default function Home() {

    const [showModal, setShowModal] = useState(false);

    function handleCloseModal(){
        setShowModal(!false)
    }

    const navigation = useNavigation();

 return (
   <Container>

       <Header />

       <SubHome>
           <AreaRefister>
                <TextRegister style={{fontStyle: 'italic'}}>Pedidos registrados</TextRegister>
                <TextRegister>N° 50</TextRegister>
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

       <AreaInfos>
            <ButtonInfos onPress={handleCloseModal}>
                <Title>Suporte tecnico</Title>
                <Icon name="circle" size={25} color='#0EA510' />
            </ButtonInfos>
           
       </AreaInfos>

       {showModal && (
           <Modal>
               <Detalhes close={ () => setShowModal(false) } />
           </Modal>
       )}

   </Container>
  );
}