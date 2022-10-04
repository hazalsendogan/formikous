import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import validations from "../validation/valid";

export default function Register() {
  const initVal = {
    firstName: "",
    lastName: "",
    age: "",
    email: "",
    password: " ",
    passwordConfirm: "",
  };
  // const [user, setUser] = useState([initVal]);
  // useEffect(() => {
  //   setUser([initVal])
  // }, [user])

  const formik = useFormik({
    initialValues: initVal,
    onSubmit: (values) => {
      const users = JSON.stringify(values, null, 2);
      console.log(users);
    },
    validationSchema: validations
  });
  return (
    <div className="row">
      <div className="col-md-6 offset-md-3">
        <form onSubmit={formik.handleSubmit}>
          <div className="card mt-5">
            <div className="card-header">Register</div>
            <div className="card-body">
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  name="firstName"
                  placeholder="First Name"
                  onChange={formik.handleChange}
                  value={formik.values.firstName}
                  onBlur={formik.handleBlur}
                />
                <label htmlFor="fistName" className="control-label">
                  First Name
                </label>
                {formik.errors.firstName && formik.touched.firstName && <p className="text-danger">{formik.errors.firstName}</p>}
              </div>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  name="lastName"
                  placeholder="Last Name"
                  onChange={formik.handleChange}
                  value={formik.values.lastName}
                  onBlur={formik.handleBlur}
                />
                <label htmlFor="lastName" className="control-label">
                  Last Name
                </label>
                {formik.errors.lastName && formik.touched.lastName && <p className="text-danger">{formik.errors.lastName}</p>}
              </div>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  name="age"
                  placeholder="Age"
                  onChange={formik.handleChange}
                  value={formik.values.age}
                  onBlur={formik.handleBlur}
                />
                <label htmlFor="age" className="control-label">
                  Age
                </label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="name@example.com"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  onBlur={formik.handleBlur}
                />
                <label htmlFor="email" className="control-label">
                  Email address
                </label>
                {formik.errors.email && formik.touched.email && <p className="text-danger">{formik.errors.email}</p>}
              </div>
              <div className="form-floating mb-3">
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="Password"
                  onChange={formik.handleChange}
                  value={formik.values.password}
                  onBlur={formik.handleBlur}
                />
                <label htmlFor="password" className="control-label">
                  Password
                </label>
                {formik.errors.password && formik.touched.password && <p className="text-danger">{formik.errors.password}</p>}
              </div>
              <div className="form-floating mb-3">
                <input
                  type="password"
                  className="form-control"
                  name="passwordConfirm"
                  placeholder="Password Confirm"
                  onChange={formik.handleChange}
                  value={formik.values.passwordConfirm}
                  onBlur={formik.handleBlur}
                />
                <label htmlFor="passwordConfirm" className="control-label">
                  Password Confirm
                </label>
                {formik.errors.passwordConfirm && formik.touched.passwordConfirm && <p className="text-danger">{formik.errors.passwordConfirm}</p>}
              </div>
              <button type="submit" className="btn btn-primary w-100">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="col-md-6 offset-md-3 mt-3">
        <div className="card">
          <div className="card-header">Registered User</div>
          <div className="card-body">
            <ul>
              <li>
                <strong>Name: </strong>
                <span>
                  {formik.values.firstName} {formik.values.lastName}
                </span>
              </li>
              <li>
                <strong>Age: </strong>
                <span>{formik.values.age}</span>
              </li>
              <li>
                <strong>Email: </strong>
                <span>{formik.values.email}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
