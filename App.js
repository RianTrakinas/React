import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';

export default function App() {
  const produtos = [
    {
      id: 1000,
      nome: 'Teclado gamer RGB',
      preco: 'R$ 758,99',
      quantidade: '99',
    },
    {
      id: 1001,
      nome: 'Memoria Ram Gamer',
      preco: 'R$ 459,99',
      quantidade: '250',
    },
    { id: 1002, nome: 'Ryzen 9', preco: 'R$ 3.249,99', quantidade: '100' },
    { id: 1003, nome: 'RTX 3090', preco: 'R$ 12.999,99', quantidade: '200' },
  ];

  const [idproduto, setidProduto] = useState('');
  const [nomeProduto, setnomeProduto] = useState('');
  const [precoProduto, setPrecoProduto] = useState('');
  const [quantProduto, setquantProduto] = useState('');
  const [lista, setLista] = useState(produtos);

  const addProduto = () => {
    if (
      idproduto == '' ||
      nomeProduto == '' ||
      precoProduto == '' ||
      quantProduto == ''
    ) {
      alert('Campos não preenchidos');
      apagar();
      return;
    }
    if (indice != -1) {
      alert('Codigo existente, favor inserir outro codigo');
      apagar();
      return;
    }

    setLista((lista) => [
      ...lista,
      {
        id: idproduto,
        nome: nomeProduto,
        preco: precoProduto,
        quantidade: quantProduto,
      },
    ]);
    apagar();
  };

  const apagarProduto = () => {
 if(idproduto == "" || indice == -1){
        return
      }
      
      setLista([
        ...lista.slice(0,indice),
        ...lista.slice(indice+1, lista.length)
      ])
      limpar()
    }

  const indice = lista.findIndex((item) => item.id == idproduto);

  const editarProduto = () => {
           if(idproduto =="" || nomeProduto == "" || precoProduto == ""|| quantProduto == "" ){
        alert("Campos vazios!")
        limpar()
        return}
      setLista(
        lista.map((produto) =>
        produto.id == idproduto ?{...produto, id: idproduto, nome: nomeProduto, preco: precoProduto, quantidade: quantProduto}  :{...produto}
        )
      )
      limpar()
    }

  function apagar() {
    setidProduto('');
    setnomeProduto('');
    setPrecoProduto('');
    setquantProduto('');
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.campoEntrada}
        placeholder="Código"
        keyboardType="numeric"
        value={idproduto}
        onChangeText={(valor) => {
          setidProduto(valor);
        }}
      />
      <TextInput
        style={styles.campoEntrada}
        placeholder="Descrição"
        keyboardType="defaut"
        value={nomeProduto}
        onChangeText={(valor) => {
          setnomeProduto(valor);
        }}
      />
      <TextInput
        style={styles.campoEntrada}
        placeholder="Preço"
        keyboardType="numeric"
        value={precoProduto}
        onChangeText={(valor) => {
          setPrecoProduto(valor);
        }}
      />
      <TextInput
        style={styles.campoEntrada}
        placeholder="Quantidade"
        keyboardType="numeric"
        value={quantProduto}
        onChangeText={(valor) => {
          setquantProduto(valor);
        }}
      />

      <View style={styles.bBotoes}>
        <TouchableOpacity style={styles.botao} onPress={addProduto}>
          <Text style={styles.tBotao}>Adicionar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao} onPress={apagarProduto}>
          <Text style={styles.tBotao}>Apagar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao} onPress={editarProduto}>
          <Text style={styles.tBotao}>Editar</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={lista}
        renderItem={({ item }) => (
          <Text style={styles.item}>
            {'[' +
              item.id +
              ']' +
              item.nome +
              '\nPreço: ' +
              item.preco +
              '\nQuantidade:' +
              item.quantidade}
          </Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'FF0239',
    alignItems: 'center',
    justifyContent: 'center',
  },
  campoEntrada: {
    borderWidth: 1,
    borderColor: 'black',
    textAlign: 'center',
    fontSize: 20,
    margin: 5,
    borderRadius: 5,
  },
  bBotoes: {
    marginTop: 5,
    width: 250,
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 3,
  },
  botao: {
    backgroundColor: 'red',
    borderRadius: 10,
    width: 80,
    height: 25,
    marginLeft: 5,
  },
  tBotao: {
    justifyContent: 'center',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 15,
  },
  item: {
    borderBottomColor: 'black',
    borderBottomWidth: 3,
    marginBottom: 5,
  },
});
