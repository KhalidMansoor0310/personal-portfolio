import {
  Badge,
  Card,
  CardHeader,
  CardFooter,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Media,
  Pagination,
  PaginationItem,
  PaginationLink,
  Progress,
  Table,
  Col,
  Container,
  Row,
  UncontrolledTooltip,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  CardImg,
  Button,
} from "reactstrap";
// core components
import OnlyHeader from "components/Headers/OnlyHeader.js";
import Header from "components/Headers/Header";
import { projects } from "helpers/Contants";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <>
      <Container className="bg-gradient-default p-4 ">
        <Row>
          {projects?.map((item) => {
            return (
              <Col md="6" sm="12" xs="12" data-aos="zoom-in-down">
                <Card className="p-3 my-2 bg-gradient-default shadow">
                  <CardImg
                    top
                    width="auto"
                    height={200}
                    src={item?.src}
                    alt="Card image cap"
                  />
                  <CardBody>
                    <CardTitle className="text-white">{item?.title}</CardTitle>

                    <CardText>{item?.description}</CardText>
                    <a
                      href={item?.link}
                      target="_blank"
                      className="btn btn-outline-info"
                    >
                      Live Demo <i className="ni ni-send"></i>
                    </a>
                  </CardBody>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default Projects;
