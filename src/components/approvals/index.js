import React, { Fragment } from "react";
import { Container, Row, Col } from "reactstrap";

import Form from "./components/Form";
import Table from "./components/Table";

const Approvals = ({}) => {
  return (
    <Container>
      <Row>
        <Form />
      </Row>
      <Row>
        <Table />
      </Row>
    </Container>
  );
};

export default Approvals;
