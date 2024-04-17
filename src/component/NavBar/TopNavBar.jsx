// import React from 'react';
// import "./Navbar.css";

// const Navbar = () => {
//   return (
//     // <div class="container-fluid">
//     <div className='NavbarItems'>
//       <div style={{ justifyContent: 'start', }}>
//         {/* <img src="logo_trial.png" alt="logo" className="" style={{ height: 100, marginLeft: 50 }}></img> */}
//          <h1 className='navbar-logo'>🌙  Chandra </h1>
//       </div>
//       <div style={{ display: 'flex', justifyContent: 'flex-end', marginLeft: 'auto' }} >
//         <a href='/' style={{ color: 'Black', marginLeft: 50 }}>
//         <i class="fa-solid fa-house"></i>
//            Home</a>
//         <a href='#about' style={{ color: 'Black', marginLeft: 50 }}>
//         <i class="fa-solid fa-circle-info"></i>
//           About</a>
//         <a href='#portfolio' style={{ color: 'Black', marginLeft: 50 }}>
//         <i class="fa-solid fa-user-tie"></i>
//           Portfolio</a>
//         <a href='#contact' style={{ color: 'Black', marginLeft: 50, marginRight: 50 }}>
//         <i class="fa-solid fa-address-book"></i>
//           Contact</a>
//       </div>
//     </div>

//     // </div >
//   );
// }


// export default Navbar;

// import React, { Component } from 'react'
// import "./Navbar.css";
// import { MenuItems } from './MenuItenms';
// import { Link } from 'react-router-dom';
// class Navbar extends Component {
//   state = { clicked: false };
//   handclick = () => {
//     this.setState({ clicked: !this.state.clicked })
//   }
//   render() {
//     return (
//       <nav className='NavbarItems'>
//         <h1 className='navbar-logo'>🌙 	Chandra </h1>

//         <div className='menu-icons' onClick={this.handclick}>
//           <i className={this.state.clicked ? "fas-fa-times" : "fas fa-bars"}></i>
//         </div>

//         <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
//           {MenuItems.map((item, index) => {
//             return (
//               <li key={index}>
//                 <Link to={item.url} className={item.cName}>
//                   <i class={item.icons}></i>
//                   {item.title}
//                 </Link>
//               </li>
//             );
//           })}
//           {/* <button>Sign Up</button> */}
//         </ul>
//       </nav>
//     )
//   }
// }
// export default Navbar;


// import React from 'react';

// import { Container, Navbar,  } from 'react-bootstrap'; 
// const Navbar = () => {
//   return (
// <Navbar bg ="light" expand='lg'>
//   <Container>
//     <Navbar.Brand href="/">
//     Home
//     </Navbar.Brand>
//     <Navbar.Toggle aria-controls = "basic-navbar-nav"/>
//     <Navbar.Collapse id="basic-navbar-nav">
//       <Nav className="me-auto">
//       <Nav.Link href="/">Home</Nav.Link>
//       <Nav.Link href="#about">About</Nav.Link>
//       </Nav>
//     </Navbar.Collapse>
//   </Container>
// </Navbar>
//   );
// }


// export default Navbar;



// import React from 'react';
// import "./Navbar.css";

// const Navbar = () => {
//   return (
//     <nav class="navbar navbar-expand-lg  NavbarItems" >
//       <div class="text">
//       <h1 className='navbar-logo'>🌙  Chandra </h1>
//       {/* <img src="logo_trial.png" alt="" width="200px" height="auto"> */}
//       </div>
//       <button class="navbar-light navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar"
//         aria-controls="collapsibleNavbar" aria-expanded="false" aria-label="Toggle navigation">
//         <span class="navbar-toggler-icon "></span>
//       </button>
//       <div class="collapse navbar-collapse justify-content-end " id="collapsibleNavbar">
//         <ul class="navbar-nav">
//           <li class="nav-item">
//             <a class="nav-link link-dark" 
//               href="'/">Home</a>
//           </li>
//         </ul>
//         <ul class="navbar-nav">
//           <li class="nav-item">
//             <a class="nav-link link-dark" 
//               href="#about">About</a>
//           </li>
//         </ul>
//         <ul class="navbar-nav">
//           <li class="nav-item">
//             <a class="nav-link link-dark" 
//               href="#portfolio">Portfolio</a>
//           </li>
//         </ul>
//         <ul class="navbar-nav">
//           <li class="nav-item">
//             <a class="nav-link link-dark" 
//               href="#contact">Contact</a>
//           </li>
//         </ul>
//       </div>
//     </nav>

//   );
// }


// export default Navbar;


import { Container, Nav, Navbar } from 'react-bootstrap';

function TopNavBar() {
  return (
    <Navbar expand="lg" className="NavbarItems">
      <Container>
        <Navbar.Brand href="#home">
          <h1 className='navbar-logo'>🌙 Chandra</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav className="ml-auto">
            <Nav.Link href="#home" className="mr-3">
              Home
            </Nav.Link>
            <Nav.Link href="#about" className="mr-3">
              About
            </Nav.Link>
            <Nav.Link href="#portfolio" className="mr-3">
              Portfolio
            </Nav.Link>
            <Nav.Link href="#contact">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TopNavBar;
