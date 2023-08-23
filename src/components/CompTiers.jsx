import React, { useState, useEffect } from 'react';
import { Flex, Text,Image } from '@chakra-ui/react';
import axios from 'axios';
import Loader from './Loader';
import ErrorComponent from './ErrorComponent';

const RankCard = (props) => {
  const { name,tier,colors,bg} = props;
  let icon = props.icon;
  if(icon===null){
    icon = "https://media.valorant-api.com/competitivetiers/e4e9a692-288f-63ca-7835-16fbf6234fda/0/smallicon.png";
  }

  return (
    <Flex
        backgroundColor={`#${bg}`}
        maxW={'xl'}
        display={'flex'}
        alignItems={"center"}
        justifyContent={"center"}
        flexDirection={'column'}
        width={'150px'}
        height={'150px'}
        m={['1rem','1.5rem']}
        borderRadius={"1rem"}
        transition={"all 0.3s"}
        css={{
          "&:hover": {
            transform: "scale(1.1)",
          },
        }}
        boxShadow='0 10px 10px rgba(0, 0, 0, 0.5)'
        cursor={"pointer"}
      >
        <Image src={icon} width={'50px'} height={'50px'}  justifyContent={'center'} borderRadius={"1rem"}/>
        <Text color={"white"} textAlign={'center'} fontFamily={"Lexend Deca"} fontSize={["1rem","1rem"]} m={".5rem"}>{name}</Text>
        <Text color={"white"} textAlign={'center'} fontFamily={"Lexend Deca"} fontSize={["1rem","1rem"]} m={".5rem"}>Tier: {tier}</Text>
      </Flex>
  );
};




const CompTiers = () => {
  const [Ranks, setRanks] = useState([]);
  const [loading,setLoading] = useState(true);
  const [error,setError] = useState(false);


  const fetchCompTiers = async () => {
    try {
      const result = await axios.get(`https://valorant-api.com/v1/competitivetiers`);
      const data = result.data.data;
      setRanks(data[data.length-1].tiers); // Update the buddies state with the fetched data
      console.log(data[data.length-1].tiers);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setError(true);
    }
  };

  useEffect(() => {
    fetchCompTiers();
  }, [error,loading]);

  if (error) return <ErrorComponent message={'Error while fetching Agents'} />;

  return (
    <Flex Flex display={'flex'} flexWrap={'wrap'} alignItems={"center"} justifyContent={"center"} bgColor={"black"}>

        {
            !loading?(
                <Flex Flex display={'flex'} flexWrap={'wrap'} alignItems={"center"} justifyContent={"center"}>
                    {Ranks.reverse().map((ranks) => (
                        <RankCard key={ranks.tier} name={ranks.tierName} icon={ranks.smallIcon} tier = {ranks.tier} colors = {ranks.color} bg = {ranks.backgroundColor}/>
                    ))} 
                </Flex>
            ):(
                <Loader/>
            )
        }



      
    </Flex>
  );
};

export default CompTiers;
