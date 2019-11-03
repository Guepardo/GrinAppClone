import React from 'react';
import { StyleSheet } from 'react-native'
import MapView from 'react-native-maps';

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

export default function Home() {
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
          style={{...StyleSheet.absoluteFillObject}}
          region={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
        />
      </MapContainer>
      <ActionButtons/>
    </Container>
  );
}

Home.navigationOptions = {
  header: null
}