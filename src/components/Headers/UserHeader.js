import { Button, Container, Row, Col } from "reactstrap";

const UserHeader = () => {
  return (
    <>
      <div
        className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
        style={{
          minHeight: "600px",
          backgroundImage:
            "url(" +
            require("../../assets/img/theme/profile-cover.jpg").default +
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
              <h1 className=" text-white">Hello , I am Khalid Mansoor </h1>
              <p className="text-white mt-0 ">
                This is your profile page. You can see the progress you've made
                with your work and manage your projects or assigned tasks
              </p>
              <button className="btn btn-outline-info">Click to Hire Me</button>
            </Col>
            <Col lg="5" md="5" className="">
              <div className="card-profile-image">
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  <img
                    alt="..."
                    className="rounded-circle"
                    src={
                      require("../../assets/img/theme/team-4-800x800.jpg")
                        .default
                    }
                  />
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default UserHeader;
