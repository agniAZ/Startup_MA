import React from "react";

// reactstrap components
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";

function Survey() {
  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <p>
                  Survey
                </p>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col md="6">
                  <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScabGq7c1mQhKOZNttEfFdW6ljAi7KhTZg-kh5GiPaWpIyByQ/viewform?embedded=true" width="100%" height="1540" frameBorder="0" marginHeight="0" marginWidth="0">Loading...</iframe>
                  </Col>
                  <Col md="6">
                  <iframe width="100%" height="450" src="https://datastudio.google.com/embed/reporting/ceb54d06-8d6a-48cb-9921-9c4233bb43d5/page/mM0zB" frameborder="0" allowFullScreen>Loading...</iframe>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Survey;
