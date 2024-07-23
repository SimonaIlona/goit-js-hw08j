import throttle from "lodash.throttle";

const form = document.querySelector("form");
const email = document.querySelector("input");
const message = document.querySelector("textarea");

const getLocalStorageValue = () => {
    let inputState = localStorage.getItem("feedback-form-state");
    if (inputState) {
        inputState = JSON.parse(inputState);
        return inputState;
    }
    return {};
}

const inputState = getLocalStorageValue()

if (inputState.email) {
    email.value = inputState.email;
}

if (inputState.message) {
    message.value = inputState.message;
};

const storeInput = throttle((currentInput) => {
    
    const name = currentInput.target.name;
    const value = currentInput.target.value;
    const currentState = getLocalStorageValue();
    currentState[name] = value;
    localStorage.setItem("feedback-form-state", JSON.stringify(currentState))
}, 500);

const onSubmitForm = (event) => {
    event.preventDefault();
    console.log(`Email: ${email.value}`);
    console.log(`Message: ${message.value}`);
    localStorage.removeItem("feedback-form-state");
    email.value = "";
    message.value = "";
}

email.addEventListener("keyup", storeInput);

message.addEventListener("keyup", storeInput);

form.addEventListener("submit", onSubmitForm);

