import React, { useState, useEffect } from 'react';
import { Flex, Text,Image } from '@chakra-ui/react';
import axios from 'axios';
import Loader from './Loader';
import ErrorComponent from './ErrorComponent';



const GameCard = (props) => {
  const { name, icon,duration} = props;
  return (
    <Flex
        display={'flex'}
        alignItems={"center"}
        justifyContent={"center"}
        flexDirection={'column'}
        width={['40%', '30%']}
        minheight={['50%', '40%']}
        m={['1rem','1.5rem']}
        borderRadius={"1rem"}
        transition={"all 0.3s"}
        css={{
          "&:hover": {
            transform: "scale(1.1)",
          },
        }}
        boxShadow='0 5px 5px rgba(253, 69, 86, 0.2)'
        cursor={"pointer"}
      >
        <Image src={icon} width={['40%','30%']} minHeight={['50%','40%']} justifyContent={'center'}/>
        <Text textAlign={'center'} fontFamily={"Lexend Deca"} fontSize={[".8rem","2rem"]} m={".5rem"}>{name}</Text>
        <Text textAlign={'center'} fontFamily={"Lexend Deca"} fontSize={[".8rem","2rem"]} m={".5rem"}>Duration : {props.duration}</Text>
      </Flex>
  );
};




const GameModes = () => {
    const [GameModes, setGameModes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
  
    const fetchGameModes = async () => {
      try {
        const result = await axios.get(`https://valorant-api.com/v1/gamemodes`);
        setGameModes(result.data.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setError(true);
      }
    };
  
    useEffect(() => {
      fetchGameModes();
    }, []);
  
    if (error) return <ErrorComponent message={'Error while fetching Game Modes'} />;
  
    return (
      <Flex display={'flex'} flexWrap={'wrap'} alignItems={"center"} justifyContent={"center"} bgColor={"black"}>
        {!loading ? (
          <Flex display={'flex'} flexWrap={'wrap'} alignItems={"center"} justifyContent={"center"}>
            {GameModes.filter((game) => game.duration !== null).map((game) => (
              <GameCard key={game.uuid} name={game.displayName} icon={game.displayIcon} duration={game.duration} />
            ))}
          </Flex>
        ) : (
          <Loader />
        )}
      </Flex>
    );
  };
  

export default GameModes;
