import {
  Box,
  Flex,
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  HStack
} from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

interface Props {
  children: React.ReactNode
}
const Links = ['About Me', 'Projects', 'Contact']

const NavLink = (props: Props) => {

    const { children } = props
  
    return (
      <Box
        as="a"
        px={2}
        py={1}
        color={useColorModeValue('black', 'white')}
        rounded={'md'}
        _hover={{
          textDecoration: 'none',
          bg: useColorModeValue('gray.200', 'gray.700'),
        }}
        href={'#' + children.replace(/ /g,'').toLowerCase()}>
        {children}
      </Box>
    )
}

export default function NavBar() {
    
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { colorMode, toggleColorMode } = useColorMode()
    const username = 'Nishan Shashintha'
    return (
        <>
            <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                <Box>{username}</Box>
                <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
                    {Links.map((link) => (
                        <NavLink key={link}>{link}</NavLink>
                    ))}
                </HStack>
                <Flex alignItems={'center'}>
                    <Stack direction={'row'} spacing={7}>
                    <Button onClick={toggleColorMode}>
                        {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                    </Button>

                    <Menu>
                        <MenuButton
                        as={Button}
                        rounded={'full'}
                        variant={'link'}
                        cursor={'pointer'}
                        minW={0}>
                        <Avatar
                            size={'sm'}
                            src={'https://media.licdn.com/dms/image/D5603AQGaPtucD6-Bkg/profile-displayphoto-shrink_200_200/0/1711528249705?e=2147483647&v=beta&t=VBSK6i2vvS_zAM1fbk8HejllSXkKxEOiBxUNs78hc-U'}
                        />
                        </MenuButton>
                        <MenuList alignItems={'center'}>
                        <br />
                        <Center>
                            <Avatar
                            size={'2xl'}
                            src={'https://media.licdn.com/dms/image/D5603AQGaPtucD6-Bkg/profile-displayphoto-shrink_200_200/0/1711528249705?e=2147483647&v=beta&t=VBSK6i2vvS_zAM1fbk8HejllSXkKxEOiBxUNs78hc-U'}
                            />
                        </Center>
                        <br />
                        <Center>
                            <p>{username}</p>
                        </Center>
                        <br />
                        <MenuDivider />
                        <MenuItem>Github</MenuItem>
                        <MenuItem>LinkedIn</MenuItem>
                        <MenuItem>WhatsApp</MenuItem>
                        </MenuList>
                    </Menu>
                    </Stack>
                </Flex>
                </Flex>
            </Box>
        </>
    )

}
