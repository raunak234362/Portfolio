import "../style/projects.css"
import { Container, Row, Col, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "E-Commerce Website",
      description: "Crafted a feature-rich E-Commerce Web App with React, JavaScript, and CSS. API-driven for product lists, with inline editing/deletion and alerts. Features price-based sorting and intuitive cart functionality.",
      imgUrl: projImg1,
    },
    {
      title: "College Management System",
      description: "College Management System with Django viewsets, automated user functions, and separate dashboards for streamlined access. Seamlessly connects backend with front-end using Python, Django, MySQL, HTML, CSS & Bootstrap.",
      imgUrl: projImg2,
    },
    {
      title: "Elevator API",
      description: "Elevator project management with a Python-powered web app using Django Rest Framework. Seamlessly track progress, set priorities, and manage elevator models with efficiency. Utilizes viewsets and serializers for optimal performance.",
      imgUrl: projImg3,
    },
    {
      title: "Hospital API",
      description: "Unlock healthcare data and streamline hospital management with a JavaScript-powered solution. Built on MongoDB and NodeJS for seamless integration and efficient functionality. Empowering patient care and medical record management.",
      imgUrl: projImg4,
    },
    {
      title: "Calculator App",
      description: "Crafted a responsive, user-friendly Calculator Web App with React. Supports arithmetic operations like addition, subtraction, multiplication, and division using JavaScript. Tech stack includes React, JavaScript, and CSS.",
      imgUrl: projImg5,
    },
    {
      title: "ToLet Globe",
      description: "Your one-stop destination for hassle-free property hunting. Explore our intuitive platform built with React and Bootstrap, offering seamless navigation and stunning visuals. Find your dream rental effortlessly!",
      imgUrl: projImg6,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Dive into my portfolio for a glimpse of my creative solutions. Experience sleek designs and powerful functionality. Explore the magic of my projects today.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  {/* <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav> */}
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="img1"></img>
    </section>
  )
}
