import {emailIsValid, passwordIsValid} from "../util/validation.js";
import {useInput} from "../hooks/useInput.js";
import Input from "./Input";

export default function LoginState() {
    const {
        inputData: emailValue,
        isInvalid: emailIsInvalid,
        handleChangeInput: handleEmailChange,
        changeSelected: emailIsSelected,
        validate: checkEmail} = useInput({checkValid: emailIsValid})

    const {
        inputData: passwordValue,
        isInvalid: passwordIsInvalid,
        handleChangeInput: handlePasswordChange,
        changeSelected: passwordIsSelected,
        validate: checkPassword} = useInput({checkValid: passwordIsValid})

    function handleSubmit(e) {
        e.preventDefault();

        if(checkPassword() || checkEmail()) {
            console.log(emailIsInvalid, passwordIsInvalid)
            return;
        }

        const data = {
            email: emailValue,
            password: passwordValue,
        }
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
                    value={emailValue}
                    onChange={(e) => handleEmailChange(e.target.value)}
                    onFocus={() => emailIsSelected(true)}
                    onBlur={() => emailIsSelected(false)}
                    isInvalid={emailIsInvalid}
                    errorMessage="Please enter a valid email"
                />
                <Input
                    id="password"
                    type="password"
                    name="password"
                    tag="Password"
                    value={passwordValue}
                    onChange={(e) => handlePasswordChange(e.target.value)}
                    onFocus={() => passwordIsSelected(true)}
                    onBlur={() => passwordIsSelected(false)}
                    isInvalid={passwordIsInvalid}
                    errorMessage="Please enter a valid password"
                />
            </div>
            <p className="form-actions">
                <button className="button button-flat" type="reset">Reset</button>
                <button className="button">Login</button>
            </p>
        </form>
    );
}
