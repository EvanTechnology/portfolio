<template lang="pug">
    header.header
      .header__container
        .header__user.user
          .user__avatar
            img(src="../../images/content/user.jpg").user__photo
          .user__name Evgenii Konkov
        .header__title Admin panel
        button.header__login Log out
  
</template>

<script>
export default {

}
</script>
  
<style lang="postcss" scoped>
   .header {
    background: rgb(62,62,89);
    background: linear-gradient(90deg, rgba(62,62,89,1) 0%, rgba(69,69,115,1) 100%);
   }
  .header__container {
    margin: 0 auto;
    padding: 25px 0px;
    width: 95%;
    max-width: 1200px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
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
    cursor: pointer;
    background-color: transparent;
    border: solid 1px transparent;
  }
</style>