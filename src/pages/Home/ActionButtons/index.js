import React from 'react';

import {
  Container,
  ScannerButtonContainer,
  LateralButtonContainer,
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
        <ScannerButtonContainer />
      </CenterButtonContainer>
      <LateralButtonContainer>
        <RoundedButton name={'help'} />
      </LateralButtonContainer>
    </Container>
  );
}
