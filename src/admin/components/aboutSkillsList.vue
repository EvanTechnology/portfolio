<template lang="pug">
    ul.skills__list
        li.skills__item(v-for="skill in category.skills" :key="skill.id")
            skillComponent(
                :skill = "skill"
            )
</template>

<script>
import skillComponent from './aboutSkillsItem'
    export default {
        components: {
            skillComponent
        },
        props: {
            category: Object
        },
        data() {
            return {
                editMode: false,
            }
        },
        methods: {
        },
    }
</script>

