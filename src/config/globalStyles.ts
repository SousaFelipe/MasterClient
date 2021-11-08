


const globalStyles = function (props: { size: String }) {
    return {

        sm: props.size == 'sm',
        md: props.size == 'md',
        lg: props.size == 'lg',

    }
}



export default globalStyles
