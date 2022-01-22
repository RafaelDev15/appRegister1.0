import React, {useState, useContext} from 'react';

import api from '../../server/api';
import {AuthContext} from '../../contexts/auth';

import { Container, Form, Label, Input, ButtonRegister, TextRegister, InputDescription } from '../../Styles/new';
import { Picker } from '@react-native-picker/picker';

export default function New() {

  const [assunto, setAssunto] = useState('');
  const [tipo, setTipo] = useState('Empresa');
  const [descricao, setDescricao] = useState('');

  const {user} = useContext(AuthContext);

  async function handleRegister(){

    let dataInput = '2020-02-06';

    let dataNow = new Date(dataInput);
    const dataFormatada = dataNow.toLocaleDateString('pt-BR', {timeZone: 'UTC'});    

    const data = {
      title: assunto,
      type: tipo,
      description: descricao,
      date: dataFormatada,
      status: false,
      user: user && user._id
    }

    await api.post('/request', data)
    .then(() => {
      console.log("Pedido cadastrado com sucesso");
    })
    .catch((err) => {
      console.log(err);
    })

  }

 return (
   <Container>

        <Form>
            <Label>Assunto</Label>
            <Input 
              value={assunto}
              onChangeText={ text => setAssunto(text) }
              placeholder="Coloque o assunto do pedido"
            />

            <Label>Tipo</Label>
            <Picker
              selectedValue={tipo}
              onValueChange={(itemValue, itemIndex) =>
                setTipo(itemValue)
              }
              style={{ backgroundColor: '#191A30', height: 45, color: '#FFF' }}
              >
              <Picker.Item label="Empresa" value="empresa" />
              <Picker.Item label="Pessoa" value="pessoa" />
            </Picker>

            <Label>Descrição</Label>
            <InputDescription 
              multiline={true}
              maxLength={300}
              autoCorrect={false}
              value={descricao}
              onChangeText={ text => setDescricao(text) }
              style={{ height:200, textAlignVertical: 'top',}}
              placeholder="Escreva uma descrição (MAX: 300)"
            />

            
            <ButtonRegister onPress={handleRegister}>
                <TextRegister>Registrar</TextRegister>
            </ButtonRegister>

        </Form>
   </Container>
  );
}