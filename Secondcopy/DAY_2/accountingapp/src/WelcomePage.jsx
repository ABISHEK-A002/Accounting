// Import necessary libraries
import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Drawer, List, ListItem, ListItemText } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import ContactSection from './ContactSection';
import './WelcomePage.css';


const WelcomePage = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  return (
    <>
      <AppBar position="static" style={{ background: 'rgb(40, 40, 40)' }}>
        <Toolbar>
          <Typography variant="h6" component="div" style={{ marginRight: '850px' }}>
            The <b style={{marginLeft: '5px'}}> Accountant</b>
          </Typography>
          <div className="links">
            <a href="#home" className="nav-link" style={{ marginRight: '35px' }}>
              Home
            </a>
            <a href="#about" className="nav-link" style={{ marginRight: '35px' }}>
              About Us
            </a>
            <a href="#services" className="nav-link" style={{ marginRight: '35px' }}>
              Services
            </a>
            <a href="#contact" className="nav-link" style={{ marginRight: '35px' }}>
              Contact
            </a>
          </div>
          <Button onClick={toggleDrawer(true)}>☰</Button>
          <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
          <List>
              <ListItem button component={RouterLink} to="/login" onClick={toggleDrawer(false)}>
                <ListItemText primary="Login" />
              </ListItem>
              <ListItem button component={RouterLink} to="/register" onClick={toggleDrawer(false)}>
                <ListItemText primary="Sign Up" />
              </ListItem>
              <ListItem button>
  <a href="#about" className="nav-link" onClick={toggleDrawer(false)}>
    <ListItemText primary="About" />
  </a>
</ListItem>
<ListItem button>
  <a href="#services" className="nav-link" onClick={toggleDrawer(false)}>
    <ListItemText primary="Services" />
  </a>
</ListItem>
<ListItem button>

  <a href="#Contact" className="nav-link" onClick={toggleDrawer(false)}>
    <ListItemText primary="Contact" />
  </a>
  </ListItem>
            </List>
          </Drawer>
        </Toolbar>
      </AppBar>

      <div className="landing-page" id="home">
        <header className="container">
          <div className="logo">
          <h1 style={{ fontWeight: 'bold', color: 'black', textAlign: 'inherit' }}>
  Empower Your Finance with The Accountant
</h1>

          </div>
        </header>

        <div className="content container">
          <div className="info">
          <h1 style={{
  fontWeight: 'bold',
  textAlign: 'inherit',
  color: 'white',
  backgroundColor: 'rgb(0, 0, 0)',
  padding: '10px',
  borderRadius: '10px',
  animation: 'popOutAnimation 1.5s ease-in-out infinite alternate',
  transformOrigin: 'center'
}}>
  Let us handle the numbers while you focus on your business.
</h1>




            <div>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <Button variant="contained" component={RouterLink} to="/login" style={{marginRight: '10px'}}>
                Login
              </Button>
              <Button variant="contained" component={RouterLink} to="/register">
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="section" id="about">
        <div className="container">
          <h2>About Us</h2>
          <p>
            Welcome to <strong>THE ACCOUNTANT</strong>, where precision meets simplicity in the world of accounting. At the heart of our mission is a commitment to empowering individuals and organizations with the tools they need to navigate the complexities of financial management effortlessly.
          </p>
          <p>
            Established with a vision to revolutionize accounting practices, we strive to be the go-to solution for both individuals and organizations seeking a seamless and efficient way to manage their finances. Whether you're a sole proprietor managing personal accounts or a large organization with intricate financial structures, our web application is tailored to meet your diverse accounting needs.
          </p>
        </div>
      </div>
      <div className="section" id="services">
        <div className="container">
          <h2>Services</h2>
          <p>
            Our Commitment to Individuals:
            For individuals navigating the financial landscape, we understand that managing personal finances can be a daunting task. Our user-friendly interface and intuitive features are designed to simplify the process, allowing you to take control of your financial well-being with confidence. From budgeting to tax planning, we provide the tools and resources to help you make informed decisions and achieve your financial goals.
          </p>
          <p>
            Empowering Organizations:
            For businesses and organizations, we recognize the importance of accuracy, efficiency, and compliance in financial operations. Our accounting web application is equipped with robust features that streamline processes, enhance collaboration, and ensure compliance with industry standards. Whether you're a small startup or a large enterprise, we are dedicated to supporting your growth by providing scalable solutions that evolve with your business.
          </p>
          <p>
            Key Features:
            Intuitive Interface: Our user-friendly interface ensures a smooth experience, even for those with limited accounting knowledge.
            Automation: Save time and reduce errors with our automated features, from data entry to report generation.
            Security: Your financial data is of utmost importance. We employ state-of-the-art security measures to safeguard your information.
            Collaboration: Foster collaboration within your organization by providing secure access to multiple users with customizable permissions.
          </p>
          <p>
            Embark on a journey of financial empowerment with <strong>THE ACCOUNTANT</strong>. Whether you're an individual looking for personal financial management or an organization seeking a robust accounting solution, we are here to simplify, streamline, and support your financial success. Welcome to a world where accounting is made easy – welcome to <strong>THE ACCOUNTANT</strong>.
          </p>
        </div>
      </div>
      <div className="section" id="contact">
        <div className="container">
          <ContactSection />
        </div>
      </div>
    </>
    
  );
};

export default WelcomePage;
