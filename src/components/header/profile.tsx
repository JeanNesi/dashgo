import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps{
  showProfileData?: boolean
}

export function Profile({showProfileData = true}: ProfileProps){
  return(
    <Flex align='center'>
      {showProfileData &&
      <Box mr='4' textAlign='center'>
        <Text>Jean Carlos Nesi</Text>
        <Text color='gray.300' fontSize='small'>
            jean.carlos_nesi@hotmail.com
        </Text>
      </Box>
      }

    <Avatar
      size='md'
      name='Jean Carlos Nesi'
      src='https://github.com/JeanNesi.png'
    />
</Flex>
  )
}