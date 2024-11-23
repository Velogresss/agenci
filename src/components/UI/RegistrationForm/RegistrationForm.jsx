////http://localhost:5082

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../../../Redux/userSlice";
import classes from './RegistrationForm.module.css';
import LinksFooter from '../LinksFooter/LinksFooter'

import { useNavigate } from 'react-router-dom';

function SimpleRegistrationForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    // name: '',
    login: '',
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");

  const validate = () => {
    const newErrors = {};

    // if (!/^[A-Z][a-z]{1,31}$/.test(formData.name)) {
    //   newErrors.name = "Ім'я повинно починатися з великої літери і містити до 32 символів.";
    // }
    if (!/^[A-Za-z]{1,16}$/.test(formData.login)) {
      newErrors.login = "Логін повинен містити тільки латинські букви і не більше 16 символів.";
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Введіть коректну електронну пошту (example@gmail.com).";
    }
    if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(formData.password)) {
      newErrors.password = "Пароль повинен містити щонайменше 8 символів, одну букву та одну цифру.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      const dcAuthKey = localStorage.getItem("dc_auth_key");
      if (!dcAuthKey) {
        alert("User did not receive unique tokens");
        return;
      }

      const userAgent = navigator.userAgent;
      const formDataObj = new FormData();

      // formDataObj.append("given_name", formData.name);
      formDataObj.append("nickname", formData.login);
      formDataObj.append("email", formData.email);
      formDataObj.append("password", formData.password);
      formDataObj.append("user_agent", userAgent);

      try {
        const response = await fetch('http://localhost:5082', {
          method: "POST",
          headers: {
            Authorization: `Bearer ${dcAuthKey}`
          },
          body: formDataObj
        });

        const result = await response.json();
        if (response.status === 200) {
          setMessage("Реєстрація успішна!");
          dispatch(setUser(formData));
          navigate('/all');
        } else {
          setMessage(result.message || "Виникла помилка під час реєстрації.");
        }
      } catch (error) {
        setMessage("Помилка сервера. Спробуйте пізніше.");
        console.error("Error:", error);
      }
    } else {
      setMessage("Є помилки валідації.");
    }
  };

  return (
    <div className={classes.registrationFormContainer}>
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      {/* <label>
        Ім'я
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
        {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
      </label> */}
      <div className={classes.registrationFormLabelContainer}>
      <label>
        <span>Логін</span>
        <input type="text" name="login" value={formData.login} onChange={handleChange} />
        {errors.login && <p style={{ color: "red" }}>{errors.login}</p>}
      </label>
      </div>
      <div className={classes.registrationFormLabelContainer}>
      <label>
        <span>Email</span>
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
        {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
      </label>
      </div>
      <div className={classes.registrationFormLabelContainer}>
      <label>
        <span>Пароль</span>
        <input type="password" name="password" value={formData.password} onChange={handleChange} />
        {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
      </label>
      </div>
      <div className={classes.formRegLinksFooter}>
        <LinksFooter/>
      </div>
      <button type="submit">Зареєструватися</button>
      {message && <p style={{ color: message.includes("успішна") ? "green" : "red" }}>{message}</p>}
    </form>
    </div>
  );
}

export default SimpleRegistrationForm;