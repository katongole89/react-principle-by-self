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