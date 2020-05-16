function validation () {
    const button = document.querySelector('.form__btn');
    
    const email = document.querySelector('.form-block__input--email');
    const emailBlock = document.querySelector('.form-block--email');
    const errorEmail = document.querySelector('.error-email');

    const message = document.querySelector('.form-block__input--message');
    const messageBlock = document.querySelector('.form-block--message');
    const errorMessage = document.querySelector('.error-message');

    const name = document.querySelector('.form-block__input--name');
    const nameBlock = document.querySelector('.form-block--name');
    const errorName = document.querySelector('.error-name');
    
    button.addEventListener("click", (e) => {
        

        if (name.value == false) {
            errorName.classList.add("active");
            nameBlock.classList.add("active");
            e.preventDefault();
        } else {
            nameBlock.classList.remove("active");
            errorName.classList.remove("active");
            nameBlock.classList.add("valid");
        }

       

        if (email.validity.valid == false) {
            errorEmail.classList.add("active");
            emailBlock.classList.add("active");
            e.preventDefault();
        } else {
            emailBlock.classList.remove("active");
            errorEmail.classList.remove("active");
            emailBlock.classList.add("valid");
        }

        if (message.value == false) {
            errorMessage.classList.add("active");
            messageBlock.classList.add("active");
            e.preventDefault();
        } else {
            messageBlock.classList.remove("active");
            errorMessage.classList.remove("active");
            messageBlock.classList.add("valid");

        }

    });


};

validation();