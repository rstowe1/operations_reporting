import React, { Component, Fragment, useState } from "react";
import Header from "./components/Header";

const App = () => {
  const [comment, setComment] = useState("");
  const [date, setDate] = useState("");
  const [name, setName] = useState("");
  const [load, setLoad] = useState("");

  return (
    <Fragment>
      <Header
        comment={comment}
        setComment={setComment}
        date={date}
        setDate={setDate}
        name={name}
        setName={setName}
        load={load}
        setLoad={setLoad}
      />
    </Fragment>
  );
};

export default App;
