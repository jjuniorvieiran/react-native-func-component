
import React, { Fragment, useState, useEffect } from 'react';
import {
  ScrollView,
  Dimensions,
  FlatList
} from 'react-native';
import {Cabecalho} from "./src/Componentes/Cabecalho";
import {Foto} from "./src/Componentes/Foto";
import lerFotos from './src/api/feed';


const App = () => {

  const [fotos, setFotos] = useState([]);

  useEffect(() => {
    lerFotos(setFotos);
  }, [])

  return (
    <ScrollView>
      <FlatList
        data={fotos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) =>
          <Fragment>
            <Cabecalho 
              nomeUsuario={item.userName}
              urlImage={item.userURL}
            />
            <Foto 
              urlFoto={item.url}
              descricao={item.description}
              qntLikes={item.likes}
            />
          </Fragment>
        }
      />
    </ScrollView>
  )
};

export default App;
