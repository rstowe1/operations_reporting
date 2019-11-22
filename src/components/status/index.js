import React from "react";
import { Container, Row } from "reactstrap";

import Form from "./components/Form";
import Table from "./components/Table";

const Status = ({
  comment,
  setComment,
  date,
  setDate,
  name,
  setName,
  load,
  setLoad
}) => {
  return (
    <Container>
      <Row>
        <Form
          comment={comment}
          setComment={setComment}
          date={date}
          setDate={setDate}
          name={name}
          setName={setName}
          load={load}
          setLoad={setLoad}
        />
      </Row>
      <Row>
        <Table load={load} />
      </Row>
    </Container>
  );
};

export default Status;
