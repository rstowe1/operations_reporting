import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Status from "./status";
import Approvals from "./approvals";
import "../style.css";

const Header = ({
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
    <Router>
      <nav className="navbar">
        <Link className="nav-item" to="/status">
          Reconciliation/UpLoads
        </Link>
        <Link className="nav-item" to="/approvals">
          Approvals
        </Link>
      </nav>
      <Switch>
        <Route
          exact
          path="/status"
          render={(...props) => (
            <Status
              comment={comment}
              setComment={setComment}
              date={date}
              setDate={setDate}
              name={name}
              setName={setName}
              load={load}
              setLoad={setLoad}
            />
          )}
        />
        <Route
          exact
          path="/approvals"
          render={(...props) => <Approvals name={name} setName={setName} />}
        />
      </Switch>
    </Router>
  );
};

export default Header;
