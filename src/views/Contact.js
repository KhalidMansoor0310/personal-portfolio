import React from "react";
import { Col, Container, Row } from "reactstrap";

function Contact() {
  return (
    <>
      <Container className="bg-gradient-default p-4 ">
        <Row>
          <Col md={8} className="m-auto">
            <section class="mb-4">
              <h2 class="h1-responsive font-weight-bold text-center my-4">
                Contact us
              </h2>

              <p class="text-center w-responsive mx-auto mb-5">
                Do you have any questions? Please do not hesitate to contact us
                directly. Our team will come back to you within a matter of
                hours to help you.
              </p>

              <div class=" mb-md-0 mb-5">
                <form>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="md-form mb-0">
                        <input
                          type="text"
                          id="name"
                          name="name"
                          class="form-control"
                        />
                        <label for="name" class="">
                          Your name
                        </label>
                      </div>
                    </div>

                    <div class="col-md-6">
                      <div class="md-form mb-0">
                        <input
                          type="text"
                          id="email"
                          name="email"
                          class="form-control"
                        />
                        <label for="email" class="">
                          Your email
                        </label>
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-12">
                      <div class="md-form mb-0">
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          class="form-control"
                        />
                        <label for="subject" class="">
                          Subject
                        </label>
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-12">
                      <div class="md-form">
                        <textarea
                          type="text"
                          id="message"
                          name="message"
                          rows="2"
                          class="form-control md-textarea"
                        ></textarea>
                        <label for="message">Your message</label>
                      </div>
                    </div>
                  </div>
                </form>

                <div class="text-center text-md-left">
                  <a class="btn btn-outline-info">Send</a>
                </div>
                <div class="status"></div>
              </div>
            </section>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Contact;
