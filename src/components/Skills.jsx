import "../style/skills.css"

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
// import arrow1 from "../assets/img/arrow1.svg";
// import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>Proficient front-end web developer with skills in full-stack development, digital drawing, sketching, and a passion for technology.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                {/* <img src={meter1} alt="Image1" /> */}
                                <h5>REACT</h5>
                            </div>
                            <div className="item">
                                {/* <img src={meter2} alt="Image1" /> */}
                                <h5>MongoDB</h5>
                            </div>
                            <div className="item">
                                {/* <img src={meter2} alt="Image1" /> */}
                                <h5>Python</h5>
                            </div>
                            <div className="item">
                                {/* <img src={meter2} alt="Image1" /> */}
                                <h5>JavaScript</h5>
                            </div>
                            <div className="item">
                                {/* <img src={meter1} alt="Image1" /> */}
                                <h5>Git and Github</h5>
                            </div>
                            <div className="item">
                                {/* <img src={meter1} alt="Image1" /> */}
                                <h5>UI/UX</h5>
                            </div>
                            <div className="item">
                                {/* <img src={meter1} alt="Image1" /> */}
                                <h5>HTML</h5>
                            </div>
                            <div className="item">
                                {/* <img src={meter1} alt="Image1" /> */}
                                <h5>CSS</h5>
                            </div>
                            <div className="item">
                                {/* <img src={meter1} alt="Image1" /> */}
                                <h5>MySQL</h5>
                            </div>
                            <div className="item">
                                {/* <img src={meter1} alt="Image1" /> */}
                                <h5>Figma</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image1" />
    </section>
  )
}
