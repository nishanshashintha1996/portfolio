import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Stack
} from '@chakra-ui/react';


export default function AboutMe () {
    return (
        <>
            <Stack padding={10}>
                <Breadcrumb>
                    <BreadcrumbItem>
                        <BreadcrumbLink href='#'>Home</BreadcrumbLink>
                    </BreadcrumbItem>

                    <BreadcrumbItem>
                        <BreadcrumbLink>About Me</BreadcrumbLink>
                    </BreadcrumbItem>
                </Breadcrumb>
            </Stack>
            
        </>
    )
}