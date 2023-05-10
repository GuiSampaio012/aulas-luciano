import { Button, StyleSheet, TextInput } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View, } from '../../components/Themed';
import { useState } from 'react';
import axios from 'axios';

export default function TabOneScreen() {
  const [cep, setCEP] = useState('')
  const [endereco, setEndereco] = useState('')
  const buscarCEP = () => {
    axios.get(`https://viacep.com.br/ws/${cep}/json/`)
    .then((res) => {
      console.log(res)
      setEndereco(res.data.logradouro + '-'+  res.data.localidade)
    })
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Consultar CEP</Text>
      <TextInput placeholder='CEP' 
        onChangeText={setCEP}
        value={cep}
        maxLength={8}
        style={styles.input}
         />
      <Button title='Pesquisar' onPress={buscarCEP} />
      <Text style={styles.title}>{endereco}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  input:{
    borderColor: '#333',
    borderWidth: 1,
    padding: 4,
    borderRadius: 5,

  }
});
