import { useEffect, useState } from "react";
// react component that copies the given text inside your clipboard
import { CopyToClipboard } from "react-copy-to-clipboard";
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";
// core components
import OnlyHeader from "components/Headers/OnlyHeader";
import { services } from "helpers/Contants";
import AOS from "aos";
import "aos/dist/aos.css";
const Services = () => {
  const [showSkills, setShowSkills] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShowSkills(true);
    }, 100);
  }, []);
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <>
      <Container className="bg-gradient-default p-4 ">
        <Row>
          {services?.map((item) => {
            return (
              <div style={{ width: "100%" }}>
                <div data-aos="zoom-in-down">
                  <Col
                    md="8"
                    sm="12"
                    xs="12"
                    className={`${showSkills ? "services-fade-in m-auto" : ""}`}
                  >
                    <Card
                      className="p-3 my-2 bg-gradient-default shadow"
                      style={{
                        borderTopRightRadius: "40px",
                        height: "200px",
                      }}
                    >
                      <div className="d-flex justify-content-between align-items-center">
                        <i className={item?.icon}></i>
                        <h3 className="text-secondary">{item?.title}</h3>
                      </div>
                      <p className="text-white">{item?.description}</p>
                    </Card>
                  </Col>
                </div>
              </div>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default Services;
