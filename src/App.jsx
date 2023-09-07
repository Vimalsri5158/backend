/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { useState } from "react";
import './App.css';

// eslint-disable-next-line react/prop-types
function UserDialog({ isEdit, data, handleDialog }) {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    dob: "",
    gender: "male", // Default to male
    mobileNumber: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission here, e.g., send the data to an API or process it as needed
    console.log(formData);
  };

  return (
    <div className="dialog">
      <div className="dialog-root">
        <form onSubmit={handleSubmit} style={{marginLeft:'20px', marginTop:'30px', color:'white', fontSize:'14px'}}>
          <label htmlFor="name">Name:</label>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          /><br></br>

          <label htmlFor="age">Age:</label>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
          /><br></br>

          <label htmlFor="dob">Date of Birth:</label>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input
            type="date"
            id="dob"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            required
          /><br></br>

          <label>Gender:</label>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <select
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select><br></br>

          <label htmlFor="mobileNumber">Mobile Number:</label>
          <input
            type="tel"
            id="mobileNumber"
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleChange}
            required
          /><br></br>

          <button type="submit" style={{alignItems:'center',justifyContent:'center',marginLeft:'100px'}}>Submit</button>
        </form>
      </div>
    </div>
  );
}

function App() {
  const [showDialog, setShowDialog] = useState(false);

  const handleDialog = () => {
    setShowDialog(!showDialog);
  }

  return (
    <>
      <div
        style={{
          display: 'flex',
          marginTop:"-250px",
          alignItems: 'center',
          marginLeft:"150px",
          justifyContent: 'end',
        }}
      >
        <div
          style={{
            flexGrow: 1,
            marginRight:"750px",
          }}
        >
          List of users
        </div>
        <button onClick={handleDialog}>Add user</button>
      </div>
      {showDialog && <UserDialog handleDialog={handleDialog} />}
    </>
  );
}

export default App;
