import styled from 'styled-components/native';

export const Container = styled.View`
  height: 88px;
  flex-direction: row;
  padding: 10px 10px 30px 10px;
`;

export const ScannerButtonContainer = styled.TouchableOpacity`
  height: 50px;
  border-radius: 30px;
  margin: 0 10px;
  background-color: #0ad76e;
  align-self: stretch
`

export const LateralButtonContainer = styled.View`
  flex: 0.2;
  justify-content: center;
  align-items: center;
`

export const CenterButtonContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`
