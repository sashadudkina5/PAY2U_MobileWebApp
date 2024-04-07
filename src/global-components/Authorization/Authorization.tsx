import React, { useState, useEffect } from "react";
import AuthorizationStyles from "./Authorization.module.scss";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import CustomButton from "../Button/Button";
import variables from "../../styles-utils/variables.scss";
import { emailSchema } from "../../utils/form-validations";
import { AppDispatch } from "../../redux_services/store";
import Logo from "../../global-images/Logo.png";
import { registerThunk } from "../../redux_services/thunk-functions/onRegister";
import { loginThunk } from "../../redux_services/thunk-functions/onLogin";
import {
  getRegisterError,
  getLoginError,
  getAuthStatus,
} from "../../redux_services/selectors";
import { useAppSelector, useAppDispatch } from "../../utils/hooks";
import { useNavigate } from "react-router-dom";
import { getCookie } from "../../utils/api";
import { getAllExpenses } from "../../redux_services/selectors";
import { getTotalExpenses } from "../../redux_services/thunk-functions/getTotalExpenses";
import { firstDayLastYear, lastDayThisYear } from "../../utils/dates";




/**
 * Renders an authorization form for login and registration with email and password fields.
 * Includes functionality to toggle password visibility and validate email format.
 * Utilizes local state for form data and errors, and dispatches actions for login or registration.
 *
 * Uses `emailSchema` for email validation, and custom `CustomButton` components for submission buttons.
 * Displays an error message for invalid inputs. State hooks manage email, password, visibility of the password, and error messages.
 *
 * @example
 * <Authorization />
 *
 * @returns {JSX.Element} The Authorization component.
 */
function Authorization() {
  const dispatch: AppDispatch = useAppDispatch();

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordShown, setPasswordShown] = useState(false);
  const [error, setError] = useState("");

  const authStatus: boolean = useAppSelector(getAuthStatus);
  const totalExpenses = useAppSelector(getAllExpenses);

  useEffect(() => {
    if (authStatus) {
      dispatch(getTotalExpenses(firstDayLastYear, lastDayThisYear));
    }
  }, [authStatus, dispatch]);

  
  useEffect(() => {
    if (authStatus && typeof totalExpenses === 'number') {
      if (totalExpenses > 0) {
        navigate("/active/main", { replace: true });
      } else {
        navigate("/main", { replace: true });
      }
    }
  }, [authStatus, totalExpenses, navigate]);
  

  const userData = {
    email: email,
    password: password,
  };

  const registerError: string = useAppSelector(getRegisterError);
  const loginError: string = useAppSelector(getLoginError);

  function displayError() {
    let errorMessage = null;

    if (registerError) {
      if (registerError.includes("слишком короткий")) {
        errorMessage = (
          <p className={AuthorizationStyles.formErrorAlert}>
            Пароль должен состоять из 8 или более символов
          </p>
        );
      } else if (registerError.includes("пароль состоит только из цифр")) {
        errorMessage = (
          <p className={AuthorizationStyles.formErrorAlert}>
            Пароль должен состоять из чисел и букв
          </p>
        );
      } else if (registerError.includes("уже существует")) {
        errorMessage = (
          <p className={AuthorizationStyles.formErrorAlert}>
            Пользователь с таким логином уже зарегистрирован
          </p>
        );
      } else if (registerError.includes("слишком широко распространён")) {
        errorMessage = (
          <p className={AuthorizationStyles.formErrorAlert}>
            Придумайте более сложный пароль
          </p>
        );
      }
    }

    if (!errorMessage && loginError) {
      if (loginError.includes("неверный")) {
        errorMessage = (
          <p className={AuthorizationStyles.formErrorAlert}>Неверный пароль</p>
        );
      } else if (loginError.includes("No active account found")) {
        errorMessage = (
          <p className={AuthorizationStyles.formErrorAlert}>
            Введены неверные данные или такой пользователь не зарегистрирован
          </p>
        );
      }
    }

    return errorMessage;
  }

  useEffect(() => {
    if (authStatus) {
      navigate("/main", { replace: true });
    }
  }, [authStatus]);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password !== "") {
      setError("");
      try {
        emailSchema.parse(email);
        setError("");
        dispatch(loginThunk(userData));
      } catch (validationError) {
        setError("Введите корректный Email");
      }
    } else setError("Введите пароль");
  };

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password !== "") {
      setError("");
      try {
        emailSchema.parse(email);
        setError("");
        dispatch(registerThunk(userData));
        dispatch(loginThunk(userData));
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
          <h1 className={AuthorizationStyles.title}>
            Войдите или зарегистрируйтесь
          </h1>
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
          <p className={AuthorizationStyles.formErrorAlert}>
            {error} <br />
            {registerError || loginError ? displayError() : null}
          </p>
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
