import Navbar from "./components/Navbar";
import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import { BrowserRouter as Router, Switch, Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import About from "./components/About";
import Login from "./components/login/login";
import Register from "./components/register/register";
import Summary from "./components/Summary";

function App() {
  const [user, setLoginUser] = useState({});
  return (
    <>
      {/* <Navbar title={"Posifects"} aboutText="About" /> */}
      <div className="App">
        {/* <Login /> */}
        {/* <Register /> */}
        {/* <Navbar dummyText="to test is required functionlity" /> */}
        {/* {/* <Quiz /> */}
        {/* <Homepage /> */}
        {/* <div >
          <Form />
        // </div> */}
        {/* {data && data.length > 0 && data.map((item) => <p>{item.about}</p>)} */}
        {/* <PostList /> */}
        {/* <quiz /> */}
        {/* <Router> */}
        <Routes>
          {/* <Route exact path="/" element={<Homepage />} /> */}
          {/* <Route exact path="/">
            {user && user._id ? <Homepage /> : <Login />}
          </Route> */}
          <Route
            exact
            path="/"
            element={
              user && user._id ? (
                <Homepage setLoginUser={setLoginUser} />
              ) : (
                <Login setLoginUser={setLoginUser} />
              )
            }
          />
          <Route exact path="/Form" element={<Form />} />
          <Route exact path="/About" element={<About />} />
          <Route
            exact
            path="/login"
            element={<Login setLoginUser={setLoginUser} />}
          />
          <Route exact path="/register" element={<Register />} />
          <Route path="/Summary" element={<Summary />} />
        </Routes>

        {/* </Router> */}
      </div>

      {/* <div className="App">
        <Router>
          <Switch>
            <Route path="/">
              <Homepage />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route></Route>
          </Switch>
        </Router>
      </div> */}
    </>
  );
}

export default App;
