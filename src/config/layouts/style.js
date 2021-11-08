import colors from './colors'



const style = {


    color: (name, light = false) => (
        (colors[name] || colors['UNKNOW'])(light)
    )


}



export default style
