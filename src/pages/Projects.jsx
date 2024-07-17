import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Stack, 
    SimpleGrid, 
    Box,
    Heading,
    Image,
    Text,
    useColorModeValue,
    Divider
} from '@chakra-ui/react'

const ProjectItem = (props: Props) => {

    const { children } = props
  
    return (
        <Stack 
            spacing='20px'
            rounded={10} 
            bg={useColorModeValue('gray.100', 'gray.900')}
            padding={3}  
        >
                <Heading as='h4' size='md'>
                    {children.name}
                </Heading>
                <Image width={'full'} rounded={10} src={children.image} alt='Dan Abramov' />
                <Text>
                    "The quick brown fox jumps over the lazy dog" is an English-language pangram—a
                    sentence that contains all of the letters of the English alphabet. Owing to
                    its existence, Chakra was created.
                </Text>
        </Stack>
    )
}

const projectData = [
    {
        name:'Project 01',
        description:'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available',
        image:'https://i.ytimg.com/vi/rczTV94fvX0/hqdefault.jpg',
        link:'#'
    },
    {
        name:'Project 02',
        description:'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available',
        image:'https://i.ytimg.com/vi/rczTV94fvX0/hqdefault.jpg',
        link:'#'
    },
    {
        name:'Project 01',
        description:'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available',
        image:'https://i.ytimg.com/vi/rczTV94fvX0/hqdefault.jpg',
        link:'#'
    },
    {
        name:'Project 02',
        description:'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available',
        image:'https://i.ytimg.com/vi/rczTV94fvX0/hqdefault.jpg',
        link:'#'
    }
]

export default function Projects () {
    return (
        <>
            <Stack padding={10}>
                <Breadcrumb>
                    <BreadcrumbItem>
                        <BreadcrumbLink href='#'>Home</BreadcrumbLink>
                    </BreadcrumbItem>

                    <BreadcrumbItem>
                        <BreadcrumbLink>Projects</BreadcrumbLink>
                    </BreadcrumbItem>
                </Breadcrumb>

                <Heading>I'm a Heading</Heading>

                <Divider marginTop={5} marginBottom={5} />

                <SimpleGrid minChildWidth='300px' spacing='40px'>
                    {projectData.map((item) => (
                        <ProjectItem key={item}>{item}</ProjectItem>
                    ))}
                </SimpleGrid>

            </Stack>
        </>
    )
}