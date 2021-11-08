<template>

    <div id="home">
        <Button color="secondary" size="sm" value="Small"/>
        <Button color="primary" size="md" value="Default"/>
        <Button color="info" size="lg" value="Large"/>
    </div>

</template>





<script lang="ts">
    import { defineComponent } from 'vue'

    import Button from '@/components/molecule/Button.vue'



    export default defineComponent({
        name: 'Home',

        components: {
            Button
        },

        methods: {
        }
    })
</script>





<style>

#home {
    width:  100%;
    height: 100%;
}

</style>
