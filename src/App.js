import React, { Component } from "react";
import {Cards, Chart, CountryPicker} from './Components';
import styles from './App.module.css';  
// call function
import { fetchData } from "./api";

class App extends React.Component{
state = {
    data: {},
}

    async componentDidMount() {
        const fetchedData = await fetchData();

        this.setState({ data: fetchedData });
    }
    render() {
      const { data } = this.state;

        return(
            <div className={styles.container}>
              <Cards data={data}/>
              <CountryPicker /> 
              <Chart />               
            </div>
        );
    }
}


export default App;


//     const data = await fetchData()

//         console.log(data);
//     return(
//         <div className={styles.container}>
//             <Cards />
//             <Chart />
//             <CountryPicker />
//         </div>
//     )
// }