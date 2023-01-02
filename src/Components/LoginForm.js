import PropTypes from "prop-types";
import React, { useState } from "react";
import styled from "styled-components";
import Button from "../Components/Button";
import { useForm } from "react-hook-form";
import Input from "../Components/Input";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

function LoginForm(props) {
  const { buttonText, onEmailSubmit } = props;
  const [displayEmail, setDisplayEmail] = useState(false);

  const loginFormSchema = yup
    .object({
      email: yup
        .string()
        .email("please enter a valid email")
        .required("please enter a email"),
      password: yup
        .string()
        .required("please enter a password")
        .min(5, "password must be 5 characters long"),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginFormSchema),
  });

  const StyledErrorLabel = styled.label`
    color: red;
    font-weight: bolder;
    margin: 1% 0 4% 0;
  `;

  const handleClick = (e) => {
    e.preventDefault();
    setDisplayEmail(!displayEmail);
  };

  const errorBorder = (error) => error && { borderColor: "red" };
  return (
    <React.Fragment>
      {!displayEmail && <Button onClick={handleClick} text="Email" />}

      {displayEmail && (
        <form onSubmit={handleSubmit(onEmailSubmit)}>
          <p>
            <label> Email </label>
          </p>
          <p>
            <Input
              type="text"
              style={errorBorder(errors.email)}
              {...register("email")}
            />
            <StyledErrorLabel>{errors?.email?.message}</StyledErrorLabel>
          </p>

          <label> Password </label>
          <p>
            <Input
              type="password"
              name="password"
              {...register("password")}
              style={errorBorder(errors.password)}
            />
            <StyledErrorLabel>{errors?.password?.message}</StyledErrorLabel>
          </p>
          <Button text={buttonText} type="submit" />
        </form>
      )}
    </React.Fragment>
  );
}

LoginForm.propTypes = {
  buttonText: PropTypes.string,
};

LoginForm.defaultProps = {
  buttonText: "JOIN",
};

export default LoginForm;
