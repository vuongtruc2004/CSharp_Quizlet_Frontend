"use client";
import { useState } from "react";
import { IRegisterForm } from "../services/register.type";
import styles from "./register.module.css";

const RegisterForm = () => {
    const [form, setForm] = useState<IRegisterForm>({
        email: "",
        password: "",
        confirmPassword: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert("Đăng ký thành công!");
    };

    return (
        <div className={styles.formBox}>
            <div className={styles.tabGroup}>
                <button type="button" className={styles.tabActive}>Sign up</button>
                <button type="button" className={styles.tab}>Sign in</button>
            </div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email:</label>
                <input
                    id="email"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className={styles.input}
                    placeholder="Nhập email"
                />
                <label htmlFor="password">Password:</label>
                <input
                    id="password"
                    type="password"
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                    required
                    className={styles.input}
                    placeholder="Nhập mật khẩu"
                />
                <label htmlFor="confirmPassword">Confirm Password:</label>
                <input
                    id="confirmPassword"
                    type="password"
                    name="confirmPassword"
                    value={form.confirmPassword}
                    onChange={handleChange}
                    required
                    className={styles.input}
                    placeholder="Nhập lại mật khẩu"
                />
                <button type="submit" className={styles.button}>Register</button>
            </form>
            <div className={styles.socialGroup}>
                <button type="button" className={styles.google}>Login with Google</button>
                <button type="button" className={styles.facebook}>Login with Facebook</button>
            </div>
            <a href="/" className={styles.backHome}>Back to home</a>
        </div>
    );
};

export default RegisterForm;