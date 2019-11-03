import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import {
  Container,
  ScannerButtonContainer,
  LateralButtonContainer,
  ScannerButtonLabel,
  CenterButtonContainer
} from './styles';

import RoundedButton from './../../../components/RoundedButton'


export default function ActionButtons() {
  return (
    <Container>
      <LateralButtonContainer>
        <RoundedButton name={'menu'} />
      </LateralButtonContainer>
      <CenterButtonContainer>
        <ScannerButtonContainer>
          <Icon name={'qrcode-scan'} size={20} />
          <ScannerButtonLabel>
            Escanear
          </ScannerButtonLabel>
        </ScannerButtonContainer>
      </CenterButtonContainer>
      <LateralButtonContainer>
        <RoundedButton name={'help'} />
      </LateralButtonContainer>
    </Container>
  );
}
