import { useState, useEffect } from "react";
import Axios from "axios";

function Summary() {
  const [ListOfUsers, setListOfUser] = useState([
    // { id: 1, name: "Pedro", age: 20, username: "pedro123" },
  ]);

  useEffect(() => {
    Axios.get("http://localhost:3001/GetUsers").then((response) => {
      setListOfUser(response.data);
    });
  }, []);

  return (
    <div className="usersDisplay">
      <h1>Thank you for submission</h1>
      <h4>
        Below is the summary of your treatment which you can print out or email
        to a health professional
      </h4>
      {ListOfUsers.map((user) => {
        return (
          <>
            <div>
              {/* <h1>Name:{user.name}</h1>
              <h1>age:{user.age}</h1>
              <h1>Username:{user.username}</h1> */}

              {/* <h4>firstname:{user.firstname}</h4>
              <h4>lastname:{user.lastname}</h4>
              <h4>gender:{user.gender}</h4>
              <h4>dob:{user.dob}</h4>
              <h4>treatmentName:{user.treatmentName}</h4>
              <h4>treatmentType:{user.treatmentType}</h4>
              <h4>startDate:{user.startDate}</h4>
              <h4>endDate:{user.endDate}</h4>
              <h4>method:{user.method}</h4>
              <h4>reasonsForTaking:{user.reasonsForTaking}</h4>
              <h4>treatmentRecommendation:{user.itreatmentRecommendation}</h4>
              <h4>heardAboutUs:{user.heardAboutUs}</h4> */}
              {/* <h4>toldAboutSideEffects:{toldAboutSideEffects}</h4> */}
            </div>
            <div>
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">First Name</th>
                    <th scope="col">Last name</th>
                    <th scope="col">Gender</th>
                    <th scope="col">DOB</th>
                    <th scope="col">Treatment Name</th>
                    <th scope="col">Treatment Type</th>
                    <th scope="col">Start Date</th>
                    <th scope="col">End Date</th>
                    <th scope="col">Method</th>
                    <th scope="col">Reasons For Taking</th>
                    <th scope="col">Treatment Recommendation</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">{user.id}</th>
                    <td>{user.firstname}</td>
                    <td>{user.lastname}</td>
                    <td>{user.gender}</td>
                    <td> {user.dob}</td>
                    <td>{user.treatmentName}</td>
                    <td>{user.treatmentType}</td>
                    <td>{user.startDate}</td>
                    <td>{user.endDate}</td>
                    <td>{user.method}</td>
                  </tr>
                  {/* <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                  </tr> */}
                </tbody>
              </table>
            </div>
          </>
        );
      })}
    </div>
  );
}
export default Summary;
