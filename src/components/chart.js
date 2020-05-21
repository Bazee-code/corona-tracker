import React from 'react';
import axios from 'axios';
import {Line,Bar} from 'react-chartjs-2';

const url = `https://covid19.mathdro.id/api/daily`;

class Chart extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			dailyData : []
		};
	}

	componentDidMount(){
		axios.get(url)
		.then((res)=>{
			// console.log(res.data);
			// update our state
			this.setState({dailyData: res.data});
		})
		.catch((e)=>{
			console.log(e);
		})
	};

	render(){
		const {dailyData} = this.state;
		// console.log(dailyData);
		const {data,country} = this.props;
		console.log(data);

		// create our line chart to show global data
		const lineChart = dailyData.length !==0 ? <Line 
			data={{
				labels : dailyData.map(({reportDate})=>reportDate),
				datasets : [{
					data:dailyData.map(({confirmed})=>confirmed.total),
					label : 'Infected',
					borderColor : 'blue',
					fill : true
				},{
					data : dailyData.map(({deaths})=>deaths.total),
					label : 'Deaths',
					borderColor : 'red',
					backgroundColor : 'rgba(255,0,0,0.5)',
					fill : true
				}]
			}}

		/> : null

		// create bar chart to show each country data
		const barChart = (
			// we shall use data confirmed since all cases depend on confirmed cases
			data.confirmed ? 
			<Bar 
				data={{
					labels : ['Infected', 'Deaths','Recovered'],
					datasets :[{
						label : 'People',
						backgroundColor : ['yellow','red','green'],
						data : [data.confirmed.value,data.deaths.value,data.recovered.value]
					}]
				}}
				options ={{
					legend : {display:false},
					title : {display:true,text:`Current state in ${country}`}
				}}

			/> : null
		);

	return(
		<div className="row ">
			<div className="col-md-2"></div>
			<div className="col-md-8">
				{/* if user selects country we change data accordingly*/}
				{country ? barChart : lineChart}
			</div>
			<div className="col-md-2"></div>
		</div>
		)
	}
}


export default Chart;