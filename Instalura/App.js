
import React, { Fragment, useState, useEffect } from 'react';
import {
  ScrollView,
  Dimensions,
  FlatList
} from 'react-native';
import {Cabecalho} from "./src/Componentes/Cabecalho";
import {Foto} from "./src/Componentes/Foto";


const App = () => {

  const [fotos, setFotos] = useState([]);

  useEffect(() => {

    const lerFotos = async (callback) => {
        const fotosHTTP = await fetch("http://localhost:3030/feed");
        const fotosJson = await fotosHTTP.json();
        setFotos(fotosJson);
    }

  lerFotos();

  }, [])

  return (
    <ScrollView>
      <FlatList
        data={fotos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) =>
          <Fragment>
            <Cabecalho nomeUsuario={item.userName} />
            <Foto />
          </Fragment>
        }
      />
    </ScrollView>
  )
};

export default App;
