import { Flex, Heading, Image, Text, useBreakpointValue } from '@chakra-ui/react';
import React from 'react';
import { useEffect } from 'react';
import { useParams,useLocation } from 'react-router-dom'; 
import backgroundImage from '../assets/wallpaper.jpg'; // Import your image
import { color } from 'framer-motion';
import "../App.css"

const Home = () => {

  const location = useLocation(); // React Router or Reach Router, depending on your setup

  useEffect(() => {
    // Scroll to the top of the page whenever the location changes
    window.scrollTo(0, 0);
  }, [location]);


  const headingSize = useBreakpointValue({ base: '4rem', md: '5rem', lg: '6rem', xl: '7rem' });
  const textSize = useBreakpointValue({ base: '0.8rem', md: '0.8rem', lg: '1rem', xl: '1.5rem' });
  return (
    <Flex
      display={"flex"}
      justifyContent="center"
      alignItems="center"
      width="100vw"
      height="90vh"
      bg="black" // Set background color to black
      position="relative"
      direction="column"
    >
      <Image
        src={backgroundImage}
        alt="Background"
        objectFit="cover" // Set to "contain"
        width="100%"
        height="100%"
        position="absolute"
        top="0"
        left="0"
        zIndex="100"
        filter="blur(1px)" // Apply blur effect to the background image
      />
      <Flex display={"flex"} direction={"column"} alignItems={"center"} justifyContent={"center"}>
        <Text
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          fontSize={textSize} // Responsive font size
          color="white"
          textShadow="2px 2px 4px rgba(0, 0, 0, 0.4)"
          fontWeight="italic"
          zIndex="200"
        >
          A 5v5 character-based game Valorant's Wikipedia
        </Text>
        <Heading
          fontFamily={"Lexend Deca"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          as="h1"
          fontSize={headingSize} // Responsive font size
          color="white"
          textShadow="2px 2px 4px rgba(0, 0, 0, 0.4)"
          fontWeight="bold"
          zIndex="200"
        >
          VALOWIKI
        </Heading>
      </Flex>
    </Flex>
  );
};

export default Home;
