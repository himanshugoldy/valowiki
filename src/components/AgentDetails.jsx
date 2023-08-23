import React, { useContext,useState,useEffect } from 'react';
import { useParams,useLocation } from 'react-router-dom'; 
import { Flex, Image, Text, Box, Avatar,Button } from '@chakra-ui/react';
import DataContext from '../context/DataContext';


const AbilityCard = ({ ability }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Flex
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Flex
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        width={['120px', '240px']}
        minHeight={['120px', '240px']}
        m="2rem"
        borderRadius="1rem"
        transition="all 0.3s"
        boxShadow='0 5px 5px rgba(253, 69, 86, 0.2)'
        cursor="pointer"
        position="relative"
      >
        {isHovered && (
          <Text
            textAlign="center"
            fontFamily="Lexend Deca"
            fontSize={["0.5rem",".8rem"]}
            zIndex="1"  // Place the text above the card content
            p="1rem"  // Add padding for better visibility
            textColor={"black"}
            width={['150px', '240px']}
            minHeight={['150px', '240px']}
            borderRadius={"1rem"}
            backgroundColor="white"  // Add a background color
          >
            {ability.description}
          </Text>
        )}
        <Image
          src={ability.displayIcon}
          width={['100px', '200px']}
          height={['100px', '200px']}
          justifyContent="center"
          style={{ display: isHovered ? 'none' : 'block' }}
        />
        <Text
          textAlign="center"
          fontFamily="Lexend Deca"
          fontSize={["1rem", "2rem"]}
          m=".5rem"
          style={{ display: isHovered ? 'none' : 'block' }}
        >
          {ability.displayName}
        </Text>
      </Flex>
    </Flex>
  );
};


const AgentAbility = (props) => {
  const agent = props.agentInfo;
  const abilities = agent.abilities;
  
  return (
    <Flex  display={'flex'} flexWrap={'wrap'} alignItems={"center"} justifyContent={"center"}>
        {abilities.map((ability, index) => (
          <AbilityCard key={index} ability={ability} />
        ))}
    </Flex>
  );
};

const AboutDetails = () => {

  const location = useLocation(); // React Router or Reach Router, depending on your setup

  useEffect(() => {
    // Scroll to the top of the page whenever the location changes
    window.scrollTo(0, 0);
  }, [location]);






  const agents = useContext(DataContext);
  const params = useParams();
  let name = params.id;

  if (typeof name === 'string' && name.length > 10) {
    name = 'KAY/O';
  }

  const info = agents.filter((agent) => agent.displayName === name);
  const agentInfo = info[0];
  const roleIcon = agentInfo.role.displayIcon;
  const role = agentInfo.role.displayName.toUpperCase();
  const bgGradient = agentInfo.backgroundGradientColors;
  const bg = agentInfo.background;

  const backgroundStyle = {
    background: `linear-gradient(0deg, #${bgGradient[0]}, #${bgGradient[1]}, #${bgGradient[2]}, #${bgGradient[3]})`,
  };

  const boxStyle = {
    background: bg, // Set the background color
    padding: '4rem', // Adjust padding as needed
  };

  return (
    <Flex flexDirection="column" style={backgroundStyle} minHeight="100vh">
      <Flex style={backgroundStyle} minHeight="50vh" flexDirection={['column','column','column', 'row']} justifyContent={"center"} alignItems={"center"}>
        <Image src={agentInfo.fullPortraitV2} objectFit="contain" width={['100%','100%','100%', '50%']} height={['auto', '100%']} />
        <Box width={['100%','100%','100%', '40%']} style={boxStyle} p={['2rem', '4rem']}>
          <Text fontSize={['4rem', '8rem']} display="flex" textAlign="center" justifyContent="center" fontFamily="Roboto">
            {name}
          </Text>
          <Text fontSize={['1rem', '2rem']} fontFamily="Times New Roman">//ROLE</Text>
          <Flex alignItems="center" textAlign="center">
            <Text fontSize={['2rem', '3rem']} fontFamily="Lexend Deca">
              {role}
            </Text>
            <Avatar src={roleIcon} width={['30px', '40px']} height={['30px', '40px']} />
          </Flex>
          <Text fontSize={['1rem', '2rem']} fontFamily="Times New Roman">//BIOGRAPHY</Text>
          <Text
            fontSize={['14px', '17px']}
            display="flex"
            flexDirection="column"
            textAlign="start"
            justifyContent="flex-start"
            fontFamily="Lexend Deca"
            mt="20px"
          >
            {agentInfo.description}
          </Text>
        </Box>
      </Flex>
      <Flex display={"flex"} justifyContent={"center"}>
          <Text fontSize={["2rem","3rem","4rem","5rem"]} fontFamily="Times New Roman" textAlign={"center"} justifyContent={"center"}>//ABILITIES</Text>
        </Flex>
      <Flex display={'flex'} flexWrap={'wrap'} alignItems={"center"} justifyContent={"center"}>
        <AgentAbility agentInfo={agentInfo} />
      </Flex>
    </Flex>
  );
};

export default AboutDetails;
