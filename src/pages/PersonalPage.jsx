import React, { useState, useEffect } from "react";
import styles from "./Profile.module.css";
import imgAva from '../img/Account/Ava.png'

const Profile = () => {
  const [profileData, setProfileData] = useState({
    id: null,
    avatar: null,
    gmail_id: null,
    given_name: null,
    family_name: null,
    birthday: null,
    citizenship: null,
    email: null,
    gender: null,
    nickname: null,
    new_nickname: null,
    password: null,
    phone: null,
  });

  useEffect(() => {
    const savedProfile = JSON.parse(localStorage.getItem("profileData"));
    if (savedProfile) {
      setProfileData(savedProfile);
    }
  }, []);

  const saveToLocalStorage = (data) => {
    localStorage.setItem("profileData", JSON.stringify(data));
  };

  const handleEdit = (field) => {
    const newValue = prompt(`Введіть нове значення для ${field}`, profileData[field] || "");
    if (newValue !== null) {
      const updatedProfile = { ...profileData, [field]: newValue };
      setProfileData(updatedProfile);
      saveToLocalStorage(updatedProfile);
    }
  };

  return (
    <div className={styles.profileContainer}>
      <div className={styles.profileSection}>
        <h2>Профіль</h2>
        <div className={styles.profileInfo}>
          <div className={styles.avatar}>
            {profileData.avatar ? (
              <img src={profileData.avatar} alt="Avatar" className={styles.avatarImg} />
            ) : (
              <img
                src={imgAva}
                alt="Avatar"
                className={styles.avatarImg}
              />
            )}
            <button
              onClick={() => handleEdit("avatar")}
              className={styles.editBtn}
            >
              Завантажити аватар
            </button>
          </div>
          <div className={styles.profileFields}>
            <p>
              Ім’я: <span>{profileData.given_name || "Заповніть поле"}</span>{" "}
              <button onClick={() => handleEdit("given_name")} className={styles.editBtn}>
                ✏️
              </button>
            </p>
            <p>
              Прізвище: <span>{profileData.family_name || "Заповніть поле"}</span>{" "}
              <button onClick={() => handleEdit("family_name")} className={styles.editBtn}>
                ✏️
              </button>
            </p>
            <p>
              Нікнейм: <span>{profileData.nickname || "Заповніть поле"}</span>{" "}
              <button onClick={() => handleEdit("nickname")} className={styles.editBtn}>
                ✏️
              </button>
            </p>
            <p>
              Дата народження: <span>{profileData.birthday || "Заповніть поле"}</span>{" "}
              <button onClick={() => handleEdit("birthday")} className={styles.editBtn}>
                ✏️
              </button>
            </p>
            <p>
              Громадянство: <span>{profileData.citizenship || "Заповніть поле"}</span>{" "}
              <button onClick={() => handleEdit("citizenship")} className={styles.editBtn}>
                ✏️
              </button>
            </p>
            <p>
              Стать: <span>{profileData.gender || "Заповніть поле"}</span>{" "}
              <button onClick={() => handleEdit("gender")} className={styles.editBtn}>
                ✏️
              </button>
            </p>
          </div>
        </div>
      </div>

      <div className={styles.securitySection}>
        <h2>Безпека облікового запису</h2>
        <form className={styles.securityForm}>
          <label>
            Електронна пошта
            <input
              type="email"
              value={profileData.email || ""}
              readOnly
              className={styles.input}
            />
          </label>
          <label>
            Номер телефону
            <input
              type="text"
              value={profileData.phone || ""}
              onChange={(e) =>
                setProfileData({ ...profileData, phone: e.target.value })
              }
              className={styles.input}
            />
          </label>
          <label>
            Пароль
            <input
              type="password"
              value={profileData.password || ""}
              readOnly
              className={styles.input}
            />
          </label>
          <button
            type="button"
            className={styles.updateBtn}
            onClick={() => saveToLocalStorage(profileData)}
          >
            Зберегти зміни
          </button>
        </form>
      </div>
    </div>
  );
};

export default Profile;