import React, { useState } from 'react';
import { ScrollView, NativeBaseProvider } from 'native-base';
import imprimir from './src/components/imprimirAtividades';
import { Page, HeaderText, Title, Aluno, Input, MostrarDados, MostrarLista, TextBtn, ResultArea, ResultItemTitle, ResultItem, DadosAluno, DadosDisciplina } from './src/Styles/Styled';


export const Form = () => {
  const [nomeAluno, setAluno] = useState('');
  const [nomeCurso, setCurso] = useState('');
  const [sexo, setSexo] = useState('');
  const [nomeDisc, setDisciplina] = useState('');
  const [n1, setN1] = useState(0);
  const [n2, setN2] = useState(0);
  const [aulas, setAula] = useState(0);
  const [faltas, setFalta] = useState(0);
  const [reprovFalta, setReprov] = useState(0);
  const [mostrarRelatorio, setMostrarRelatorio] = useState(false);
  const [mostrarLista, setMostrarLista] = useState(false);

  const Aprovado = () => {
    let nFalta = parseInt(faltas);
    let nAulas = parseInt(aulas);

    if (nFalta && nAulas) {
      setReprov(aulas * 0.25);

      if ((reprovFalta >= nFalta) && ((parseFloat(n1) + parseFloat(n2)) / 2) >= 7) {
        return "O aluno foi aprovado!"
      } else if (reprovFalta < nFalta && ((parseFloat(n1) + parseFloat(n2)) / 2) >= 7) {
        return "O aluno foi reprovado por falta!"
      } else {
        return "O aluno foi reprovado!"
      }
    } else {
      return <ResultItem>Preencha todos os requisitos necessarios para saber se o aluno foi aprovado!</ResultItem>
    }
  }
  const Media = () => {
    //Tranformação de string para float
    let nota1 = parseFloat(n1);
    let nota2 = parseFloat(n2);

    //Fazendo a verificação das respectivas notas
    if (nota1 && nota2) {
      return ((nota1 + nota2) / 2);
    } else {
      return 0;
    }
  }
  const handleClickLista = () => {
    setMostrarLista(!mostrarLista);
  }

  const handleClickRelatorio = () => {
    setMostrarRelatorio(!mostrarRelatorio);
  }

  const ListaAtiv = () => {
    return imprimir();
  }
  return (
    <NativeBaseProvider>
      <ScrollView>
        <DadosAluno>

          <HeaderText>Relatório de Alunos</HeaderText>

          <Aluno>Dados do Aluno</Aluno>
          <Title>Digite o nome do aluno:</Title>
          <Input
            placeholderTextColor="#000"
            defaultValue={nomeAluno}
            onChangeText={a => setAluno(a)}
          />

          <Title>Digite a orientação sexual do aluno:</Title>
          <Input
            placeholderTextColor="#000"
            defaultValue={sexo}
            onChangeText={s => setSexo(s)}
          />

          <Title>Digite o nome do Curso:</Title>
          <Input
            placeholderTextColor="#000"
            defaultValue={nomeCurso}
            onChangeText={c => setCurso(c)}
          />
        </DadosAluno>

        <DadosDisciplina>
          <Aluno>Dados da Disciplina</Aluno>
          <Title>Digite o nome da Disciplina:</Title>
          <Input
            placeholderTextColor="#000"
            defaultValue={nomeDisc}
            onChangeText={d => setDisciplina(d)}
          />

          <Title>Digite a nota da N1:</Title>
          <Input
            placeholderTextColor="#000"
            keyboardType="numeric"
            defaultValue={n1}
            onChangeText={pn => setN1(pn)}
          />

          <Title>Digite a nota da N2:</Title>
          <Input
            placeholderTextColor="#000"
            keyboardType="numeric"
            defaultValue={n2}
            onChangeText={sn => setN2(sn)}
          />

          <Title>Digite a quantidade de aulas da Disciplina:</Title>
          <Input
            placeholderTextColor="#000"
            keyboardType="numeric"
            defaultValue={aulas}
            onChangeText={qa => setAula(qa)}
          />

          <Title>Digite a quantidade de faltas:</Title>
          <Input
            placeholderTextColor="#000"
            keyboardType="numeric"
            value={faltas}
            defaultValue={0}
            onChangeText={f => setFalta(f)}
          />
        </DadosDisciplina>

        <MostrarDados onPress={handleClickRelatorio}>
          <TextBtn>{mostrarRelatorio ? "Ocultar Relatório" : "Mostrar Relatório"}</TextBtn>
        </MostrarDados>

        {mostrarRelatorio &&
          <ResultArea>
            <Aluno style={{ textAlign: "center", marginBottom: 20 }}>Relatório</Aluno>
            <ResultItemTitle>Nome do Estudante</ResultItemTitle>
            <ResultItem>{nomeAluno}</ResultItem>

            <ResultItemTitle>Gênero do Estudante</ResultItemTitle>
            <ResultItem>{sexo}</ResultItem>

            <ResultItemTitle>Nome do Curso</ResultItemTitle>
            <ResultItem>{nomeCurso}</ResultItem>

            <ResultItemTitle>Nome da Disciplina</ResultItemTitle>
            <ResultItem>{nomeDisc}</ResultItem>

            <ResultItemTitle>Nota N1</ResultItemTitle>
            <ResultItem>{parseFloat(n1).toFixed(2)}</ResultItem>

            <ResultItemTitle>Nota N2</ResultItemTitle>
            <ResultItem>{parseFloat(n2).toFixed(2)}</ResultItem>

            <ResultItemTitle>Media do Aluno</ResultItemTitle>
            <ResultItem><Media /></ResultItem>

            <ResultItemTitle>Quantidade de aulas da Disciplina</ResultItemTitle>
            <ResultItem>{parseInt(aulas)}</ResultItem>

            <ResultItemTitle>Quantidade de faltas permitidas</ResultItemTitle>
            <ResultItem>{parseInt(reprovFalta)}</ResultItem>

            <ResultItemTitle>Quantidade de faltas do Aluno</ResultItemTitle>
            <ResultItem>{parseInt(faltas)}</ResultItem>

            <ResultItemTitle>Situação do aluno</ResultItemTitle>
            <ResultItem><Aprovado /></ResultItem>

            <ResultItemTitle>Atividades do Aluno</ResultItemTitle>
            <MostrarLista onPress={handleClickLista}>
              <TextBtn>{mostrarLista ? "Ocultar lista de Atividades" : "Mostrar lista de Atividades"}</TextBtn>
            </MostrarLista>

          </ResultArea>
        }
      </ScrollView>
      {mostrarLista &&
        <ScrollView>
          <ListaAtiv />
        </ScrollView>
      }
    </NativeBaseProvider>
  );
}

export default () => {
  return (
    <Page>
      <NativeBaseProvider>
        <Form />
      </NativeBaseProvider>
    </Page>
  );
}