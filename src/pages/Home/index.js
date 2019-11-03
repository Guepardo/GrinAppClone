import React from 'react';
import { StyleSheet } from 'react-native'

import MapView from 'react-native-map-clustering';
import { Marker } from 'react-native-maps';

import {
  Container,
  DisplayBalanceContainer,
  AddBalanceContainer,
  BalanceLabel,
  BalanceValue,
  AddBalanceLabel,
  MapContainer
} from './styles';

import ActionButtons from './ActionButtons'

import scooters from './../../fakeData/scootersLocation'
const SCOOTER_MARKER = [
  require('./../../assets/full.png'),
  require('./../../assets/middle.png'),
  require('./../../assets/empty.png'),
]


export default function Home() {
  function renderMarkers() {
    return scooters.map(scooter => {
      let [latitude, longitude] = scooter
      return (
        <Marker
          coordinate={{ latitude, longitude }}
          image={SCOOTER_MARKER[parseInt(Math.random() * 3)]}
        />
      )
    })
  }

  return (
    <Container>
      <DisplayBalanceContainer>
        <BalanceLabel>MEU SALDO</BalanceLabel>
        <BalanceValue>R$ 43,34</BalanceValue>
      </DisplayBalanceContainer>
      <AddBalanceContainer>
        <AddBalanceLabel>Adicionar saldo</AddBalanceLabel>
      </AddBalanceContainer>
      <MapContainer>
        <MapView
          style={{ ...StyleSheet.absoluteFillObject }}
          region={{
            latitude: -16.293103,
            longitude: -48.967885,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
        >
          {renderMarkers()}
        </MapView>
      </MapContainer>
      <ActionButtons />
    </Container>
  );
}

Home.navigationOptions = {
  header: null
}