import React, { useState, useEffect } from 'react';
import { Flex, Text,Image } from '@chakra-ui/react';
import axios from 'axios';
import Loader from './Loader';
import ErrorComponent from './ErrorComponent';




const BuddyCard = (props) => {
  const { name, icon } = props;

  return (
    <Flex
        display={'flex'}
        alignItems={"center"}
        justifyContent={"center"}
        flexDirection={'column'}
        width={['70px', '120px']}
        minheight={['70px', '120px']}
        m={['.5rem','.8rem']}
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
        <Image src={icon} width={['70px','120px']} height={['70px','120px']} justifyContent={'center'} bgColor={"black"}/>
        <Text textAlign={'center'} fontFamily={"Lexend Deca"} fontSize={[".4rem",".9rem"]} m={".5rem"}>{name}</Text>
      </Flex>
  );
};




const Buddies = () => {
  const [buddies, setBuddies] = useState([]);
  const [loading,setLoading] = useState(true);
  const [error,setError] = useState(false);


  const fetchBuddies = async () => {
    try {
      const result = await axios.get(`https://valorant-api.com/v1/buddies`);
      setBuddies(result.data.data); // Update the buddies state with the fetched data
      setLoading(false);
    } catch (error) {
      console.log(error);
      setError(true);
    }
  };

  useEffect(() => {
    fetchBuddies();
  }, [error,loading]);

  if (error) return <ErrorComponent message={'Error while fetching Agents'} />;

  return (
    <Flex Flex display={'flex'} flexWrap={'wrap'} alignItems={"center"} justifyContent={"center"} bgColor={"black"} >

        {
            !loading?(
                <Flex Flex display={'flex'} flexWrap={'wrap'} alignItems={"center"} justifyContent={"center"}>
                    {buddies.map((buddy) => (
                        <BuddyCard key={buddy.uuid} name={buddy.displayName} icon={buddy.displayIcon} />
                    ))} 
                </Flex>
            ):(
                <Loader/>
            )
        }



      
    </Flex>
  );
};

export default Buddies;
