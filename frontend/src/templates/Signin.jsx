import LoginForm from "../components/LoginForm/LoginForm";
import { Link } from "react-router-dom";
import styles from "./Signin.module.css";

const Signin = () => {
  return (
    <div className={styles.container}>
      <div>
        <img src="/login.png" alt="loginImage" />
      </div>
      <div className={styles.formContainer}>
        <Link to={"/"}>
          <img src="/logo.png" alt="logo" />
        </Link>
        <p>Iniciar sesión</p>
        <LoginForm />
      </div>
    </div>
  );
};

export default Signin;
