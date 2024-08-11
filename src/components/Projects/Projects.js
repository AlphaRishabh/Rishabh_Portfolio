import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import blog from "../../Assets/Projects/blog.png";
import chatify from "../../Assets/Projects/chatify.png";
import weather from "../../Assets/Projects/weather.png";
import restaurant from "../../Assets/Projects/restaurant.png";
import portfolio from "../../Assets/Projects/portfolio.png";
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong style={{color:"brown"}}>Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Food Order "
              description="Online Food order webpage from where a user can order food his/her choice using his log in credentials from the given choices"
              technologies = "MERN Stack and Redux"
              ghLink="https://github.com/AlphaRishabh/GOFOODApp"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blog}
              isBlog={false}
              title="Video Chat Application"
              description="Developed Peer to Peer Video Chat aaplication using Nodejs and WebRTC to allow users to have one-to-one video chat with ease "
              technologies = "NodeJS and WebRTC"
              ghLink="https://github.com/AlphaRishabh"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title="Weather App"
              description="Developed a Weather Forecast Webpage to allow users to check climate and weather of their respective location "
              ghLink="https://github.com/AlphaRishabh/WeatherApp"
              technologies = "HTML,CSS and Javascript"

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={restaurant}
              isBlog={false}
              title="AI Restaurant Success Prediction"
              description="Used the Restaurants Datas and developed a model and algorithm which predicts the success of a restaurant at a particular location"
              ghLink="https://github.com/AlphaRishabh"
              technologies = "Python"

              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="Portfolio"
              description="Devoped a responsive Portfolio using ReactJS which diplays details about myself, my skills and projects I have completed "
              ghLink="https://github.com/AlphaRishabh"
              technologies = "ReactJS"

            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
