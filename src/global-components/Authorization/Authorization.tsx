import React, { useState } from "react";
import AuthorizationStyles from "./Authorization.module.scss";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import CustomButton from "../Button/Button";
import variables from "../../styles-utils/variables.scss";
import { emailSchema } from "../../utils/form-validations";
import { AppDispatch } from "../../redux_services/store";
import { useDispatch } from "react-redux";
import Logo from "../../global-images/Logo.png";

function Authorization() {
  const dispatch: AppDispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordShown, setPasswordShown] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password !== "") {
      setError("");
      try {
        emailSchema.parse(email);
        setError("");
        // Dispatch login thunk function with email and password
        //   dispatch(loginThunk({ email, password }));
      } catch (validationError) {
        setError("Введите корректный Email");
      }
    } else setError("Введите пароль");
  };

  const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password !== "") {
      setError("");
      try {
        emailSchema.parse(email);
        setError("");
        // Dispatch register thunk function with email and password
        //   dispatch(registerThunk({ email, password }));
      } catch (validationError) {
        setError("Введите корректный Email");
      }
    } else setError("Введите пароль");
  };

  const togglePasswordVisiblity = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    passwordShown ? setPasswordShown(false) : setPasswordShown(true);
  };

  return (
    <div className={AuthorizationStyles.authPageWrapper}>
      <div className={AuthorizationStyles.logoWrapper}>
        {" "}
        <img src={Logo} alt="Логотип PAY2U." />{" "}
      </div>
      <div className={AuthorizationStyles.mainContent}>
        <div className={AuthorizationStyles.formWrapper}>
          <h1 className={AuthorizationStyles.title}>Войдите или зарегистрируйтесь</h1>
          <form className={AuthorizationStyles.formWrapper} id="loginData">
            <label htmlFor="email" style={{ display: "none" }}>
              Email
            </label>
            <input
              id="email"
              name="email"
              type="text"
              placeholder="Email"
              className={AuthorizationStyles.input}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label htmlFor="password" style={{ display: "none" }}>
              Пароль
            </label>
            <div className={AuthorizationStyles.inputField}>
              <input
                id="password"
                name="password"
                type={passwordShown ? "text" : "password"}
                placeholder="Пароль"
                className={AuthorizationStyles.input}
                autoComplete="off"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <div className={AuthorizationStyles.inputAdornment}>
                <IconButton
                  type="button"
                  aria-label="toggle password visibility"
                  onClick={togglePasswordVisiblity}
                  edge="end"
                >
                  {passwordShown ? <VisibilityOffIcon /> : <VisibilityIcon />}
                </IconButton>
              </div>
            </div>
          </form>
          <p className={AuthorizationStyles.formErrorAlert}>{error}</p>
        </div>
      </div>

      <div className={AuthorizationStyles.bottomButtonsWrapper}>
        <CustomButton
          buttonName={"Войти"}
          onClick={handleLogin}
          backgroundColor={variables.mainBackgroundColor}
          color={variables.mainTextFontColor}
          borderColor={variables.buttonBorderColor}
        />

        <CustomButton
          buttonName={"Зарегистрироваться"}
          backgroundColor={variables.mainButtonColor}
          color={variables.mainTextFontColor}
          onClick={handleRegister}
        />
      </div>
    </div>
  );
}

export default Authorization;
