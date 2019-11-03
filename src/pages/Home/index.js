import React from 'react';

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
        <MapView />
      </MapContainer>
      <ActionButtons/>
    </Container>
  );
}

Home.navigationOptions = {
  header: null
}