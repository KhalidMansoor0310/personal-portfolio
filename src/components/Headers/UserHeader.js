import { Button, Container, Row, Col } from "reactstrap";
import { TypeAnimation } from "react-type-animation";
import headerImg from "../../assets/img/brand/headerImg.JPG";
const UserHeader = () => {
  return (
    <>
      <div
        className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
        style={{
          minHeight: "600px",
          backgroundImage:
            "url(" +
            require("../../assets/img/brand/headerImg.JPG").default +
            ")",
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      >
        {/* Mask */}
        <span className="mask bg-gradient-default opacity-8" />
        {/* Header container */}
        <Container fluid>
          <Row className="d-flex justify-content-center align-items-center">
            <Col lg="6" md="5">
              <h1 className=" text-white">Khalid Mansoor </h1>
              <TypeAnimation
                // Same String at the start will only be typed once, initially
                className="text-nowrap typeAnimation"
                sequence={[
                  "Front-end Developer",
                  1000,
                  "React Js Developer",
                  1000,
                  "MERN Stack Developer",
                  1000,
                ]}
                speed={50} // Custom Speed from 1-99 - Default Speed: 40
                style={{ fontSize: "2em", color: "white" }}
                wrapper="h5" // Animation will be rendered as a <span>
                repeat={Infinity} // Repeat this Animation Sequence infinitely
              />
              <p className="text-white mt-0 userHeader__paragraph">
                A passionate web developer and designer focused on developing
                features to enhance the user experience and help businesses do
                better online with Quality works.
              </p>
              <button className="btn btn-outline-info">Click to Hire Me</button>
            </Col>
            <Col lg="6" md="5" className="">
              <div className="card-profile-image">
                <img
                  alt="..."
                  className="rounded-circle w-100"
                  src={require("../../assets/img/brand/animated.gif").default}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default UserHeader;
