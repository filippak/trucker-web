import React, {Component} from 'react';
import './style/truckers.css';
import './style/signupform.css';


class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {firstname: '',lastname: '', email: '', trucker: 'yes', mechanic: 'no'};

    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleTruckerChange = this.handleTruckerChange.bind(this);
    this.handleMechanicChange = this.handleMechanicChange.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleFirstNameChange(event) {
    this.setState({firstname: event.target.value});
  }

  handleLastNameChange(event) {
    this.setState({lastname: event.target.value});
  }

  handleEmailChange(event) {
    this.setState({email: event.target.value});
  }

  handleTruckerChange(event) {
    this.setState({trucker: event.target.value});
  }

  handleMechanicChange(event) {
    this.setState({mechanic: event.target.value});
  }

  handleSubmit(event) {
    var message = 'Thank you ' + this.state.firstname + ' for joining! We will contact you at '  + this.state.email +' shortly with more information. ';
    alert(message);
    event.preventDefault();
  }

  render() {
    return (
      <div className="signup">
        <div className="container-fluid form-fields">
          <h2> Checklight Beta Signup </h2>
          <form onSubmit={this.handleSubmit}>
          <div className="form-label">
          <h4> Name* </h4>
              <label for="first">First:</label>
                <input id="first" type="text" required value={this.state.value} onChange={this.handleFirstNameChange} />
              <label for="last">Last: </label>
                <input id="last" type="text" required value={this.state.value} onChange={this.handleLastNameChange} />
            </div>
            <div className="form-label">
            <h4> Email Address* </h4>
              <label>
                <input type="text" required value={this.state.value} onChange={this.handleEmailChange} />
              </label>
            </div>
            <div className="form-label">
            <h4> Are you a trucker?* </h4>
            <h5> If you are an Owner Operator or employed as a driver by someone else select "yes" </h5>
              <label>
                <select className="select-option" value={this.state.value} required onChange={this.handleTruckerChange} >
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </label>
            </div>
            <div className="form-label">
            <h4> Are you a mechanic/shop owner? </h4>
              <label>
                <select className="select-option" value={this.state.value} required onChange={this.handleMechanicChange} >
                  <option value="no">No</option>
                  <option value="yes">Yes</option>
                </select>
              </label>
            </div>
            <div className="form-label">
              <input className="submit-button" type="submit" value="Submit" />
            </div>
          </form>
        </div>
        </div>
    );
  }
}

export default SignupForm
