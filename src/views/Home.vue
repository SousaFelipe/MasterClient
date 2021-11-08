<template>

    <div id="home">
        <Button color="primary" size="sm" value="Primário"/>
        <Button color="primary" size="md" value="Primário"/>
        <Button color="primary" size="lg" value="Primário"/>
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
    })
</script>





<style>

#home {
    width:  100%;
    height: 100%;
}

</style>
