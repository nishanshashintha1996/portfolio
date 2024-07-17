import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Stack,
    Heading,
    FormControl,
    FormLabel,
    Input,
    FormHelperText,
    Divider
  } from '@chakra-ui/react'

export default function Contact () {
    return (
        <>
            <Stack padding={10}>
                <Breadcrumb>
                    <BreadcrumbItem>
                        <BreadcrumbLink href='#'>Home</BreadcrumbLink>
                    </BreadcrumbItem>

                    <BreadcrumbItem>
                        <BreadcrumbLink>Contact</BreadcrumbLink>
                    </BreadcrumbItem>
                </Breadcrumb>

                <Heading>I'm a Heading</Heading>

                <Divider marginTop={5} marginBottom={5} />
                
                <FormControl>
                    <FormLabel>Email address</FormLabel>
                    <Input type='email' />
                    <FormHelperText>We'll never share your email.</FormHelperText>
                </FormControl>

                <FormControl>
                    <FormLabel>Email address</FormLabel>
                    <Input type='email' />
                    <FormHelperText>We'll never share your email.</FormHelperText>
                </FormControl>

                <FormControl>
                    <FormLabel>Email address</FormLabel>
                    <Input type='email' />
                    <FormHelperText>We'll never share your email.</FormHelperText>
                </FormControl>

            </Stack>
            
        </>
    )
}