import RegisterForm from "../components/RegisterForm/RegisterForm";
import { Link } from "react-router-dom";
import styles from "./Signin.module.css";

const Signup = () => {
  return (
    <div className={styles.container}>
      <div>
        <img src="/registro.png" alt="Register Image" />
      </div>
      <div className={styles.formContainer}>
        <Link to={"/"}></Link>
        <p>Registrarse</p>
        <RegisterForm />
      </div>
    </div>
  );
};

export default Signup;
