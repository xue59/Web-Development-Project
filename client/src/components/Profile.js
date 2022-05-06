import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
const SERVER_URL = process.env.REACT_APP_SERVER_URL;

export default function Profile() {
  const { user } = useAuth0();
  const [mongodb_user, setMongodb_user] = useState({});
  const [isUpdating, setIsUpdating] = useState(false);
  const [occupation, setOccupation] = useState(mongodb_user?.occupation);
  const [hobby, setHobby] = useState(mongodb_user?.hobby);

  // console.log(mongodb_user);

  useEffect(() => {
    async function findUserInfo() {
      const data = await fetch(`${SERVER_URL}/users/${user.email}/`);
      // console.log(data);
      const jsonData = await data.json();
      // console.log(jsonData);
      setMongodb_user(jsonData);
      setOccupation(mongodb_user.occupation);
      setHobby(mongodb_user.hobby);
      // console.log("mongouser", mongodb_user);
    }
    findUserInfo();
  }, [isUpdating]);

  async function handleClickButton() {
    // when press on submit, pass the changes to mongodb
    if (isUpdating) {
      
      let databody = {
        email: user.name,
        occupation: occupation,
        hobby: hobby,
      };

      // console.log("databody", databody);

      await fetch(`${SERVER_URL}/users/${user.name}/`, {
        method: "POST",
        body: JSON.stringify(databody),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
    }
    // else - when press on Update
    setIsUpdating(!isUpdating);
  }

  return (
    <div>
      <h4>Avatar:</h4>
      <img src={user.picture}></img>
      <p></p>
      <h4>Nick Name:</h4>
      <p>{user.nickname}</p>
      <h4>User Name:</h4>
      <p>{user.name}</p>
      <h4>Email:</h4>
      <p>{user.name}</p>

      <h4>Occupation:</h4>
      {isUpdating ? (
        <p>
          <input
            type="text"
            value={occupation || ""}
            placeholder={occupation || ""}
            onChange={(e) => setOccupation(e.target.value)}
          />
        </p>
      ) : (
        <p>
          {mongodb_user && mongodb_user.occupation
            ? mongodb_user.occupation
            : "This user has not input any info"}
        </p>
      )}

      <h4>Hobby:</h4>
      {isUpdating ? (
        <p>
          <input
            type="text"
            value={hobby || ""}
            placeholder={hobby || ""}
            onChange={(e) => setHobby(e.target.value)}
          />
        </p>
      ) : (
        <p>
          {mongodb_user && mongodb_user.hobby
            ? mongodb_user.hobby
            : "This user has not input any info"}
        </p>
      )}

      <input
        className="btn btn-primary"
        value={isUpdating ? "Submit" : "Update"}
        onClick={() => {
          handleClickButton();
        }}
      >
      </input>
    </div>
  );
}
