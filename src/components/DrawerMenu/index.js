import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import {
  Container,
  AvatarContainer,
  ImageContainer,
  InfoContainer,
  Image,
  UserName,
  UserEmail,
  DrawerItemContainer,
  DrawerItemLabel
} from './styles';

const AVATAR = { uri: 'https://api.adorable.io/avatars/285/abott@adorable.png' }

export default function DrawerMenu() {
  return (
    <Container>
      <AvatarContainer>
        <ImageContainer>
          <Image source={AVATAR} />
        </ImageContainer>
        <InfoContainer>
          <UserName>Allyson Maciel</UserName>
          <UserEmail>bsinet@hotmail.com</UserEmail>
        </InfoContainer>
      </AvatarContainer>

      <DrawerItemContainer>
        <Icon name="wallet-outline"
          size={25}
        />
        <DrawerItemLabel>Minha carteira</DrawerItemLabel>
      </DrawerItemContainer>

      <DrawerItemContainer>
        <Icon name="wallet-giftcard"
          size={25}
        />
        <DrawerItemLabel>Ganhe viagens gratuitas!</DrawerItemLabel>
      </DrawerItemContainer>

      <DrawerItemContainer>
        <Icon name="ticket-outline"
          size={25}
        />
        <DrawerItemLabel>Promoções</DrawerItemLabel>
      </DrawerItemContainer>

      <DrawerItemContainer>
        <Icon name="map-marker-distance"
          size={25}
        />
        <DrawerItemLabel>Histórico de corridas</DrawerItemLabel>
      </DrawerItemContainer>

      <DrawerItemContainer>
        <Icon name="help-circle-outline"
          size={25}
        />
        <DrawerItemLabel>Central de Ajuda</DrawerItemLabel>
      </DrawerItemContainer>

      <DrawerItemContainer>
        <Icon name="file-document-box-outline"
          size={25}
        />
        <DrawerItemLabel>Termos de Uso</DrawerItemLabel>
      </DrawerItemContainer>

      <DrawerItemContainer>
        <Icon name="exit-to-app"
          size={25}
        />
        <DrawerItemLabel>Sair</DrawerItemLabel>
      </DrawerItemContainer>
    </Container>
  );
}
