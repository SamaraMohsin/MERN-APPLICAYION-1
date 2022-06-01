// // import express from "express";
// const express = require("express");
// const mongoose = require("mongoose");
// // import cors from "cors";
// const cors = require("cors");
// const FormModel = require("./models/forms");
// const UserModel = require("./models/LoginRegister");

// const app = express();
// app.use(express.json());
// app.use(express.urlencoded());
// app.use(cors());

// // mongoose.connect(
// //   // "'mongodb://localhost:27017/LoginRegisterDB'",
// //   "mongodb+srv://samara:samara123@cluster0.vtlik.mongodb.net/posifects?retryWrites=true&w=majority"
// //   {
// //     useNewUrlParser: true,
// //     useUnifiedTopology: true,
// //   },
// //   () => {
// //     console.log("DB Connected");
// //   }
// // );

// mongoose.connect(
//   "mongodb+srv://samara:samara123@cluster0.vtlik.mongodb.net/posifects?retryWrites=true&w=majority",
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   },
//   () => {
//     console.log("DB Connected");
//   }
// );

// app.post("/login", (req, res) => {
//   // res.send("My API login");
//   console.log(req.body);
//   const { email, password } = req.body;
//   UserModel.findOne({ email: email }, (err, user) => {
//     if (user) {
//       if (password === user.password) {
//         res.send({ message: "login successful", user: user });
//       } else {
//         res.send({ message: "password didn't match" });
//       }
//     } else {
//       res.send({ message: "user not registered" });
//     }
//   });
// });

// app.post("/register", (req, res) => {
//   //   res.send("My API register");
//   console.log(req.body);
//   const { name, email, password } = req.body;
//   UserModel.findOne({ email: email }, (err, user) => {
//     if (user) {
//       res.send({ message: "User already registrered" });
//     } else {
//       //   creation of user in database
//       const user = new User({
//         name,
//         email,
//         password,
//       });
//       user.save((err) => {
//         if (err) {
//           res.send(err);
//         } else {
//           res.send({ message: "Successfull registered, Please login now" });
//         }
//       });
//     }
//   });
// });

// app.get("/getUsers", (req, res) => {
//   FormModel.find({}, (err, result) => {
//     if (err) {
//       res.json(err);
//     } else {
//       res.json(result);
//     }
//   });
// });

// app.post("/createUser", async (req, res) => {
//   const user = req.body;
//   const newUser = new FormModel(user);
//   await newUser.save();

//   res.json(user);
// });

// app.listen(3003, () => {
//   console.log("be started at port 3003");
// });

// import express from "express";
const express = require("express");
const mongoose = require("mongoose");
// import cors from "cors";
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

// mongoose.connect(
//   // "'mongodb://localhost:27017/LoginRegisterDB'",
//   "mongodb+srv://samara:samara123@cluster0.vtlik.mongodb.net/posifects?retryWrites=true&w=majority"
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   },
//   () => {
//     console.log("DB Connected");
//   }
// );

mongoose.connect(
  "mongodb+srv://samara:samara123@cluster0.vtlik.mongodb.net/posifects?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("DB Connected");
  }
);

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const User = new mongoose.model("User", userSchema);

const UserSchema2 = new mongoose.Schema({
  title: {
    type: String,
    // required: true,
  },
  firstname: {
    type: String,
    // required: true,
  },
  lastname: {
    type: String,
    // required: true,
  },
  gender: {
    type: String,
    // required: true,
  },
  dob: {
    type: Date,
    //required: true,
  },
  treatmentName: {
    type: String,
    //required: true,
  },
  treatmentType: {
    type: String,
    //required: true,
  },
  startDate: {
    type: Date,
    //required: true,
  },
  endDate: {
    type: Date,
    //required: true,
  },
  method: {
    type: String,
    //required: true,
  },
  reasonForTaking: {
    type: String,
    //required: true,
  },
  feedback: {
    type: String,
    //required: true,
  },
  itreatmentRecommendation: {
    type: String,
  },
  heardAboutUs: {
    type: String,
    //required: true,
  },
  toldAboutSideEffects: {
    type: String,
    //required: true,
  },
});

const UserModel = mongoose.model("forms", UserSchema2);

app.get("/getUsers", (req, res) => {
  UserModel.find({}, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

app.post("/createUser", async (req, res) => {
  const user = req.body;
  const newUser = new UserModel(user);
  await newUser.save();

  res.json(user);
});

//Routes

// testing at start
// app.get("/", (req, res) => {
//   res.send("My API");
// });

app.post("/login", (req, res) => {
  // res.send("My API login");
  console.log(req.body);
  const { email, password } = req.body;
  User.findOne({ email: email }, (err, user) => {
    if (user) {
      if (password === user.password) {
        res.send({ message: "login successful", user: user });
      } else {
        res.send({ message: "password didn't match" });
      }
    } else {
      res.send({ message: "user not registered" });
    }
  });
});

app.post("/register", (req, res) => {
  //   res.send("My API register");
  console.log(req.body);
  const { name, email, password } = req.body;
  User.findOne({ email: email }, (err, user) => {
    if (user) {
      res.send({ message: "User already registrered" });
    } else {
      //   creation of user in database
      const user = new User({
        name,
        email,
        password,
      });
      user.save((err) => {
        if (err) {
          res.send(err);
        } else {
          res.send({ message: "Successfull registered, Please login now" });
        }
      });
    }
  });
});

app.listen(3001, () => {
  console.log("be started at port 3001");
});
