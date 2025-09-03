import { motion } from "motion/react";
import "./Login.css";

export default function Login() {
  return (
    <main>
      <motion.form
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.3,
          ease: "linear",
        }}
        className="login-container"
      >
        <h2>Create your Account</h2>

        <label htmlFor="username-input">Username:</label>
        <input type="text" id="username-input" />
        <br />

        <label htmlFor="email-input">Email:</label>
        <input type="email" id="email-input" />
        <br />

        <label htmlFor="password-input">Password:</label>
        <input type="password" id="password-input" />
        <br />

        <label htmlFor="confirm-input">Confirm Password:</label>
        <input type="password" id="confirm-input" />
        <br />

        <button type="submit">Sign in</button>
      </motion.form>
    </main>
  );
}
