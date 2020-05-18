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
        formData.set('email', form.elements.email.value );
        formData.set('message', form.elements.message.value );
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

orderform();