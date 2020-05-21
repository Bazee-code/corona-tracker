import React from 'react';
import axios from 'axios';


const url = `https://covid19.mathdro.id/api/countries`;

class Countries extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			countries : {}
		};
	};

	componentDidMount(){
		axios.get(url)
		.then((res)=>{
			console.log(res.data);
			this.setState({
				countries : res.data
			});
		})
		.catch((e)=>{
			console.log(e);
		})
	};

	render() {
		const {countries:{countries}} = this.state;
		console.log(countries);
		const {handleCountryChange} = this.props;

		return (
			<div className="row m-3 form-control-md ">
				<div className="col-sm-4 col-md-4"></div>
				<div className="col-sm-4 col-md-4">
					<select className="custom-select custom-select-sm" onChange={(e)=>handleCountryChange(e.target.value)}>
					<option value="global" >Pick a country</option>
					{	countries ? countries.map((country,index)=>{
						return (
							<option value={country.name} key={index}>{country.name}</option>
						)
					}) : null}
				</select>
				</div>
				<div className="col-sm-4 col-md-4"></div>
			</div>
		)
	}
};

export default Countries;