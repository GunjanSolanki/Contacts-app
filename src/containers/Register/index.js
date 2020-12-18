import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { register } from "../../context/actions/register";

const RegisterContainer = () => {
  useEffect(() => {
    register();
  }, [])

  return (
    <div>
      <h1>Register</h1>
      <Link to='/auth/login'>Login here</Link>
    </div>
  );
}

export default RegisterContainer;