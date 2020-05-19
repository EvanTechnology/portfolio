function orderform() {
    const form = document.querySelector('.form');
    const sendBtn = document.querySelector('.form__btn');
    const mainbody = document.querySelector('body');
    //const activeWindow = document.querySelector('.maincontent');

    const modal = document.createElement('div');
    const modalText = document.createElement('p');
    const modalBtn = document.createElement('button');
    const modalBtnElement = document.createElement('span');

    modal.classList.add('response');
    modalText.classList.add('modal__name');
    modalBtnElement.classList.add('menu-close-btn__item');
    modalBtn.classList.add('menu-close-btn');

    
    modal.appendChild(modalText);
    modal.appendChild(modalBtn);
    modalBtn.appendChild(modalBtnElement);

    let formData = new FormData(form);
    const url = 'https://webdev-api.loftschool.com/sendmail';
    
       
        
        formData.set('name', form.elements.name.value );
        formData.set('phone', form.elements.email.value );
        formData.set('comment', form.elements.message.value );
        formData.set('to', 'evgeniikonkov1@gmail.com');


        fetch(url, {method: 'POST', body: formData})
        .then(response => response.json())
        .then(response => {
            if (response.status == 1) {
                modalText.innerText = "Thank you";
            } else {
                modalText.innerText = "Oops... something goes wrong. Please, repeat."
            }
            form.appendChild(modal);
            mainbody.classList.add('blocked');
        });
        
        
    
    modal.addEventListener('click', e=> {
        if (e.target.classList.contains('menu-close-btn__item')) {
           form.removeChild(modal);
           mainbody.classList.remove('blocked');
        }
    });
    
    
};


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
        let result = true

        if (name.value == false) {
            errorName.classList.add("active");
            nameBlock.classList.add("active");
            result = false
            e.preventDefault();
        } else {
            nameBlock.classList.remove("active");
            errorName.classList.remove("active");
            nameBlock.classList.add("valid");
        }

       

        if (email.validity.valid == false) {
            errorEmail.classList.add("active");
            emailBlock.classList.add("active");
            result = false
            e.preventDefault();
        } else {
            emailBlock.classList.remove("active");
            errorEmail.classList.remove("active");
            emailBlock.classList.add("valid");
        }

        if (message.value == false) {
            errorMessage.classList.add("active");
            messageBlock.classList.add("active");
            result = false
            e.preventDefault();
        } else {
            messageBlock.classList.remove("active");
            errorMessage.classList.remove("active");
            messageBlock.classList.add("valid");

        }

        if (result) {
            console.log("all done");
            e.preventDefault();
            orderform();
        }

    });


};

validation();