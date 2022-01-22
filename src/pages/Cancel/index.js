import React, {useState, useEffect, useContext} from 'react';
import {Modal, FlatList} from 'react-native';

import api from '../../server/api';
import {AuthContext} from '../../contexts/auth';

import {Container, Title, Span, AreaInfos, TextTitle, ButtonModal} from '../../Styles/cancel';

import RequestsCancel from '../../components/RequestsCancel';

export default function Cancel() {

  const [requestsList, setRequestsList] = useState([]);

  const {user} = useContext(AuthContext);

  useEffect(() => {

    async function loadList(){

      await api.get(`/request_status/${user && user._id}/false`)
      .then((res) => {
        setRequestsList(res.data);
       
      })
      .catch((err) => {
          console.log(err);
      })

    }

    loadList();

  }, []);

 return (
   <Container>

      <Title>Aqui estão todos os seus pedidos <Span>pendentes.</Span> </Title>

      <FlatList 
        keyExtractor={item => item._id}
        data={requestsList}
        renderItem={ ({item}) => <RequestsCancel data={item} /> }
      />

   </Container>
  );
}