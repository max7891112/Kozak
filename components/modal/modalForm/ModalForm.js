import close from './img/Vector.svg';
import TechnicalFunctions from '../../../technicalFunctions/TechnicalFunctions.js';
import {ROOT_MODAL} from '../../../constants/_root.js';
class ModalForm{
    render() {
        let htmlContent = ` 
            <div class="modal" id="modal-container" data-close="true">
                <div class="modal__body _container" >
                    <img src="${close}" alt="close" class="modal__close" data-close="true">
                    <div class="modal__container">
                        <h3 class="modal__title">Заполните форму и мы проконсультируем вас бесплатно</h3>
                        <form action="#" class="modal__form" id="form-free-lesson">
                            <input class="form__input form__input_name _thirdModal-req" placeholder="Имя" data-input="true">
                            <input class="form__input form__input_phone _thirdModal-req form__input_phone" placeholder="+7 (___)-___-__-__" type="tel" data-input="true" maxlength="15">
                            <button class="modal__button _order-button">Заказать консультацию</button>
                        </form>
                    </div>
                </div>
            </div>
            `;
                const htmlWrapper = `
                <div class="modal__wrapper">
                    ${htmlContent}
                </div>
            `;
    
            ROOT_MODAL.innerHTML = htmlWrapper;
    }
    
    open() {
        this.render();
        document.querySelector('.modal__body').classList.add('open'); // анимации появления окна
        document.querySelector('.modal').classList.add('open');
        this.addListenerForTelMaskModal()
    }

    close() {   
        let modal = document.querySelector('.modal');
    
        let modalWindow = document.querySelector('.modal__body');
        if(modal) {
            modalWindow.classList.remove('open');
            modalWindow.parentElement.classList.remove('open');
            modalWindow.classList.add('disappearance');
            modalWindow.parentElement.classList.add('disappearance');
            setTimeout(() => {
                modalWindow.classList.remove('disappearance');
                modalWindow.parentElement.classList.remove('disappearance');
                ROOT_MODAL.innerHTML = ''
            },300);
        };
    }; 

    addListenerForTelMaskModal() {
        let tel = document.querySelector('.form__input_phone');
            tel.addEventListener('keyup', function(event) {
                if(event.key != 'Backspace' && (tel.value.length === 1 || tel.value.length === 5 || tel.value.length === 9 || tel.value.length === 12)) {
                tel.value += '-'
            }
        }) 
    }


    sendForm() {
        
            let form = document.getElementById('form-free-lesson');
            let container = document.getElementById('modal-container')

            form.addEventListener('submit', formSend);

            function formSend (event){  // async
                event.preventDefault();

                let error = formValidate(form)

                let formData = new FormData(form);

                if(error == 0) {
                    container.classList.add('_sending');
                    form.reset();
   
                    setTimeout(() => {
                        let response = fetch('sendmail.php', { // await
                            method: 'POST',
                            body: formData
                        });
                        if(response.ok) {
                            let result = response.json(); // await
                            alert(result.message);
                            form.reset();
                            container.classList.remove('_sending')
                        } else {
                            alert('Ошибка отправки данных на сервер')
                            container.classList.remove('_sending');
                            
                            let modal = document.querySelector('.modal');  // дублирование кода
                            let modalWindow = document.querySelector('.modal__body');
                            if(modal) {
                                modalWindow.classList.remove('open');
                                modalWindow.parentElement.classList.remove('open');
                                modalWindow.classList.add('disappearance');
                                modalWindow.parentElement.classList.add('disappearance');
                                setTimeout(() => {
                                    modalWindow.classList.remove('disappearance');
                                    modalWindow.parentElement.classList.remove('disappearance');
                                    ROOT_MODAL.innerHTML = ''
                                },300);
                            }; // дублирование кода

                        }
                    },1000)
                } else {
                    alert('Заполните обязательные поля')
                }
            }

            function formValidate() {
                let error = 0;
                let formReq = document.querySelectorAll('._thirdModal-req')
                for(let i = 0; i< formReq.length; i++) {
                    let input = formReq[i];
                    TechnicalFunctions.formRemoveError(input);
                    if(input.value == '') {
                        formAddError(input);
                        error++;
                    }
                    
                }
                return error;
            }
            function formAddError(input) {
                input.classList.add('_error')
                if(input.placeholder == 'Имя' || input.placeholder == 'Введите имя') {
                    input.placeholder = 'Введите имя';
                } else if (input.placeholder == 'Телефон' || input.placeholder == 'Введите номер телефона') {
                    input.placeholder = 'Введите номер телефона';
                }
            }
    }
}
export default new ModalForm()