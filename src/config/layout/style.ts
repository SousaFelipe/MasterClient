import colors from './colors'



const styleConfig = {


    color: (name: String | undefined, light = false) => {
        switch (name) {

            case 'primary':     return colors.primary(light)
            case 'secondary':   return colors.secondary(light)
            case 'success':     return colors.success(light)
            case 'danger':      return colors.danger(light)
            case 'warning':     return colors.warning(light)
            case 'info':        return colors.info(light)

            case 'light':       return colors.light(light)
            case 'dark':        return colors.dark(light)

            case 'bg':          return colors.bg(light)

            default:            return colors.bg(light)

        }
    }


}



export default styleConfig
