import Form from "./components/form/Form.js";
import ModalForm from "./components/modal/modalForm/ModalForm.js";
import Questions from "./components/questions/Questions.js";
import SecondForm from "./components/secondForm/SecondForm.js";
import TechnicalFunctions from "./technicalFunctions/TechnicalFunctions.js";
document.addEventListener('DOMContentLoaded', () => {
    Form.sendForm();
    SecondForm.sendForm();
    Questions.addListener();
    TechnicalFunctions.addListenerDataClose();
    TechnicalFunctions.addListenerForModalForm();
    TechnicalFunctions.addListenerForModalCase();
})

