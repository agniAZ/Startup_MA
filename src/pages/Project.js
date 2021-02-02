import React from "react";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col,
} from "reactstrap";

function Project() {
  return (
    <>
      <div className="content">
        <Row>
          <Col md="6">
            <Card>
              <CardHeader>
                <p>
                Project
                </p>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col>
                  1
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
          <Col md="6">
            <Card>
              <CardHeader>
                <p>
                Project
                </p>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col>
                  2
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
export default Project;
