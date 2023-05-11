import ModalCase from '../components/modal/modalCase/ModalCase.js';
import ModalForm from '../components/modal/modalForm/ModalForm.js';
class TechnicalFunctions {

    
    formRemoveError(input) {
        input.classList.remove('_error');
    }

    addListenerForDataInput() {
        document.addEventListener('click', function(event) {
            let target = event.target;
            if(!target.hasAttribute('data-input')) return;
            target.classList.remove('_error');
        });
    };

    addListenerForTelMask() {
        let inputTels = document.querySelectorAll('.form__input_phone');
        for(let tel of inputTels) {
            tel.addEventListener('keyup', function(event) {
                if(event.key != 'Backspace' && (tel.value.length === 1 || tel.value.length === 5 || tel.value.length === 9 || tel.value.length === 12)) {
                    tel.value += '-'
                }
            })
        }
    }

    addListenerDataClose() {
        document.addEventListener('click', function(event) {
            let target = event.target;
            if(target.dataset.close) {
                ModalForm.close();
                ModalCase.close()
            };
        });
    };

    addListenerForModalForm() {
        let record = document.getElementById('rootModal');
        record.addEventListener('click', function() { // запись на бесплатное занятие через главную страницу
            ModalForm.open(); // открытие модального окна
            ModalForm.sendForm();
            document.addEventListener('keydown', function(event) {
                if(event.code.toLowerCase() == 'escape') {
                    ModalForm.close();
                };
            });
        });
    };

    addListenerForModalCase() {
        let record = document.getElementById('rootModalCase');
        record.addEventListener('click', function() { // запись на бесплатное занятие через главную страницу
            ModalCase.open(); // открытие модального окна
            document.addEventListener('keydown', function(event) {
                if(event.code.toLowerCase() == 'escape') {
                    ModalCase.close();
                };
            });
        });
    };
};

export default new TechnicalFunctions()