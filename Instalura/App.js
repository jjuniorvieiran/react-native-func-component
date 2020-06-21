
import React, { Fragment } from 'react';
import {
  ScrollView,
  Dimensions,
  FlatList
} from 'react-native';
import {Cabecalho} from "./src/Componentes/Cabecalho";
import {Foto} from "./src/Componentes/Foto";

const informacoes = [
  { id: 1, usuario: "Junior" },
  { id: 2, usuario: "Dani" },
  { id: 3, usuario: "Maraschin" }
]


const App = () => {
  return (
    <ScrollView>
      <FlatList
        data={informacoes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) =>
          <Fragment>
            <Cabecalho nomeUsuario={item.usuario} />
            <Foto />
          </Fragment>
        }
      />
    </ScrollView>
  )
};

export default App;
