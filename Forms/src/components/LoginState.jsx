import {emailIsValid, passwordIsValid} from "../util/validation.js";
import Input from "./Input";

export default function LoginState() {
    function handleSubmit(e) {
        e.preventDefault();

        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());

        console.log(data);
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>
            <div className="control-row">
                <Input
                    id="email"
                    type="email"
                    name="email"
                    tag="Email"
                    checkValid={emailIsValid}
                />
                <Input
                    id="password"
                    type="password"
                    name="password"
                    tag="Password"
                    checkValid={passwordIsValid}
                />
            </div>
            <p className="form-actions">
                <button className="button button-flat" type="reset">Reset</button>
                <button className="button">Login</button>
            </p>
        </form>
    );
}
