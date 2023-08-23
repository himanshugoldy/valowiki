import React, { useEffect, useState } from 'react';
import DataContext from "./DataContext";
import axios from 'axios';
import Loader from '../components/Loader';
import ErrorComponent from '../components/ErrorComponent';

const DataState = (props)=>{

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


    return(
        <DataContext.Provider value = {playableAgents}>
            {props.children}
        </DataContext.Provider>
    )
}



export default DataState;