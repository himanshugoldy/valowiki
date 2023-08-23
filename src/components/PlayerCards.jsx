import React, { useState, useEffect } from 'react';
import { Flex, Text,Image } from '@chakra-ui/react';
import axios from 'axios';
import Loader from './Loader';
import ErrorComponent from './ErrorComponent';


const Card = (props) => {
  const { name, icon } = props;

  return (
    <Flex
      maxW="xl"
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      width={["30%", "15%"]} // Responsive width for base and medium screens
      height={["50%", "100%"]} // Responsive height for base and medium screens
      m={['1rem','2rem']}
      borderRadius="1rem"
      transition="all 0.3s"
      _hover={{
        transform: "scale(1.1)",
      }}
      boxShadow="0 5px 5px rgba(253, 69, 86, 0.5)"
      cursor="pointer"
    >
      <Image
        src={icon}
        width="100%" // Image width
        height={["100%","100%"]} // Image height
        objectFit="contain"
        borderRadius="1rem"
      />
      <Text
        textAlign="center"
        fontFamily="Lexend Deca"
        fontSize={[".6rem", "1.1rem"]} // Font size for base and medium screens
        m=".5rem"
      >
        {name}
      </Text>
    </Flex>
  );
};




const PlayerCards = () => {
  const [bundles, setBundles] = useState([]);
  const [loading,setLoading] = useState(true);
  const [error,setError] = useState(false);


  const fetchPlayerCards = async () => {
    try {
      const result = await axios.get(`https://valorant-api.com/v1/playercards`);
      setBundles(result.data.data); // Update the buddies state with the fetched data
      setLoading(false);
    } catch (error) {
      console.log(error);
      setError(true);
    }
  };

  useEffect(() => {
   fetchPlayerCards();
  }, [error,loading]);

  if (error) return <ErrorComponent message={'Error while fetching Agents'} />;

  return (
    <Flex Flex display={'flex'} flexWrap={'wrap'} alignItems={"center"} justifyContent={"center"} bgColor={"black"}>

        {
            !loading?(
                <Flex Flex display={'flex'} flexWrap={'wrap'} alignItems={"center"} justifyContent={"center"} width={"100%"}>
                    {bundles.map((player) => (
                        <Card key={player.uuid} name={player.displayName} icon={player.largeArt} />
                    ))} 
                </Flex>
            ):(
                <Loader/>
            )
        }



      
    </Flex>
  );
};

export default PlayerCards;
