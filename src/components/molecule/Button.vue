<template>
    <button v-bind:class="styleObject">
        {{ value }}
    </button>
</template>





<script lang="ts">
    import { defineComponent } from 'vue'


    export default defineComponent({
        name: 'Button',

        props: {
            value: String,
            color: String,
            size: String,
        },

        data () {
            return {
                styleObject: {

                    sm: this.size == 'sm',
                    md: this.size == 'md',
                    lg: this.size == 'lg',

                    primary:    this.color == 'primary',
                    secondary:  this.color == 'secondary'
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
        font-weight:        500;
        cursor:             pointer;
    }

    button.sm {
        padding:        7px 12px;
        border-radius:  4px;
        font-size:      0.75em;
    }

    button.md {
        padding:        8px 16px;
        border-radius:  4px;
        font-size:      1.00em;
    }

    button.lg {
        padding:        16px 28px;
        border-radius:  8px;
        font-size:      1.15em;
    }

    button:hover {
        transition: background-color 0.2s ease-in, color 0.2s ease-in;
    }

</style>
