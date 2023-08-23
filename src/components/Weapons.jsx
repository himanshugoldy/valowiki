import React, { useState, useEffect } from 'react';
import { Flex, Text,Image } from '@chakra-ui/react';
import axios from 'axios';
import Loader from './Loader';
import ErrorComponent from './ErrorComponent';



const WeaponCard = (props) => {
  const { name, icon,info } = props;
  console.log(info);
  let cost = 0;
  let category = "Normal";
  if(info!==null){
    cost = info.cost;
    category = info.category;
  }

  return (
    <Flex
         maxW={'xl'}
        display={'flex'}
        alignItems={"center"}
        justifyContent={"center"}
        flexDirection={'column'}
        width={['100%', '100%']}
        height={['100%', '100%']}
        m={['1rem','1.5rem']}
        borderRadius={"1rem"}
        transition={"all 0.3s"}
        css={{
          "&:hover": {
            transform: "scale(1.1)",
          },
        }}
        boxShadow="0 5px 5px rgba(253, 69, 86, 0.5)"
        cursor={"pointer"}
      >
        <Image src={icon} width={['100%','100%']} minHeight={['100%','100%']} justifyContent={'center'} objectFit={"cover"} />
        <Text textAlign={'center'} fontFamily={"Lexend Deca"} fontSize={["1rem","2rem"]} m={".5rem"}>{name}</Text>
        <Text textAlign={'center'} fontFamily={"Roboto"} fontSize={["1rem","2rem"]} m={".5rem"}>Cost : {cost}</Text>
        <Text textAlign={'center'} fontFamily={"Times New Roman"} fontSize={["1rem","2rem"]} m={".5rem"}>Category : {category}</Text>
      </Flex>
  );
};




const Weapons = () => {
  const [Weapons, setWeapons] = useState([]);
  const [loading,setLoading] = useState(true);
  const [error,setError] = useState(false);


  const fetchWeapons = async () => {
    try {
      const result = await axios.get(`https://valorant-api.com/v1/weapons`);
      setWeapons(result.data.data); // Update the buddies state with the fetched data
      console.log(result.data.data[0].shopData.newImage);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setError(true);
    }
  };

  useEffect(() => {
    fetchWeapons();
  }, [error,loading]);

  if (error) return <ErrorComponent message={'Error while fetching Agents'} />;

  return (
    <Flex Flex display={'flex'} flexWrap={'wrap'} alignItems={"center"} justifyContent={"center"} bgColor={"black"}>

        {
            !loading?(
                <Flex Flex display={'flex'} flexWrap={'wrap'} alignItems={"center"} justifyContent={"center"}>
                    {Weapons.map((weapon) => (
                        <WeaponCard key={weapon.uuid} name={weapon.displayName} icon={weapon.displayIcon} info = {weapon.shopData} />
                    ))} 
                </Flex>
            ):(
                <Loader/>
            )
        }



      
    </Flex>
  );
};

export default Weapons;
