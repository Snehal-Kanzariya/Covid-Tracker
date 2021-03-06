import React, {useState, useEffect} from "react";
import { fetchDailyData } from "../../api";
import { Line, Bar } from "react-chartjs-2";
// import { Styles } from "@material-ui/core/styles/withStyles";
import styles from './Chart.module.css';

const Chart = () => {
    const [dailyData, setDailyData] = useState({});
    
    useEffect(() => {
        const fetchAPI = async () => {
            setDailyData (await fetchDailyData());
        }

        console.log(dailyData);

        
        fetchAPI();
    }, []);

    // const lineChart = (
    //     dailyData[0] 
    //     ? (
    //         <Line 
    //         data={{
    //             labels: '',
    //             datasets: [{}, {}],
    //         }}
    //     />) : null
    // );

    return(
        <h1>Chart</h1>
    );
}

export default Chart;