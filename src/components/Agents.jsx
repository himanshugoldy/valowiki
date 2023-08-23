import React, { useEffect, useState } from 'react';
import { Flex, Container,Image,Text,Button,Box } from '@chakra-ui/react';
import AboutDetails from './AgentDetails.jsx';
import Loader from './Loader.jsx';
import ErrorComponent from './ErrorComponent.jsx';
import axios from 'axios';
import allRounder from "../assets/allRounder.webp"




import { Link, useNavigate } from 'react-router-dom';

const AgentCard = (props) => {


  const agentLink = props.name === "KAY/O" ? `/agents/${props.id}` : `/agents/${props.name}`;
  return (
    <Link 
      to = {agentLink}
    >
      <Flex
        display={'flex'}
        alignItems={"center"}
        justifyContent={"center"}
        flexDirection={'column'}
        // flexWrap={"wrap"}
        width={['100px', '70%']}
        height={['200px', '60%']}
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
        <Image src={props.img} width={['100%','100%']} height={['100%','100%']} justifyContent={'center'}/>
        <Text textAlign={'center'} fontFamily={"Lexend Deca"} fontSize={["1rem","2rem"]} m={".5rem"}>{props.name}</Text>
        <Button textAlign={'center'} fontFamily={"Lexend Deca"} fontSize={[".5rem","1rem"]} m={".5rem"} bgColor={"#FD4556"}
            borderRadius={"2rem"}
            _hover={{
                bg:'#BD3944',
            }}
            >Explore More</Button>
      </Flex>
    </Link>
  );
};

const Agents = () => {
  const [agents, setAgents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchAgents = async () => {
    try {
      const result = await axios.get('https://valorant-api.com/v1/agents');
      setAgents(result.data.data);
      setLoading(false);
    } catch (error) {
      setError(true);
    }
  };

  useEffect(() => {
    fetchAgents();
  }, []);

  if (error) return <ErrorComponent message={'Error while fetching Agents'} />;

  const playableAgents = agents.filter((agent) => agent.isPlayableCharacter === true);


  return (
    <Flex width={"100%"} 
    >
      {!loading ? (
        <Flex
        width={"100%"}
        display={'flex'}
        flexWrap={'wrap'}
        alignItems={'center'}
        justifyContent={'center'}
        zIndex={"1000"}
        bgColor={"black"}
      >
        {playableAgents.map((agent) => (
          <AgentCard key={agent.uuid} id={agent.uuid} name={agent.displayName} img={agent.displayIcon} selectedAgents={agents} />
        ))}
      </Flex>      
      ) : (
        <Loader />
      )}
    </Flex>
    
  );
};

export default Agents;
