class TechnicalFunctions {

    // formValidate(className,emailName) {
    //     let error = 0;
    //     let formReq = document.querySelectorAll(`.${className}`);
    //     for(let i = 0; i< formReq.length; i++) {
    //         let input = formReq[i];
    //         this.formRemoveError(input);

    //         if(input.classList.contains(emailName)) {
    //              if(!this.emailTest(input)){
    //                 this.formAddError(input);
    //                 error++;
    //              };
    //         } else {
    //             if(input.value == '') {
    //                 this.formAddError(input);
    //                 error++;
    //             };
    //         };
    //     };
    //     return error;
    // };
    
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
};

export default new TechnicalFunctions()