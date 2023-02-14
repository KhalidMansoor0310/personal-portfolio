import { useState } from "react";
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

const Services = () => {
  return (
    <>
      <div className="header pt-5 ">
        <Container className="mb-5 mt-5 mt-sm-0">
          <Row>
            {services?.map((item) => {
              return (
                <Col md="4" sm="12" xs="12">
                  <Card
                    className="p-3 my-2"
                    style={{ borderTopRightRadius: "40px" }}
                  >
                    <h3>{item?.title}</h3>
                    <p>{item?.description}</p>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Services;
