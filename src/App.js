import { useState } from 'react';
import { getRandomNumber } from './Components/GetRandomNumber';
import { ChakraProvider, Button, Box, Text, Img, Center, Grid } from '@chakra-ui/react'

function App() {

  const [number, setNumber] = useState([])

  const handleClick = () => {
    setNumber(arr => [...arr, getRandomNumber(1, 49, number)]);

  }

  return <ChakraProvider>
    <a href="/">
      <Box roundedBottom={10} bg="#9F9F92" textAlign="center" marginBottom={2}>
        <Text fontSize='6xl' color="white" p={2}>Generator Liczb Lotto</Text>
      </Box>
    </a>
    <Center>
      <Box border="2px" borderRadius={10} borderColor="#9F9F92" width="20%" mt="70px">
        <Center>
          <Grid templateColumns='repeat(3, 4fr)' gap={1} >
            <Box position="relative" boxSize="100px">
              <Img src="https://animalcity.pl/pol_pl_Trixie-Pilka-gumowa-twarda-3302-7cm-1000_4.jpg" boxSize="100px" />
              <Text position="absolute" top="30%" left="35%" fontSize="2xl" fontWeight="semibold">{number[0]}</Text>
            </Box>
            <Box position="relative" boxSize="100px">
              <Img src="https://animalcity.pl/pol_pl_Trixie-Pilka-gumowa-twarda-3302-7cm-1000_4.jpg" boxSize="100px" />
              <Text position="absolute" top="30%" left="35%" fontSize="2xl" fontWeight="semibold">{number[1]}</Text>
            </Box>
            <Box position="relative" boxSize="100px">
              <Img src="https://animalcity.pl/pol_pl_Trixie-Pilka-gumowa-twarda-3302-7cm-1000_4.jpg" boxSize="100px" />
              <Text position="absolute" top="30%" left="35%" fontSize="2xl" fontWeight="semibold">{number[2]}</Text>
            </Box>
            <Box position="relative" boxSize="100px">
              <Img src="https://animalcity.pl/pol_pl_Trixie-Pilka-gumowa-twarda-3302-7cm-1000_4.jpg" boxSize="100px" />
              <Text position="absolute" top="30%" left="35%" fontSize="2xl" fontWeight="semibold">{number[3]}</Text>
            </Box>
            <Box position="relative" boxSize="100px">
              <Img src="https://animalcity.pl/pol_pl_Trixie-Pilka-gumowa-twarda-3302-7cm-1000_4.jpg" boxSize="100px" />
              <Text position="absolute" top="30%" left="35%" fontSize="2xl" fontWeight="semibold">{number[4]}</Text>
            </Box>
            <Box position="relative" boxSize="100px">
              <Img src="https://animalcity.pl/pol_pl_Trixie-Pilka-gumowa-twarda-3302-7cm-1000_4.jpg" boxSize="100px" />
              <Text position="absolute" top="30%" left="35%" fontSize="2xl" fontWeight="semibold">{number[5]}</Text>
            </Box>
          </Grid>
        </Center>
        <Center>
          <Box p={2}>
            <Button colorScheme='yellow' size='lg' m="2" onClick={handleClick}
              disabled={number.length < 6 ? false : true}
            >
              Losuj liczbę  !
            </Button>
            <a href="/"><Button colorScheme='yellow' size='sm' m="2">
              Losuj od nowa
            </Button>
            </a>
          </Box>
        </Center>
      </Box>
    </Center>
  </ChakraProvider>
}

export default App;
