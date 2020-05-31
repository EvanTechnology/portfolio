<template lang="pug">
    .entry
        img(src='../../images/content/bg_last_page.jpg').entry__bg
        button(
            v-if= "authorizationMode"
            type="button"
            @click.prevent ="authorizationMode = false"
            ).authorization-btn Authorization
        .entry__window(v-else)
          button(
              type="button" 
              @click.prevent ="authorizationMode = true"
              ).entry__btn-close
            span.entry__btn-element
          .entry__title Authorization
          form.entry__form(@submit.prevent="loginUser")
            .entry__form-row.entry__form-row--name
              .entry__form-row-title Name
              input(
                type="text" 
                placeholder= "Terminator" 
                v-model="user.name"
                ).entry__form-input
            .entry__form-row.entry__form-row--password
              .entry__form-row-title Password
              input(
                type="password" 
                placeholder="*******" 
                v-model="user.password"
                ).entry__form-input
            .entry__form-row--btn
              button(type='submit').entry__submit-btn Login
            .error {{errorMessage}}
                //pre {{errorMessage}}
</template>

<script>
    import $axios from "../requests";
    //const baseUrl = "https://webdev-api.loftschool.com";
    //const regeneratorRuntime = require("regenerator-runtime");
    //const token = localStorage.getItem('token');
    export default {
        name: 'login',
        data() {
            return {
                user: {
                    name: "",
                    password: "",
                },
                errorMessage: "",
                authorizationMode: true,
                
            }
        },
        methods: {
            async loginUser() {
                try {
                    this.errorMessage = "";
                    const response = await $axios.post('/login', this.user);
                    const token = response.data.token;
                    localStorage.setItem('token', token);
                    $axios.defaults.headers['Authorization'] =`Bearer ${token}`;
                    this.$router.replace("/");
                } catch(error) {
                    console.log(error.response.data.message);
                    console.log(error.response.data.error);
                    console.log(error.response.data.errors);
                    this.errorMessage = error.response.data.message || error.response.data.error;
                    console.log(this.errorMessage);
                }
                //this.errorMessage = "";
                
            }
        }
    }
</script>

<style lang="postcss" scoped>
    @mixin phones() {
        @media screen and (max-width: 480px) {
        @content;
        }
    }
    .entry {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #000000;
        height: 100vh;
    }
    .entry__bg {
        width: 100%;
        height: 100%;
        object-fit: cover;
        opacity: 0.5;
    }
    .authorization-btn {
        position: absolute;
        //width: 50%;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        padding: 15px 25px;
        text-transform: uppercase;
        font-size: 24px;
        color: #ffffff;
        border: solid 1px #ff9a00;
        background: linear-gradient(90deg, rgba(255,138,0,1) 0%, rgba(255,157,0,1) 100%);
        
    }
    .entry__window {
        position: absolute;
        width: 50%;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        max-width: 700px;
        min-width: 300px;
        background-color: #ffffff;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .entry__title {
        font-weight: bold;
        font-size: 24px;
        margin-top: 50px;
        margin-bottom: 30px;
    }
    .entry__form {
        display: flex;
        flex-direction: column;
        width: 75%;
        @include phones {
            width: 95%;
        }
    }
    .entry__form-row {
        padding-bottom: 15px;
        margin-bottom: 25px;
        padding-left: 50px;
        border-bottom: solid 1px #636363;
        &--btn {
            display: flex;
            justify-content: center;
        }
        position: relative;
        &:focus-within {
            border-bottom: 1px solid #ff9a00;
        }
        &:before {
            content: "";
            display: inline-block;
            position: absolute;
            width: 30px;
            height: 30px;
            top: 40px;
            left: 0;
        }
        &--name {
            &:before {
                background: svg-load('user.svg', fill= #636363, width=100%, height=100%);
            }
        }
        &--password {
            &:before {
                background: svg-load('key.svg', fill=#636363, width=100%, height=100%);
            }
        }
    }
    .entry__form-row--name:focus-within:before {
        background: svg-load('user.svg', fill=#ff9a00, width=100%, height=100%);
    }
    .entry__form-row--password:focus-within:before {
        background: svg-load('key.svg', fill=#ff9a00, width=100%, height=100%);
    }
    .entry__form-row-title {
        margin-bottom: 15px;
    }
    .entry__form-input {
        color: #000000;
        font-size: 18px;
    }
    .entry__submit-btn {
        color: #ffffff;
        background: linear-gradient(90deg, rgba(255,138,0,1) 0%, rgba(255,157,0,1) 100%);
        //background: linear-gradient(90deg, rgba(33,78,219,1) 0%, rgba(63,53,203,1) 100%);
        //background-color: $orange;
        text-transform: uppercase;
        padding: 20px 115px;
        font-weight: bold;
        font-size: 18px;
        margin: 0 auto;
        margin-bottom: 50px;
        border: solid 3px #ff9a00;
        &:hover {
            background: linear-gradient(90deg, rgba(255,138,0,1) 0%, rgba(255,157,0,1) 100%);
            //background: linear-gradient(90deg, rgba(33,78,219,1) 0%, rgba(63,53,203,1) 100%);
            //background:  linear-gradient(90deg, rgba(255,138,0,1) 0%, rgba(255,157,0,1) 100%);
        }
        &:focus {
            border-color: rgba(255, 102, 0, 0.326);
        }
    }
    .entry__btn-close {
        position: absolute;
        top: 25px;
        right: 50px;
        border: none;
        height: 1.5625rem;
        background-color: transparent;
    }
    .entry__btn-element {
        display: block;
        //&,
        &::before,
        &::after {
            background-color: #636363;
            width: 25px;
            height: 4px;
            border-radius: 3px;
            transition: 0.5s;
        }
        &::before,
        &::after {
            content: '';
            display: block;
            position: absolute;

        }
        &::before {
            top: 50%;
            transform: rotate(45deg);

        }
        &::after {
            top: 50%;
            transform: rotate(-45deg);
        }
        height: 0;

    }
    .error {
        position: absolute;
        width: 300px;
        height: 50px;
        top: -25%;
        color: red;
        font-size: 20px;
        text-align: center;
        left: 50%;
        transform: translateX(-50%);
    }

</style>