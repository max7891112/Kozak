import Form from "./components/form/Form.js";
import Questions from "./components/questions/Questions.js";
import SecondForm from "./components/secondForm/SecondForm.js";
document.addEventListener('DOMContentLoaded', () => {
    Form.sendForm();
    SecondForm.sendForm();
    Questions.addListener();
})

