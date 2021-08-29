import styled from "styled-components/native";

export const Page = styled.SafeAreaView`
  flex: 1;
`;

export const HeaderText = styled.Text`
  font-size: 25px;
  margin:5px 0;
  font-weight: bold;
  text-align: center;
`;

export const Title = styled.Text`
  font-size: 20px;
  margin-top: 10px;
`;

export const Aluno = styled.Text`
  font-size: 20px;
  margin-top: 10px;
  font-weight:bold;
`;

export const Input = styled.TextInput`
  width: 100%;
  height: 50px;
  font-size: 18px;
  background-color: #fee;
  margin-top: 20px;
  border-radius: 10px;
  padding: 10px;
`;


export const MostrarDados = styled.TouchableOpacity`
  margin: 10px;
  background-color: green;
  height: 50px;
  width: 200px;
  border-radius: 10px;
`;

export const MostrarLista = styled.TouchableOpacity`
  margin: 10px;
  background-color: red;
  height: 50px;
  width: 250px;
  border-radius: 10px;
`;

export const TextBtn = styled.Text`
  line-height: 50px;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  color: white;
`;

export const ResultArea = styled.View`
  margin-top: 20px;
  background-color: #EEE;
  padding: 20px;
  position:relative;
`;

export const ResultItemTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;

export const ResultItem = styled.Text`
  font-size: 15px;
  margin-bottom: 30px;
`;

export const DadosAluno = styled.View`
  margin: 10px;
`;

export const DadosDisciplina = styled.View`
  margin: 10px;
`;

export const Item = styled.TouchableOpacity`
  padding: 10px;
`;

export const ItemText = styled.Text`
  font-size: 15px;
`;

export default {}