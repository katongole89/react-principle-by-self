// Write two functional components to display a list broken into pages 
// that are traversable via a list of clickable page numbers below the list.
// The first component — the parent component — should fetch a list of users and conditionally
// render a loading status or the next component, the actual list generated from the data. The user array fetched
// in the parent component should be passed to the child component as a prop along with the number of items that should be displayed on each 
// page. The child component should display the first page of items and clickable links to the remaining pages of users. 


// In the image above, the “itemsPerPage” prop is set to 5. You may fetch users from randomuser.me, 
// a free API that provides random user data. To query the API, issue a get request to https://randomuser.me/api and 
// include the number of users that you would like returned as a query parameter. For example,
// issuing a get request to the following URL will return a list of 19 users: https://randomuser.me/api?results=19.
// The solution I provide later on uses the axios library to issue the request, but you may use fetch or any library that you are 
// comfortable with to issue the request. The object returned by the request takes the following form (in this case, the results parameter 
//     was set to 1):



import React, { useEffect, useState } from "react";
import axios from "axios";

function Challenge18() {
  return <Pagination />;
}

const Pagination = () => {
  const [users, setUsers] = useState();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get("https://randomuser.me/api?results=19");
        const userArray = res.data.results;
        const cleanArray = userArray.map((user) => {
          return {
            name: user.name.first + " " + user.name.last,
            age: user.dob.age,
            email: user.email,
          };
        });
        setUsers(cleanArray);
      } catch {
        alert("User request failed");
      }
    };

    fetchUsers();
  }, []);

  return users ? (
    <Pages content={users} itemsPerPage={5} />
  ) : (
    <h1>Loading users...</h1>
  );
};

// generic component for displaying table from array
// of objects where fields of objects are columns
const Pages = ({ content, itemsPerPage }) => {
  const [page, setPage] = useState(0);
  const start = itemsPerPage * page;
  const end = start + itemsPerPage;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        {Object.keys(content[0]).map((key) => (
          <h3 style={{ width: 160, fontWeight: "bold" }}>{key}</h3>
        ))}
      </div>
      {content.slice(start, end).map((obj) => {
        return (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            {Object.values(obj).map((value) => (
              <div style={{ width: 200 }}>{value}</div>
            ))}
          </div>
        );
      })}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        {Array.from(Array(Math.ceil(content.length / itemsPerPage)).keys()).map(
          (number) => (
            <p1
              style={{
                width: 30,
                color: "blue",
                marginTop: 20,
                cursor: "pointer",
                fontWeight: page == number ? "bold" : "normal",
              }}
              onClick={() => setPage(number)}
            >
              {number + 1}
            </p1>
          )
        )}
      </div>
    </div>
  );
};

export default Challenge18