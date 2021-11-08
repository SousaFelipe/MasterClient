<template>
    <button v-bind:class="styleObject" @click="$emit('onClick')">
        {{ value }}
    </button>
</template>





<script lang="ts">
    import { defineComponent } from 'vue'

    import styleConfig from '../../config/layout/style'


    export default defineComponent({
        name: 'Button',

        props: {
            value: String,
            color: String,
            bg: String,
            glow: Boolean,
            size: String
        },

        data () {
            return {

                styleObject: {

                    sm: this.size == 'sm',
                    md: this.size == 'md',
                    lg: this.size == 'lg',

                    glow: this.glow == true,

                    outline: this.bg == 'outline'
                },

                background: {
                    dark:   styleConfig.color(this.color),
                    light:  styleConfig.color(this.color, true)
                }
            }
        },
    })
</script>





<style scoped>

    button {
        display:            flex;
        justify-content:    center;
        align-items:        center;
        border:             none;
        font-family:        'Montserrat';
        font-weight:        400;
        cursor:             pointer;
        transition:         background-color 100ms ease-in;
    }

    button:not(.outline) {
        color:              white;
        background-color:   v-bind('background.dark');
    }

    button.outline {
        background-color:   transparent !important;
        border:             1px solid v-bind('background.dark');
        color:              v-bind('background.dark');
    }

    button:not(.outline):not(.glow) {
        -webkit-box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.5);
        box-shadow:         1px 1px 5px 0px rgba(0, 0, 0, 0.5);
    }

    button.glow {
        -webkit-box-shadow: 1px 1px 5px 0px v-bind('background.dark');
        box-shadow:         1px 1px 5px 0px v-bind('background.dark');
    }

    button:hover {
        background-color: v-bind('background.light');
    }

    button.sm {
        height:         30px;
        padding:        0px 12px;
        border-radius:  4px;
        font-size:      11px;
    }

    button.md {
        height:         38px;
        padding:        0px 16px;
        border-radius:  4px;
        font-size:      13px;
    }

    button.lg {
        height:         48px;
        padding:        0px 28px;
        border-radius:  4px;
        font-size:      18px;
    }

</style>
