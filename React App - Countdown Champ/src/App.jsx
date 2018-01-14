import React, { Component } from 'react';
import Clock from './Clock';
import './App.css';
import { Form, FormControl, Button, Jumbotron } from 'react-bootstrap';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			deadline: 'December 25, 2018',
			newDeadline: ''
		}
	}

	changeDeadline() {
		this.setState({deadline: this.state.newDeadline});
	}	

	render() {
		return (
			<Jumbotron className="App">
				<div className="App-title">
					Countdown to {this.state.deadline}
				</div>
				<Clock deadline={this.state.deadline}/>
				<Form inline={true}>
					<FormControl 
						className="Deadline-input"
						placeholder="new date"
						onChange={event => this.setState({newDeadline: event.target.value})}
					 />
					<Button onClick={() => this.changeDeadline()}>Submit</Button>
				</Form>
			</Jumbotron>
		)
	}
}

export default App;