import React, { useState, useEffect } from 'react';
import { Flex, Text,Image } from '@chakra-ui/react';
import axios from 'axios';
import Loader from './Loader';
import ErrorComponent from './ErrorComponent';



const BundleCard = (props) => {
  const { name, icon } = props;

  return (
    <Flex
        maxW={'xl'}
        display={'flex'}
        alignItems={"center"}
        justifyContent={"center"}
        flexDirection={'column'}
        width={['100%', '100%']}
        minheight={['100%', '100%']}
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
        <Image src={icon} width={['100%','100%']} minHeight={['100%','100%']} justifyContent={'center'} borderRadius={"1rem"}/>
        <Text textAlign={'center'} fontFamily={"Lexend Deca"} fontSize={["1rem","2rem"]} m={".5rem"}>{name}</Text>
      </Flex>
  );
};




const Bundles = () => {
  const [bundles, setBundles] = useState([]);
  const [loading,setLoading] = useState(true);
  const [error,setError] = useState(false);


  const fetchBundles = async () => {
    try {
      const result = await axios.get(`https://valorant-api.com/v1/bundles`);
      setBundles(result.data.data); // Update the buddies state with the fetched data
      setLoading(false);
    } catch (error) {
      console.log(error);
      setError(true);
    }
  };

  useEffect(() => {
    fetchBundles();
  }, [error,loading]);

  if (error) return <ErrorComponent message={'Error while fetching Agents'} />;

  return (
    <Flex Flex display={'flex'} flexWrap={'wrap'} alignItems={"center"} justifyContent={"center"} bgColor={"black"}>

        {
            !loading?(
                <Flex Flex display={'flex'} flexWrap={'wrap'} alignItems={"center"} justifyContent={"center"}>
                    {bundles.map((buddy) => (
                        <BundleCard key={buddy.uuid} name={buddy.displayName} icon={buddy.displayIcon} />
                    ))} 
                </Flex>
            ):(
                <Loader/>
            )
        }



      
    </Flex>
  );
};

export default Bundles;
