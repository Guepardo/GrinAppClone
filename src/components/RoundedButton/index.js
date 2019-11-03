import React from 'react';
import { Container } from './styles';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export default function RoundedButton({name, onPress}) {
  return (
    <Container onPress={onPress} >
      <Icon
        name={name}
        size={25}
      />
    </Container>
  );
}

RoundedButton.defaultProps = {
  name: 'x',
  onPress: () => {}
}