import { useState } from 'react';
import styles from './Inputs.module.css';

export default function AuthInputs() {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(identifier, value) {
    if (identifier === 'email') {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }

  function handleLogin() {
    setSubmitted(true);
  }

  let labelStyleEmail = styles.label, inputStyleEmail = styles.input;
  let labelStylePass = styles.label, inputStylePass = styles.input;

  if(submitted && !enteredEmail.includes('@')){
    labelStyleEmail += " " + styles.invalidLabel;
    inputStyleEmail += ` ${styles.invalidInput}`;
  }

  if(submitted && enteredPassword.trim().length < 6){
    labelStylePass += ` ${styles.invalidLabel}`;
    inputStylePass += ` ${styles.invalidInput}`;
  }



  return (
    <div id="auth-inputs" className={styles.authInputs}>
      <div className={styles.controls} >
        <p>
          <label className={labelStyleEmail}>Email</label>
          <input
            type="email"
            className={inputStyleEmail}
            onChange={(event) => handleInputChange('email', event.target.value)}
          />
        </p>
        <p>
          <label className={labelStylePass}>Password</label>
          <input
            type="password"
            className={inputStylePass}
            onChange={(event) =>
              handleInputChange('password', event.target.value)
            }
          />
        </p>
      </div>
      <div className={styles.actions}>
        <button type="button" className={styles.textButton}>
          Create a new account
        </button>
        <button className={styles.button} onClick={handleLogin}>Sign In</button>
      </div>
    </div>
  );
}
