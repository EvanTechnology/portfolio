<template lang="pug">
    .tags
        span.tag-name {{tag}}
        button(type="button" @click.prevent="$emit('removeTag', tag)" ).btn-delete-tag &#10006

  
</template>

<script>
export default {
    props: {
        tag: String
    }
}
</script>

<style lang= "postcss" scoped>
    .btn-delete-tag {
        border: none;
        display: inline-block;
        background-color: transparent;
    }


</style>