import React from "react";
import useFetch from "./useFetch";

const UserInfo = () => {
  const { data, isLoading, isError } = useFetch("https://api.github.com/users/mojombo");

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error fetching data.</p>;

  return (
    <div>
      <h2>{data.name}</h2>
      <p>Username: {data.login}</p>
      <img src={data.avatar_url} alt={data.login} width="100" />
    </div>
  );
};

export default UserInfo;
