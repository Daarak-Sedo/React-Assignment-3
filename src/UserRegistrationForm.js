import React, { useState } from "react";
import "./App.css" 

function UserRegistrationForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [country, setCountry] = useState("");
  const [marketingEmails, setMarketingEmails] = useState(false);
  const [profilePicture, setProfilePicture] = useState("");
  const [formError, setFormError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!firstName || !lastName || !gender || !country || !profilePicture) {
      setFormError("All fields are required");
      return;
    }

    console.log("First Name: ", firstName);
    console.log("Last Name: ", lastName);
    console.log("Gender: ", gender);
    console.log("Country: ", country);
    console.log("Receive Marketing Emails: ", marketingEmails);
    console.log("Profile Picture: ", profilePicture);

    setFormError("");
    setFirstName("");
    setLastName("");
    setGender("");
    setCountry("");
    setMarketingEmails(false);
    setProfilePicture("");
  };

  return (
    <>
    <div className="caintainer">
    <h1>User Registration Form :-</h1>
    <form onSubmit={handleSubmit}>
      <label>
        First Name:
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </label>
      <br />
      <label>
        Last Name:
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </label>
      <br />
      <label>
        Gender:
        <select value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value="">Select</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </label>
      <br />
      <label>
        Country:
        <input
          type="text"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
      </label>
      <br />
      <div className="input5">
      <input
          type="checkbox"
          checked={marketingEmails}
          onChange={(e) => setMarketingEmails(e.target.checked)}
          id="input-box-5"
        />
      <label id="label5">
        Receive Marketing Emails
        </label>
        

      </div>

      <br />
      <label>
        Profile Picture:
        <input
          type="file"
          onChange={(e) => setProfilePicture(e.target.files[0])}
        />
      </label>
      <br />
     
<br />
<button type="submit">Submit</button>
</form>
    </div>
     
    
</>
);
}

export default UserRegistrationForm;
