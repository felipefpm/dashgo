import { Box, Button, Checkbox, Flex, Heading, Icon, Table, Tbody, Td, Th, Thead, Tr, Text, useBreakpointValue, Spinner } from '@chakra-ui/react';
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { RiAddLine, RiEditLine } from "react-icons/ri";
import { Pagination } from "../../components/Pagination";
import { Link } from '@chakra-ui/react';
import { useUsers } from '../../services/hooks/useUsers';
import { useState } from 'react';

export default function UserList() {
  const [page, setPage] = useState(1)
  const { data, isLoading, isFetching, error } = useUsers(page)

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })

  return (
    <Box>
      <Header />

      <Flex w='100%' my='6' maxW={1480} mx='auto' px={['4', '4', '6']}>
        <Sidebar />
        
        <Box flex='1' borderRadius={8} bg='gray.800' p='8'>
          <Flex mb='8' justify='space-between' align='center'>
            <Heading size='lg' fontWeight='normal'>
              Usuários

              {!isLoading && isFetching && <Spinner size='small' color='gray.500' ml='4' /> }
            </Heading>
            <Link href='/users/create'>
              <Button
                as='a'
                size='sm'
                fontSize='sm'
                colorScheme='pink'
                leftIcon={<Icon as={RiAddLine} />}
              >
                Criar novo
              </Button>
            </Link>
          </Flex>

          { isLoading ? (
            <Flex justify='center'>
              <Spinner />
            </Flex>
          ) : error ? (
            <Flex justify='center'>
              <Text>
                Falha ao obter os dados
              </Text>
            </Flex>
          ) : (
            <>
              <Table colorScheme='whiteAlpha'>
                <Thead>
                  <Tr>
                    <Th px={['4', '4', '6']} color='gray.300' width='8' >
                      <Checkbox colorScheme='pink' />
                    </Th>
                    <Th>
                      Usuário
                    </Th>
                    {isWideVersion && (
                      <Th>
                        Data de cadastro
                      </Th>
                    )}
                    <Th width='8'>

                    </Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {data?.users.map(user => {
                    return (
                      <Tr key={user.id}>
                        <Td px={['4', '4', '6']}>
                          <Checkbox colorScheme='pink' />
                        </Td>
                        <Td>
                          <Box>
                            <Text fontWeight='bold'>{user.name}</Text>
                            <Text fontSize='sm' color='gray.300'>{user.email}</Text>
                          </Box>
                        </Td>
                        {isWideVersion && (
                          <Td>
                            {user.createdAt }
                          </Td>
                        )}
                        <Td>
                          <Button
                            as='a'
                            size='sm'
                            fontSize='sm'
                            colorScheme='pink'
                            justifyItems={isWideVersion && 'center'}
                            leftIcon={<Icon as={RiEditLine} />}
                          >
                            {isWideVersion ? 'Editar' : ''}
                          </Button>
                        </Td>
                      </Tr>
                    )
                  })}
                </Tbody>
              </Table>
              <Pagination 
                totalCountOfRegisters={data?.totalCount as number}
                currentPage={page}
                onPageChange={setPage}
              />
            </>
          )}
        </Box>
      </Flex>
    </Box>
  );
}