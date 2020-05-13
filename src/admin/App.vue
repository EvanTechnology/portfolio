<template lang="pug">
  section.about
    header.header
      .header__container.container
        .header__user.user
          .user__avatar
            img(src="../images/content/user.jpg").user__photo
          .user__name Evgenii Konkov
        .header__title Admin panel
        .header__login logout
    nav.menu
      .menu__container.container
        ul.menu__list
          li.menu__item About menu
          li.menu__item My work
          li.menu__item Reviews
    main.main
      .main__container.container
        .main__title-block
          h1.main__title "About me" section
          .main__controls.control
            button.control__btn.btn-add.btn-add--small +
            .control__title Add a new group
        .main__admin-block
          .groups
            ul.groups__list
              li.groups__item
                .group
                  .group__title-line 
                    h2.group__title Workflow
                    .group__cell
                      button.btn-done &#10004
                        //+icon('tick', 'btn-done__image')
                    .group__cell
                      button.btn-del &#10008
                  .group__main-line
                    ul.skills__list
                      li.skills__item.skill
                        .skill__title GIT
                        .skill__number 54
                        .skill__percent %
                        .skill__edit
                          button.btn-edit
                        .skill-remove
                          button.btn-remove
                      li.skills__item.skill
                        .skill__title GIT
                        .skill__number 54
                        .skill__percent %
                        .skill__edit
                          button.btn-edit
                        .skill-remove
                          button.btn-remove
                      li.skills__item.skill
                        .skill__title GIT
                        .skill__number 54
                        .skill__percent %
                        .skill__edit
                          button.btn-edit
                        .skill-remove
                          button.btn-remove
                      li.skills__item.skill
                        .skill__title GIT
                        .skill__number 54
                        .skill__percent %
                        .skill__edit
                          button.btn-edit
                        .skill-remove
                          button.btn-remove
                  .group__last-line.new-skill
                    .new-skill__title New skill
                    .new-skill__number 100
                    .new-skill__percent %
                    .new-skill__add
                      button.btn-add.btn-add--large +



</template>

<style lang="postcss">
  body {
    margin: 0;
  }
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  .container {
    width: 95%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 25px 0px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
  .about {
    color: #a0a0b2;
    background: rgb(246,249,254);
    background: linear-gradient(180deg, rgba(246,249,254,1) 0%, rgba(255,255,255,1) 100%);
  }
  .header {
    background-color: #424267 ;
    //color: #a0a0b2;
  }
  .menu {
    background-color: #fff;
  }
  // HEADER---------------------------------
  .user {
    display: flex;
    align-items: center;
  }
  .user__avatar {
    width: 50px;
    height: 50px;
    overflow: hidden;
    border-radius: 50%;
  }
  .user__photo {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .user__name {
    color: #fff;
    font-size: 18px;
    font-weight: bolder;
    margin-left: 25px;
  }
  .header__title {
    margin-left: 50px;
  }
  .header__login {
    margin-left: auto;
  }
   // MENU--------------------------------------------
  .menu__list {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    
  }
  .menu__item {
    font-size: 18px;
    padding: 25px;
    border-bottom: solid 2px transparent;
    &:hover {
      border-bottom: solid 2px #383bcf;
    };
    &.active {
      color: #383bcf;
    }
  }
  // MAIN- (TITLE LINE)-----------------------------------------
  .main__container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
  .main__title-block {
    display: flex;
    align-items: center;
  }
  .main__title {
    font-size: 24px;
    font-weight: bolder;
    color: #414c63;
  }
  .main__controls {
    margin-left: 50px;
  }
  .control {
    display: flex;
    align-items: center;
  }
  .btn-add {
    color: #fff;
    background-color: #383bcf;
    font-size: 18px;
    font-weight: bold;
    border: solid 1px #383bcf;
    border-radius: 50%;
    &--small {
      width: 26px;
      height: 26px;
    }
    &--large {
      font-size: 26px;
      width: 40px;
      height: 40px;
    }
  }
  .control__title {
    margin-left: 25px;
    color: #383bcf;
    font-size: 18px;
    font-weight: bolder;
  }
  // -MAIN--(GROUPS-LIST)---------------------------
  .main__admin-block {
    width: 100%;
  }
  .groups__list {
    display: flex;
    flex-wrap: wrap;
  }
  .groups__item {
    width: 45%;
    margin-right: 10%;
    &:nth-child(2n) {
      margin-right: 0;
    }
  }
  //- GROUP--------------------------------------
  .group {
    box-shadow: #f4f4f5 1px 1px 10px 5px;
    border: solid 1px #f4f4f5;
    display: grid;
    grid-template-areas: "title"
                          "skills"
                          "new";
    grid-template-rows: 100px 1fr 100px;
  }
  .group__title-line {
    grid-area: title;
    display: grid;
    width: 100%;
    align-items: center;
    font-weight: bolder;
    grid-template-columns: 1fr 50px 50px;
  }
  .group__title {
    margin: 0;
    margin-left: 25px;
    padding-bottom: 25px;
    width: 75%;
    border-bottom: solid 1px #000;
  }
  .group__main-line {
    grid-area: skills;
  }
  .skill {
    padding-left: 25px;
    font-size: 18px;
    display: grid;
    grid-template-columns: 1fr 50px 100px 50px 50px;
  }
  .group__last-line {
    grid-area: new;
    display: grid;
    align-items: center;
    grid-template-columns: 1fr 50px 50px 100px;
  }
  .new-skill__title {
    width: 75%;
    margin-left: auto;
    margin-right: 25px;
    padding-bottom: 15px;
    border-bottom: solid 1px black;
  }
  .new-skill__number, .new-skill__percent {
    padding-bottom: 15px;
    border-bottom: solid 1px black;
    text-align: center;
  }
  .new-skill__add {
    margin: 0 auto;
  }
  .btn-done {
    color: teal;
    background-color: transparent;
    border-color: transparent;
  }
  .btn-del {
    color: crimson;
    background-color: transparent;
    border-color: transparent;
  }
  .btn-remove {
    width: 25px;
    height: 25px;
    border-color: transparent;
    background: svg-load('trash.svg', fill=$text-color, width=100%, height=100%) no-repeat;
  }
  .btn-edit {
    width: 25px;
    height: 25px;
    border-color: transparent;
    background: svg-load('pencil.svg', fill=$text-color, width=100%, height=100%);
  }
</style>
