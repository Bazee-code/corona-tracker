import React from 'react';
import Countup from 'react-countup';
import moment from 'moment';

const Cards =({data})=> {
	// const {data} = data;
	const {confirmed,recovered,deaths,lastUpdate} = data;
	// console.log(recovered);

	// if(!confirmed) {
	// 	return 'Loading';
	// 	return 'Loading';
	// };
	
	return (
		<React.Fragment>

		<div className="row">
			<div className="col-md-3"></div>
			<div className="col-md-6">
				<div className="card-deck text-center mt-3 ">
				<div className="card border-warning">
					<div className="card-body ">
						<h6 className="text-warning">Confirmed</h6>
						<b>{!confirmed ? <p>Loading...</p> 
							: <Countup start={0} end={confirmed.value} duration={3.0} separator=","/>}</b>
						
						<p><small className="text-muted">Number of active cases of COVID-19</small></p>
						<small>{moment({lastUpdate}).format('MMMM Do YYYY,h:mm:ss a')}</small>
						<p className="text-warning">___________</p>
						</div>
				</div>

				<div className="card border-danger">
					<div className="card-body ">
						<h6 className="text-danger">Deaths</h6>
						<b>{!confirmed ? <p>Loading...</p> 
							: <Countup start={0} end={deaths.value} duration={3.0} separator=","/>}</b>
						
						<p className="text-muted"><small>Number of death cases of COVID-19</small></p>
						<small>{moment({lastUpdate}).format('MMMM Do YYYY,h:mm:ss a')}</small>
						<p className="text-danger">___________</p>
					</div>
				</div>

				<div className="card border-success">
					<div className="card-body ">
						<h6 className="text-success">Recoveries</h6>
						<b>{!confirmed ? <p>Loading...</p> 
							: <Countup start={0} end={recovered.value} duration={3.0} separator=","/>}</b>
						
						<p className="text-muted"><small>Number of recovered cases of COVID-19</small></p>
						<small>{moment({lastUpdate}).format('MMMM Do YYYY,h:mm:ss a')}</small>
						<p className="text-success">___________</p>
					</div>
				</div>
				</div>
			</div>
			<div className="col-md-3"></div>
		</div>

		</React.Fragment>
	)
};

export default Cards;