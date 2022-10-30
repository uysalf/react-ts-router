import React, { useState } from "react";
import {
  Outlet,
  useSearchParams,
  useLocation,
  useParams,
  useNavigate,
  createSearchParams,
} from "react-router-dom";

const Users = (props: any) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const showActiveUsers = searchParams.get("filter");
  let params = useParams();
  let location = useLocation();
  const navigate = useNavigate();

  console.log("params:", params);
  console.log("location:", location);
  console.log("searchParams:", searchParams.toString());
  console.log(
    "searchParams.entries():",
    JSON.stringify(searchParams.entries())
  );
  console.log("showActiveUsers:", showActiveUsers);

  const onclick = (e: any) => {
    e.preventDefault();

    navigate({
      pathname: "12",
      search: `?${createSearchParams({
        foo: "bar",
        aa: "bb",
      })}`,
    });
  };

  //localhost:3000/users/1?filter=active
  //params:{"userId": "1"}

  // location:{
  //     "pathname": "/users/1",
  //     "search": "?filter=active",
  //     "hash": "",
  //     "state": null,
  //     "key": "ag7j6qh7"
  // }

  //searchParams: filter=active

  http: return (
    <div>
      <h1>Dynamic Routes Users</h1>
      <h2>User 1</h2>
      <h2>User 2</h2>
      <h2>User 3</h2>
      <Outlet />
      <div>
        <button onClick={() => setSearchParams({ filter: "active" })}>
          Active Users
        </button>
        <button onClick={() => setSearchParams({})}>Reset Filter</button>

        <button onClick={onclick}>Test Users</button>

        {showActiveUsers ? (
          <h2>Showing active users</h2>
        ) : (
          <h2>Showing all users</h2>
        )}
      </div>
    </div>
  );
};

export default Users;
