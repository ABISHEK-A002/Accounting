import React from 'react';
import { Link } from 'react-router-dom';
import './Reg.css';
// import Main from './Main';
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      rememberMe: false,
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleCheckboxChange = () => {
    this.setState((prevState) => ({ rememberMe: !prevState.rememberMe }));
  };

 handleSubmit = (e) => {
  e.preventDefault();
  if (this.state.username === this.state.password) {
    alert('Success');
  } else {
    alert('Invalid username or password');
  }
  
};


  render() {
    return (
      <div className="background-video">
        <div className="signup-box">
          <h2>Login</h2>
          <form onSubmit={this.handleSubmit}>
            <div className="user-box">
              <input
                type="text"
                name="username"
                value={this.state.username}
                onChange={this.handleChange}
                required
              />
              <label>Username</label>
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
            <div className="remember-me">
              <input
                type="checkbox"
                name="rememberMe"
                checked={this.state.rememberMe}
                onChange={this.handleCheckboxChange}
              />
              <label style={{color: 'white'}}>Remember Me</label>
            </div>
            <button type="submit">Login</button>
          </form>
          <p><b style={{color: 'white'}}>Don't have an account? <Link to="/Register">Register</Link></b>
            
          </p>
        </div>
      </div>
    );
  }
}

export default Login;
