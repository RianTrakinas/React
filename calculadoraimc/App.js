import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default function App() {
  const [peso, setPeso] = useState('');
  const [alt, setAlt] = useState('');
  const [result, setResultado] = useState(0);
  const [textoResultado, settextoResultado] = useState('');

  const imc = function () {
    let res
    if (alt == '' || peso == '') {
      alert('Sem dados, favor digitar dados');
      return
    }

    res = Number(peso) / (Number(alt) * Number(alt));
    if (res < 18.5) {
      settextoResultado('Muito abaixo do peso');
      setResultado(res);
    } else if (res >= 18.5 && res <= 24.9) {
      settextoResultado('Peso normal');
      setResultado(res);
    } else if (res > 25 && res <= 29.9) {
      settextoResultado('Sobrepeso');
      setResultado(res);
    } else if (res > 30 && res <= 34.9) {
      settextoResultado('Obesidade Grau 1');
      setResultado(res);
    } else if (res > 35 && res <= 39.9) {
      settextoResultado('Obesidade Grau 2');
      setResultado(res);
    } else if (res > 40) {
      settextoResultado('Obesidade Grau 3 ou Mórbida');
      setResultado(res);
    }
  };

  function limpar() {
    setPeso('');
    setAlt('');
    settextoResultado('');
    setResultado('');
  }

  return (
    <View style={styles.container}>
      <View style={styles.blocoEntrada}>
        <Text style={styles.imt}>Calculadora de IMC</Text>
        <TextInput
          style={styles.campoEntrada}
          placeholder="Altura"
          keyboardType="numeric"
          value={alt}
          onChangeText={(valor) => setAlt(valor)}
        />

        <TextInput
          style={styles.campoEntrada}
          placeholder="Peso"
          keyboardType="numeric"
          value={peso}
          onChangeText={(valor) => setPeso(valor)}
        />

        <View style={styles.bBotoes}>
          <TouchableOpacity style={styles.botao} onPress={imc}>
            <Text style={styles.tBotao}>calcular</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botao} onPress={limpar}>
            <Text style={styles.tBotao}>limpar</Text>
          </TouchableOpacity>
        </View>

        <View>
          <Text style={styles.imct}>ImC: {Number(result).toFixed(2)}</Text>
          <Text style={styles.textoResultado}>
            Informativo: {textoResultado}
          </Text>
        </View>
      </View>
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
  imt: {
    fontSize: 25,
    textAlign: 'center',
  },
  campoEntrada: {
    borderWidth: 1,
    borderColor: 'black',
    textAlign: 'center',
    fontSize: 20,
    margin: 3,
    borderRadius: 5,
  },
  blocoEntrada: {
    width: 250,
    borderWidth: 2,
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
    height: 30,
    marginLeft: 5,
  },
  tBotao: {
    justifyContent: 'center',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 15,
  },
  textoResultado: {
    fontSize: 20,
    textAlign: 'center',
  },
  imct: {
    textAlign: 'center',
    fontSize: 20,
  },

  // cmr =  (Number(peso) / (2*Number(alt)))
  // if (cmr < 18.5){
  // setresultado ('')
  // } else if
});
