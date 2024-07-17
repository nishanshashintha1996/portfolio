import React, { useState, useEffect } from 'react';
import {
    Heading,
    Box,
    Text,
    Stack
} from '@chakra-ui/react';
import { motion } from "framer-motion";

const TypingEffect = ({ textArray, speed }) => {

    const [displayedText, setDisplayedText] = useState('');
    const [indexf, setIndexF] = useState(0);
    const [textIndex, setTextIndex] = useState(0);
    const [text, setText] = useState(textArray[textIndex]);
    const [indexp, setIndexP] = useState(text.length);
    
    useEffect(() => {
        if (indexf < text.length && indexp === text.length) {
          const timeout = setTimeout(() => {
            setDisplayedText((prev) => prev + text[indexf]);
            setIndexF((prev) => prev + 1);
          }, speed);
          return () => clearTimeout(timeout);
        }else{
            setIndexP((prev) => prev - 1);
        }
    }, [indexf, text, speed]);

    useEffect(() => {
        if (indexp >= 0 && indexf === text.length) {
            const timeout = setTimeout(() => {
                setDisplayedText((prev) => prev.slice(0, -1));
                setIndexP((prev) => prev - 1);
            }, speed);
            return () => clearTimeout(timeout);
        }else{
            setIndexF(0);
            setIndexP(text.length);
            setTextIndex((prev) => prev + 1);
            setText(textArray[1]);
        }
    }, [indexp, text, speed]);

    return(
        <Box textAlign="center" mt={10}>
            <Text fontSize="2xl" as={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                {displayedText}
            </Text>
        </Box>
    )

}

export default function Home () {
    return(
        <Stack padding={10}>
            <Heading textAlign={'center'} as='h1' size='4xl' noOfLines={1}>
                Hi I'm Nishan,
            </Heading>
            <Box textAlign="center">
                <TypingEffect textArray={
                    [
                        "Welcome to my portfolio!",
                        "I'm a Web Developer."
                    ]
                } speed={200} />
            </Box>
        </Stack>
    )
}