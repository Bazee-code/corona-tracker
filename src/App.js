import React from 'react';
import './App.css';
import axios from 'axios';

// local
import {Cards,Charts,Countries} from './components';

const url = `https://covid19.mathdro.id/api`;

class App extends React.Component{

   constructor(props){
      super(props);

      this.state ={
        data : {},
        country : '',
        mode : 'light'
      };
    };

    componentDidMount(){
      axios.get(url)
      .then((res)=>{
        console.log(res.data);
        this.setState({
          data : res.data
        });
      })
      .catch((e)=>{
        console.log(e);
      });
    };

    handleCountryChange=(country)=>{
      console.log(country);
      let changeableUrl = url;

      if(country){
        changeableUrl = `${url}/countries/${country}`
      };

      axios.get(changeableUrl)
      .then((res)=>{
        // console.log(changeableUrl);
        this.setState({
          data : res.data,
          country : country
        })
      })
      .catch((e)=>{
        console.log(e);
      });
    };

  render(){
    const {data,country} = this.state;
    console.log(data);

    return (
        <div className="App ">
          <div className="row">
            <div className="col-sm-4 col-md-5"></div>
            <div className="col-sm-4 col-md-4">
              <img src="./logo1.jpg" className="img-fluid" alt="header"/>
            </div>
            <div className="col-sm-4 col-md-3"></div>
          </div>
          
          <Cards data={data}/>
          <Countries handleCountryChange ={this.handleCountryChange} />
          <Charts data={data} country={country}/>
        </div>
    );
  }
}

export default App;
