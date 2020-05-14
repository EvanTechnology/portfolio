<template lang="pug">
    header.header
      .header__container.container
        .header__user.user
          .user__avatar
            img(src="../../images/content/user.jpg").user__photo
          .user__name Evgenii Konkov
        .header__title Admin panel
        .header__login Log out
  
</template>

<script>
export default {

}
</script>
  
<style>
   .header {
    background: rgb(62,62,89);
    background: linear-gradient(90deg, rgba(62,62,89,1) 0%, rgba(69,69,115,1) 100%);
  }
  .menu {
    background-color: #fff;
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
  }
</style>