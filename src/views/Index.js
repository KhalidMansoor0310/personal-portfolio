import { Card, CardHeader, Container, Row, Col, CardBody } from "reactstrap";
// core components
import UserHeader from "components/Headers/UserHeader.js";

import "react-circular-progressbar/dist/styles.css";
import { skills } from "helpers/Contants";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
const Index = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <>
      <UserHeader />
      {/* Page content */}

      <Container className="mt--5 skills" fluid>
        <Row className="my-3">
          <Col xl="12">
            <Card className="shadow">
              <CardHeader className="border-0">
                <Row>
                  <Col className="d-flex align-items-center justify-content-between">
                    <div className="d-flex ">
                      <h3 className="personality-test-heading">Skills</h3>
                    </div>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Row>
                  {skills?.map((item) => {
                    return (
                      <>
                        <Col
                          md="2"
                          xs="6"
                          data-aos="zoom-in-down"
                          className={`d-flex justify-content-center flex-column `}
                        >
                          <img
                            className=""
                            src={item?.src}
                            height="50px"
                            width="50px"
                            alt=""
                          />
                          <h3 className=" my-2">{item?.title}</h3>
                          <h5 className="mb-4">{item?.percent}</h5>
                        </Col>
                      </>
                    );
                  })}
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Index;
