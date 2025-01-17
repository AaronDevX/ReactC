import {isEmail, isNotEmpty, hasMinLength, isEqualToOtherValue} from '../util/validation.js';
import {useActionState} from "react";

export default function Signup() {
    function signupAction(prevState, formData) {
        const email = formData.get('email');
        const password = formData.get('password');
        const confirmPassword = formData.get('confirm-password');
        const firstName = formData.get('first-name');
        const lastName = formData.get('last-name');
        const role = formData.get('role');
        const acquisition = formData.getAll('acquisition');
        const terms = formData.get('terms');


        let errors = []

        if(!isEmail(email)) {
            errors.push("enter a valid email");
        }

        if(!isNotEmpty(password) || !hasMinLength(password, 8)) {
            errors.push("enter a valid password");
        }

        if(!isEqualToOtherValue(confirmPassword, password)) {
            errors.push("password must match");
        }

        if(!isNotEmpty(firstName)) {
            errors.push("first name is required");
        }

        if(!isNotEmpty(lastName)) {
            errors.push("last name is required");
        }

        if(!isNotEmpty(role)) {
            errors.push("select a role");
        }

        if(!hasMinLength(acquisition, 1)) {
            errors.push("please select at least one acquisition");
        }

        if(!terms) {
            errors.push("please accept terms");
        }

        if(errors.length > 0) {
            return {errors,
                enteredValues: {
                    email,
                    password,
                    confirmPassword,
                    firstName,
                    lastName,
                    role,
                    acquisition,
                    terms
                }
            };
        }

        return {errors : null}
    }

    const [formState, formAction] = useActionState(signupAction, {errors : null});

  return (
    <form action={formAction}>
      <h2>Welcome on board!</h2>
      <p>We just need a little bit of data from you to get you started 🚀</p>

      <div className="control">
        <label htmlFor="email">Email</label>
        <input id="email" type="email" name="email" defaultValue={formState.enteredValues?.email || ""} />
      </div>

      <div className="control-row">
        <div className="control">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" defaultValue={formState.enteredValues?.password || ""}/>
        </div>

        <div className="control">
          <label htmlFor="confirm-password">Confirm Password</label>
          <input
            id="confirm-password"
            type="password"
            name="confirm-password"
            defaultValue={formState.enteredValues?.["confirm-password"] || ""}
          />
        </div>
      </div>

      <hr />

      <div className="control-row">
        <div className="control">
          <label htmlFor="first-name">First Name</label>
          <input type="text" id="first-name" name="first-name" defaultValue={formState.enteredValues?.["first-name"] || ""}/>
        </div>

        <div className="control">
          <label htmlFor="last-name">Last Name</label>
          <input type="text" id="last-name" name="last-name" />
        </div>
      </div>

      <div className="control">
        <label htmlFor="phone">What best describes your role?</label>
        <select id="role" name="role">
          <option value="">---Select---</option>
          <option value="student">Student</option>
          <option value="teacher">Teacher</option>
          <option value="employee">Employee</option>
          <option value="founder">Founder</option>
          <option value="other">Other</option>
        </select>
      </div>

      <fieldset>
        <legend>How did you find us?</legend>
        <div className="control">
          <input
            type="checkbox"
            id="google"
            name="acquisition"
            value="google"
          />
          <label htmlFor="google">Google</label>
        </div>

        <div className="control">
          <input
            type="checkbox"
            id="friend"
            name="acquisition"
            value="friend"
          />
          <label htmlFor="friend">Referred by friend</label>
        </div>

        <div className="control">
          <input type="checkbox" id="other" name="acquisition" value="other" />
          <label htmlFor="other">Other</label>
        </div>
      </fieldset>

      <div className="control">
        <label htmlFor="terms-and-conditions">
          <input type="checkbox" id="terms-and-conditions" name="terms" />I
          agree to the terms and conditions
        </label>
      </div>
        {formState.errors && <ul className="error">
            {formState.errors.map(error => (
                <li key={error}>{error}</li>
            ))}
        </ul>}
      <p className="form-actions">
        <button type="reset" className="button button-flat">
          Reset
        </button>
        <button className="button">Sign up</button>
      </p>
    </form>
  );
}
