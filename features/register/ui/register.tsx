import styles from "./register.module.css";
import RegisterImage from "./register.image";
import RegisterForm from "./register.form";

const Register = () => {
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <RegisterImage />
            </div>
            <div className={styles.right}>
                <RegisterForm />
            </div>
        </div>
    );
};

export default Register;