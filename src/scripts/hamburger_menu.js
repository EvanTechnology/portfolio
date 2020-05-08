function openmainmenu() {
    const menubtn = document.querySelector('.hamburger__menu');
    const menublock = document.querySelector('.menu__list');
    const socialsList = document.querySelector('.socials__list')
    const socials = document.querySelector('.socials');
    const socialblock = document.createElement('li');
    const scroll = document.querySelector('.scroll');
    

    menubtn.addEventListener('click', function() {

        menubtn.classList.toggle('closed');
        scroll.classList.toggle('closed');
        menublock.classList.toggle('active');
        socials.classList.toggle('onmenu');
        if (menubtn.classList.contains('closed')) {
            menublock.appendChild(socialblock);
            socialblock.appendChild(socialsList);
        } else {
            socials.appendChild(socialsList);
            menublock.removeChild(socialblock);
        }
        
    });

    menublock.addEventListener('click', function(event) {

        if (menublock.classList.contains('active') && event.target.classList.contains('header-menu__link')) {
        
        menubtn.classList.toggle('closed');
        scroll.classList.toggle('closed');
        menublock.classList.toggle('active');
        socials.classList.toggle('onmenu');
        if (menubtn.classList.contains('closed')) {
            menublock.appendChild(socialblock);
            socialblock.appendChild(socialsList);
        } else {
            socials.appendChild(socialsList);
            menublock.removeChild(socialblock);
        }
        };

    });
};

openmainmenu();