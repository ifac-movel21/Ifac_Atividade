import { HStack, Checkbox, Box, ScrollView, SectionList, NativeBaseProvider } from 'native-base';
import React from 'react';
import styled from 'styled-components/native';
import lista from './lista.js';

const ResultArea = styled.View`
  margin-top: 10px;
  background-color: #007E3A;
  padding: 20px;
`;

const ItemText = styled.Text`
  font-size: 15px;
  flex: 1;
`;

export default () => {
  return (
    <ResultArea>
    <SectionList
      sections={lista}
      keyExtractor={(item, index) => item + index}
      renderItem={({ item }) => (
        <Box style={{flexDirection: "row"}} px={2} py={2} rounded="sm" my={2} bg="secondary.200">
          <>
          <ItemText>{item.task}</ItemText>
          {item.done == true && 
            <HStack space={5}>
              <Checkbox value="done" accessibilityLabel="This is a dummy checkbox" isDisabled defaultIsChecked/>
            </HStack>
          }
          </>
        </Box>
        
      )}
      renderSectionHeader={({ section: { title } }) => (
        <Box
          px={20}
          py={2}
          rounded="md"
          my={2}
          bg="primary.200"
          _text={{
            fontWeight: "bold",
            textAlign: "center"
          }}
        >
          {title}
        </Box>
      )}
    />
    </ResultArea>
  );
}