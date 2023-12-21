import React from 'react';
import './Reg.css';
import { Link } from 'react-router-dom';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: '', // Use firstname instead of username
      lastname: '',  // Use lastname instead of email
      email: '',
      password: '',
      confirmPassword: '',
      userType: '',
      name: '',
      age: '',
      orgName: '',
      orgType: '',
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', this.state);
  };

  render() {
    return (
      <div className="signup-box">
        <div>
          <h2>Sign Up</h2>
          <form onSubmit={this.handleSubmit}>
            <div className="user-box">
              <input
                type="text"
                name="firstname"  // Use "firstname" as the name for the Firstname input
                value={this.state.firstname}
                onChange={this.handleChange}
                required
              />
              <label>Firstname</label>
            </div>
            <div className="user-box">
              <input
                type="text"
                name="lastname"  // Use "lastname" as the name for the Lastname input
                value={this.state.lastname}
                onChange={this.handleChange}
                required
              />
              <label>Lastname</label>
            </div>
            <div className="user-box">
            <input
                type="email"
                name="Email"  // Use "firstname" as the name for the Firstname input
                value={this.state.firstname}
                onChange={this.handleChange}
                required
              />
            <label>Email</label>
              </div>
            <div className="user-box">
              <input
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
                required
              />
              <label>Password</label>
            </div>
            <div className="user-box">
              <input
                type="password"
                name="confirmPassword"
                value={this.state.confirmPassword}
                onChange={this.handleChange}
                required
              />
              <label>Confirm Password</label>
            </div>
            <button type="submit">Signup</button>
            <p>
              <h3>OR</h3>
              <Link to="/Login">Login</Link>
            </p>
          </form>
        </div>
      </div>
    );
  }
}

export default Register;
