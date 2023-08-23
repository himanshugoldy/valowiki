import React, { useState, useEffect } from 'react';
import { Flex, Text,Image } from '@chakra-ui/react';
import axios from 'axios';
import Loader from './Loader';
import ErrorComponent from './ErrorComponent';
import rangeBluePrint from "../assets/rangeBluePrint.webp"



const MapCard = (props) => {
  const { name, icon} = props;
  let bluePrint = props.bluePrint
  if(bluePrint===null){
    bluePrint = rangeBluePrint;
  }

  return (
    <Flex
        maxW={'xl'}
        display={'flex'}
        alignItems={"center"}
        justifyContent={"center"}
        flexDirection={'column'}
        width={['100%', '100%']}
        minheight={['50%', '50%']}
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
        <Flex display={"flex"} direction={"row"} >
            <Image src={icon} width={['50%','50%']} minHeight={['50%','50%']} justifyContent={'center'} borderRadius={"1rem"} objectFit={"cover"} />
            <Image src={bluePrint} width={['50%','50%']} minHeight={['50%','50%']} justifyContent={'center'} borderRadius={"1rem"} objectFit={"cover"}/>
        </Flex>
        
        <Text textAlign={'center'} fontFamily={"Lexend Deca"} fontSize={["1rem","2rem"]} m={".5rem"}>{name}</Text>
      </Flex>
  );
};




const Maps = () => {
  const [Maps, setMaps] = useState([]);
  const [loading,setLoading] = useState(true);
  const [error,setError] = useState(false);


  const fetchMaps = async () => {
    try {
      const result = await axios.get(`https://valorant-api.com/v1/Maps`);
      setMaps(result.data.data); // Update the buddies state with the fetched data
      setLoading(false);
    } catch (error) {
      console.log(error);
      setError(true);
    }
  };

  useEffect(() => {
    fetchMaps();
  }, [error,loading]);

  if (error) return <ErrorComponent message={'Error while fetching Agents'} />;

  return (
    <Flex Flex display={'flex'} flexWrap={'wrap'} alignItems={"center"} justifyContent={"center"} bgColor={"black"}>

        {
            !loading?(
                <Flex Flex display={'flex'} flexWrap={'wrap'} alignItems={"center"} justifyContent={"center"}>
                    {Maps.map((map) => (
                        <MapCard key={map.uuid} name={map.displayName} icon={map.splash} bluePrint = {map.displayIcon} />
                    ))} 
                </Flex>
            ):(
                <Loader/>
            )
        }



      
    </Flex>
  );
};

export default Maps;
