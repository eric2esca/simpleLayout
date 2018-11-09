import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Image from "../utils/images/employee.jpg";

const About = () => (
  //"https://i.imgur.com/qkdpN.jpg"
  <div>
    <Hero backgroundImage={Image}>
      <h1 className="title">New Company</h1>
      <h2 className="title">What We Are About</h2>
    </Hero>
    <Container style={{ marginTop: 30 }}>
      <Row>
        <Col size="md-12">
          <h1>Welcome To New Company!</h1>
        </Col>
      </Row>
      <Row>
        <Col size="md-12">
          <p className="para">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            aliquet diam tortor, id consequat mauris ullamcorper eu. Orci varius
            natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus. Pellentesque et dui id justo finibus sollicitudin at
            et metus. Ut feugiat tellus nec metus commodo, sed suscipit nisi
            gravida. Duis eget vestibulum quam, ut porttitor sem. Donec sagittis
            mi sollicitudin turpis semper, et interdum risus lobortis.
            Vestibulum suscipit nunc non egestas tristique. Proin hendrerit
          </p>
          <p className="para">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            aliquet diam tortor, id consequat mauris ullamcorper eu. Orci varius
            natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus. Pellentesque et dui id justo finibus sollicitudin at
            et metus. Ut feugiat tellus nec metus commodo, sed suscipit nisi
            gravida. Duis eget vestibulum quam, ut porttitor sem. Donec sagittis
            mi sollicitudin turpis semper, et interdum risus lobortis.
            Vestibulum suscipit nunc non egestas tristique. Proin hendrerit
          </p>
        </Col>
      </Row>
    </Container>
  </div>
);

export default About;
