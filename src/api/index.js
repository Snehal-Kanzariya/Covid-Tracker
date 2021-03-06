import axios from 'axios';

// const url = "https://covid19.who.int/table";
const url = "https://covid19.mathdro.id/api";

export const fetchData = async () => {
    try {
        // get the data
        // destructuring data
        const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(url);
        
        
        return { confirmed, recovered, deaths, lastUpdate };
        
    } catch (error) {
        console.log(error);
    }
}

export const fetchDailyData = async ()=> {
    try {
        const { data } = await axios.get(`${url}/daily`);
        console.log(data);
    } catch (error) {
        
    }
}