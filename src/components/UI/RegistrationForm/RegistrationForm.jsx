import classes from './RegistrationForm.module.css'
import React, { useState } from 'react';

const connection  = {
    ClientServer: "http://localhost:5104",
  }

function RegistrationForm({ connection }) {
    const [formData, setFormData] = useState({
        avatar: null,
        real_name: '',
        nickname: '',
        email: '',
        phone: '',
        birthday: '',
        gender: '',
        citizenship: '',
        password: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData({
            ...formData,
            [name]: files ? files[0] : value
        });
    };

    const validate = () => {
        let tempErrors = {};

        // Валідація реального імені
        if (!/^[A-Z][a-z]{1,31}$/.test(formData.real_name)) {
            tempErrors.real_name = "Ім'я повинно починатися з великої літери та містити не більше 32 символів.";
        }

        // Валідація нікнейму
        if (!/^[a-zA-Z]{1,16}$/.test(formData.nickname)) {
            tempErrors.nickname = "Нікнейм повинен містити лише латинські літери та бути не більше 16 символів.";
        }

        // Валідація email
        if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)) {
            tempErrors.email = "Некоректний формат електронної пошти.";
        }

        // Валідація телефону
        if (!/^\+\d{1,15}$/.test(formData.phone)) {
            tempErrors.phone = "Телефон повинен починатися з + і містити лише цифри, без пробілів.";
        }

        // Валідація дати народження (07.08.2024 or 07/08/2024)
        if (!/^\d{2}[./]\d{2}[./]\d{4}$/.test(formData.birthday)) {
            tempErrors.birthday = "Дата народження повинна бути у форматі дд.мм.рррр або дд/мм/рррр.";
        }

        // Валідація пароля
        if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(formData.password)) {
            tempErrors.password = "Пароль повинен містити щонайменше 8 символів, з них великі чи малі літери та цифри.";
        }

        // Перевірка статі
        if (formData.gender !== 'M' && formData.gender !== 'F') {
            tempErrors.gender = "Виберіть правильну стать.";
        }

        // Перевірка міста проживання
        if (formData.citizenship.length === 0) {
            tempErrors.citizenship = "Місто проживання не може бути порожнім.";
        }

        // Валідація аватару
        if (!formData.avatar) {
            tempErrors.avatar = "Аватар обов'язковий.";
        }

        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validate()) {
            return;
        }

        // Перетворення gender на булеве значення
        const genderValue = formData.gender === "M" ? true : false;

        // Формування FormData об'єкта
        const data = new FormData();
        for (let key in formData) {
            data.append(key, key === 'gender' ? genderValue : formData[key]);
        }

        // Отримання токену
        const token = localStorage.getItem('dc_auth_key');
        if (!token) {
            alert("Користувач не отримав унікальні токени");
            return;
        }

        // Формування URL з зашифрованими даними
        const userAgent = navigator.userAgent;
        const url = `${connection}/api/client/${encodeURIComponent(userAgent)}`;

        // Відправка запиту
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
                body: data
            });

            const res = await response.json();

            if (response.status === 201) {
                localStorage.setItem("user_data", JSON.stringify(res.data));
                // Виконати додаткові дії після успішної реєстрації, наприклад, перенаправлення
            } else {
                alert("Не вдалося зареєструвати користувача");
            }

            return res;
        } catch (error) {
            console.error("Помилка при реєстрації користувача:", error);
            return error;
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Аватар:
                <input type="file" name="avatar" onChange={handleChange} />
                {errors.avatar && <p>{errors.avatar}</p>}
            </label>
            <label>
                Ім'я:
                <input type="text" name="real_name" value={formData.real_name} onChange={handleChange} />
                {errors.real_name && <p>{errors.real_name}</p>}
            </label>
            <label>
                Нікнейм:
                <input type="text" name="nickname" value={formData.nickname} onChange={handleChange} />
                {errors.nickname && <p>{errors.nickname}</p>}
            </label>
            <label>
                Email:
                <input type="email" name="email" value={formData.email} onChange={handleChange} />
                {errors.email && <p>{errors.email}</p>}
            </label>
            <label>
                Телефон:
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} />
                {errors.phone && <p>{errors.phone}</p>}
            </label>
            <label>
                Дата народження:
                <input type="text" name="birthday" value={formData.birthday} onChange={handleChange} />
                {errors.birthday && <p>{errors.birthday}</p>}
            </label>
            <label>
                Стать:
                <select name="gender" value={formData.gender} onChange={handleChange}>
                    <option value="">Оберіть</option>
                    <option value="M">Чоловік</option>
                    <option value="F">Жінка</option>
                </select>
                {errors.gender && <p>{errors.gender}</p>}
            </label>
            <label>
                Місто проживання:
                <input type="text" name="citizenship" value={formData.citizenship} onChange={handleChange} />
                {errors.citizenship && <p>{errors.citizenship}</p>}
            </label>
            <label>
                Пароль:
                <input type="password" name="password" value={formData.password} onChange={handleChange} />
                {errors.password && <p>{errors.password}</p>}
            </label>
            <button type="submit">Зареєструватись</button>
        </form>
    );
}

export default RegistrationForm;