import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react/cjs/react.development";

const UserDetals = () => {
  const { id } = useParams();

  const [userDetails, setUserDetails] = useState({});
  const { name, username, email, phone, website } = userDetails;

  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/users/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setUserDetails(data))
      .catch((err) => console.log(err));
  });

  return (
    <div>
      <h1>
        <strong>User Details</strong> : {id}{" "}
      </h1>
      <h4>
        <strong>Name</strong> : {name}
      </h4>
      <h4>
        <strong>Username</strong> : {username}
      </h4>
      <h4>
        <strong>Email</strong> : {email}
      </h4>
      <h4>
        <strong>Phone</strong> : {phone}
      </h4>
      <h4>
        <strong>website</strong> : {website}
      </h4>
    </div>
  );
};

export default UserDetals;
