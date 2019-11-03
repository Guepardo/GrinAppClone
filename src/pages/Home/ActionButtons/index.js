import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { withNavigation } from 'react-navigation'

import {
  Container,
  ScannerButtonContainer,
  LateralButtonContainer,
  ScannerButtonLabel,
  CenterButtonContainer
} from './styles';

import RoundedButton from './../../../components/RoundedButton'

function ActionButtons({ navigation }) {
  function onOpenMenu() {
    navigation.toggleDrawer()
  }

  return (
    <Container>
      <LateralButtonContainer>
        <RoundedButton
          name={'menu'}
          onPress={onOpenMenu}
        />
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

export default withNavigation(ActionButtons)