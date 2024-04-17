// import React from 'react'
// import "./HeroStyles.css"
// function Hero() {
//   return (<>
//     <div className='hero'>
//       <img alt='' src='image5.jpg'style={{width:"100%"}} />
//       <div className='hero-text'>
//       <h1>Hello friends</h1>
//       </div>
//     </div>
//   </>);
// }




// export default Hero;


import React from 'react';
import "./HeroStyles.css";
import { Container, Row, Col } from 'react-bootstrap';

function Hero(props) {
  return (
    <div className={props.cName}>
      <img alt='HerpImg' src={props.heroImg} style={{ width: "100%" }} />
      <Container>
        <Row>
          <Col xs={12} md={6}>
            <div className='hero-text'>
              <h1>{props.title}</h1>
              <p>{props.text}</p>
              <a href={props.url} className={props.btnClass}>
                {props.buttonText}
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Hero;
