import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 20px;
`;

export const AvatarContainer = styled.View`
  height: 60px;
  flex-direction: row;
  margin-bottom: 45px;
`

export const ImageContainer = styled.View`
  flex: .3
`

export const InfoContainer = styled.View`
  flex: .7;
  justify-content: center;
`

export const Image = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 30px;
`

export const UserName = styled.Text`
  font-size: 18px;
  font-weight: bold;
`

export const UserEmail = styled.Text`
  font-size: 14px;
  color: #585858;
`

export const DrawerItemContainer = styled.TouchableOpacity`
  height: 50px;
  flex-direction: row;
  alignItems: center;
`

export const DrawerItemLabel = styled.Text`
  margin-left: 10px;
  font-weight: 900;
  font-size: 16px;
  color: #1c1c1c;
`