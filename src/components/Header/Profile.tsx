import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData: boolean | undefined
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return(
    <Flex align='center' >
      {showProfileData && (
        <Box mr='4' textAlign='right'>
          <Text>Felipe Pinto</Text>
          <Text color='gray.300' fontSize='small'>
            felipepinto.fpm@gmail.com
          </Text>
        </Box>
      )}
      
      <Avatar size='md' name='Felipe Pinto' src='https://github.com/felipefpm.png' />
    </Flex>
  );
}