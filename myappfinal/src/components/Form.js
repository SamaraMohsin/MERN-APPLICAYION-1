import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Home.css";
import Axios from "axios";
import "./form.css";
import { Slider, slider } from "@material-ui/core";
import "./Summary";

function Form() {
  const navigate = useNavigate();
  const home = () => {
    navigate("/");
  };
  const dummy = () => {
    navigate("/checkbox");
  };
  const summary = () => {
    navigate("/Summary");
  };

  const [ListOfUsers, setListOfUser] = useState([
    // { id: 1, name: "Pedro", age: 20, username: "pedro123" },
  ]);
  const [title, setTitle] = useState("");
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [gender, setgender] = useState("");
  const [dob, setdob] = useState("");
  const [treatmentName, settreatmentName] = useState("");
  const [treatmentType, settreatmentType] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setendDate] = useState("");
  const [method, setmethod] = useState("");
  const [reasonsForTaking, setreasonsForTaking] = useState("");
  const [positiveEffact, setpositiveEffact] = useState("");
  const [negativeEffact, setnegativeEffact] = useState("");
  const [itreatmentRecommendation, setitreatmentRecommendation] = useState("");
  const [feedback, setfeedback] = useState("");
  const [posVal, setPosVal] = useState("");
  const [negVal, setNegVal] = useState("");
  const updatePosValue = (e, item) => {
    setPosVal(item);
  };
  const updateNegValue = (e, item) => {
    setNegVal(item);
  };
  // const [heardAboutUs, setheardAboutUs] = useState("");
  // const [toldAboutSideEffects, settoldAboutSideEffects] = useState("");

  const createUser = () => {
    Axios.post("http://localhost:3001/createUser", {
      firstname,
      lastname,
      gender,
      dob,
      treatmentName,
      treatmentType,
      startDate,
      endDate,
      method,
      reasonsForTaking,
      itreatmentRecommendation,
      positiveEffact,
      negativeEffact,

      // heardAboutUs,
      // toldAboutSideEffects,
    }).then((response) => {
      alert("User Created");
      ListOfUsers(response.data);
      // console.log("done");
    });
  };

  // let handleChange = (e) => {
  //   let name = e.target.name;
  //   let value = e.target.value;
  //   account[name] = value;
  //   setAccount(account);
  // };

  // let save = (e) => {
  //   e.preventDefault();
  //   console.log(account);
  // };

  return (
    <>
      <div class="container-fluid">
        <form
          className="mb-3"
          method="post"
          onSubmit={createUser}
          style={{ width: "auto", maxWidth: 1000 }}
        >
          <div class="mb-3">
            <label className="form-label">Title</label>
            <select
              name="title"
              class="form-select"
              id="specificSizeSelect"
              onChange={(event) => {
                setTitle(event.target.value);
              }}
              // required
            >
              <option value="Mr">Mr</option>
              <option value="Mrs">Mrs</option>
            </select>
          </div>

          <div className="mb-3">
            <label className="form-label">First Name</label>
            <input
              type="text"
              className="form-control"
              name="firstname"
              id="fname"
              onChange={(event) => {
                setfirstname(event.target.value);
              }}
              // required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Surname</label>
            <input
              type="text"
              className="form-control"
              name="lastname"
              id="lname"
              onChange={(event) => {
                setlastname(event.target.value);
              }}
              // required
            />
          </div>

          <div class="mb-3">
            <label className="form-label">Gender</label>
            <select
              class="form-select"
              id="specificSizeSelect"
              onChange={(event) => {
                setgender(event.target.value);
              }}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>

          <div className="mb-3">
            <label for="birthday">Date of Birth</label>
            <input
              className="form-control"
              type="date"
              id="birthday"
              name="dob"
              onChange={(event) => {
                setdob(event.target.value);
              }}
              // required
            ></input>
          </div>

          <div className="mb-3">
            <label className="form-label">Medication/Treatment Name</label>
            <input
              type="text"
              className="form-control"
              name="treatment name"
              // required
              onChange={(event) => {
                settreatmentName(event.target.value);
              }}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Treatment Type</label>
            {/* <!-- Default checkbox --> */}
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                name="Pharmalogical treatments"
                onChange={(event) => {
                  settreatmentType(event.target.name);
                }}
              />
              <label class="form-check-label" for="flexCheckDefault">
                Pharmalogical treatments
              </label>
            </div>

            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                name="Psychological therapies"
                onChange={(event) => {
                  settreatmentType(event.target.name);
                }}
              />
              <label class="form-check-label" for="flexCheckDefault">
                Psychological therapies
              </label>
            </div>

            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                name="Medical Procedure"
                onChange={(event) => {
                  settreatmentType(event.target.name);
                }}
              />
              <label class="form-check-label" for="flexCheckDefault">
                Medical Procedure
              </label>
            </div>

            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                name="Digital and Technological Health"
                onChange={(event) => {
                  settreatmentType(event.target.name);
                }}
              />
              <label class="form-check-label" for="flexCheckDefault">
                Digital and Technological Health
              </label>
            </div>
          </div>

          {/* start date end date */}

          <div className="mb-3">
            <label for="start Date">Start Date</label>
            <input
              className="form-control"
              type="date"
              name="Start date"
              // value={user.name}
              // onChange={handleInputs}
              onChange={(event) => {
                setStartDate(event.target.value);
              }}
              // required
            ></input>
          </div>

          <div className="mb-3">
            <label for="End Date">End Date</label>
            <input
              className="form-control"
              type="date"
              name="End date"
              onChange={(event) => {
                setendDate(event.target.value);
              }}
              // required
            ></input>
          </div>

          {/* Method */}

          <div class="mb-3">
            <label className="form-label">Method</label>
            <select
              class="form-select"
              id="specificSizeSelect"
              // required
              onChange={(event) => {
                setmethod(event.target.value);
              }}
            >
              <option selected value="Aerosol">
                Aerosol
              </option>
              <option value="a">a</option>
              <option value="b">b</option>
            </select>
          </div>

          {/* Reasons for taking */}

          <div class="mb-3">
            <label className="form-label">Reasons for taking</label>
            <div class="form-floating">
              reasons
              <textarea
                class="form-control"
                //   placeholder="Leave a comment here"
                id="floatingTextarea"
                onChange={(event) => {
                  setreasonsForTaking(event.target.value);
                }}
              ></textarea>
              {/* <label for="floatingTextarea">Comments</label> */}
            </div>
          </div>

          {/* was this treatment helpful? */}

          <div classname="mb-3">
            <label className="form-label">Was this treatment helpful?</label>
            <div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="No"
                  id="flexRadioDefault1"
                  onChange={(event) => {
                    setfeedback(event.target.name);
                  }}
                />
                <label class="form-check-label" for="flexRadioDefault1">
                  No
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="yes"
                  id="flexRadioDefault2"
                  onChange={(e) => {
                    setfeedback(e.target.name);
                  }}
                  checked
                />
                <label class="form-check-label" for="flexRadioDefault2">
                  Yes
                </label>
              </div>
            </div>
          </div>

          {/* next question: */}

          <div class="mb-3">
            <label className="form-label">
              Did you experience any positive effacts?
            </label>
            <div class="form-floating">
              positiveEffact
              <textarea
                name="positiveEffact"
                class="form-control"
                onChange={(event) => {
                  setpositiveEffact(event.target.value);
                }}
              ></textarea>
            </div>
          </div>

          <div class="mb-3">
            <label className="form-label">
              Rate the Positive Side Effects{" "}
            </label>
            <div className="slideContainer">
              <input
                type="range"
                min="1"
                max="7"
                // value="1"
                id="myRange"
                class="slider"
                onChange={(event) => {
                  setPosVal(event.target.value);
                }}
              />
              <p>
                Value:{posVal}
                <span id="value"></span>
              </p>
            </div>
          </div>

          {/* <div className="slideContainer">
            <Slider
              type="range"
              min="1"
              max="7"
              // value="1"
              id="myRange"
              class="slider"
              value={val}
              onChange={updateValue}
              // onChange={(event) => {
              //   setVal(event.target.value);
              // }}
            />
          </div> */}

          {/* next question: */}

          <div class="mb-3">
            <label className="form-label">
              Did you experience any negative effacts?
            </label>
            <div class="form-floating">
              negativeEffact
              <textarea
                name="negativeEffact"
                class="form-control"
                id="floatingTextarea"
                onChange={(event) => {
                  setnegativeEffact(event.target.value);
                }}
              ></textarea>
            </div>
          </div>

          <div class="mb-3">
            <label className="form-label">
              Rate the Negative Side Effects{" "}
            </label>
            <div className="slideContainer">
              <input
                type="range"
                min="1"
                max="7"
                // value="1"
                id="myRange"
                class="slider"
                onChange={(event) => {
                  setNegVal(event.target.value);
                }}
              />
              <p>
                Value:{negVal}
                <span id="value"></span>
              </p>
            </div>
          </div>

          {/* next question */}

          <div classname="mb-3">
            <label className="form-label">Recommend this treatment</label>
            <div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="No"
                  id="flexRadioDefault3"
                  onChange={(event) => {
                    setitreatmentRecommendation(event.target.name);
                  }}
                />
                <label class="form-check-label" for="flexRadioDefault1">
                  No
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="yes"
                  id="flexRadioDefault4"
                  onChange={(event) => {
                    setitreatmentRecommendation(event.target.name);
                  }}
                  // checked
                />
                <label class="form-check-label" for="flexRadioDefault2">
                  Yes
                </label>
              </div>
            </div>
          </div>

          {/* next question */}
          {/* <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            email
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={handleChange}
              // required
            />
          </div> */}

          {/* next question */}

          {/* <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              // onChange={handleChange}
            />
          </div> */}
          <button
            type="submit"
            value="save"
            className="btn btn-primary"
            onSubmit={createUser}
          >
            Submit
          </button>
        </form>
        <button className="btn btn-primary" onClick={home}>
          Home
        </button>
        <button className="btn btn-primary" onClick={summary}>
          See the report
        </button>
      </div>
    </>
  );
}

export default Form;
