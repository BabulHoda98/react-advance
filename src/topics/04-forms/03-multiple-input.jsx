import React, { useState } from "react";

const MultipleInputs = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    // console.log("handleChange");
    // console.log("e.target");
    console.log(e.target.name);
    console.log(e.target.value);
    
  const newUser = {
    ...user,
    [e.target.name]: e.target.value,
  };
  setUser(newUser);
};

const handleSubmit = (e) => {
  e.preventDefault();
  console.log(user);
};

return (
  <div>
    {/* <h2 className="h2">MultiPleinput</h2> */}
    <form className="mb-6" onSubmit={handleSubmit}>
      <div className="my-3 grid gap-1">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          className="input"
          value={user.name}
          onChange={handleChange}
        />
      </div>
      <div className="my-3 grid gap-1">
        <label htmlFor="name">Email</label>
        <input
          type="text"
          name="email"
          id="email"
          className="input"
          value={user.email}
          onChange={handleChange}
        />
      </div>
      <div className="my-3 grid gap-1">
        <label htmlFor="name">Passoword</label>
        <input
          type="password"
          name="password"
          id="password"
          className="input"
          value={user.password}
          onChange={handleChange}
        />
      </div>
      <div>
        <button className="btn">Submit</button>
      </div>
    </form>
  </div>
);
};
export default MultipleInputs;
