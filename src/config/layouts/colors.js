

const colors = {

    'primary':      (light = false) => (light ? '#719DF0' : '#5A8DEE'),
    'secondary':    (light = false) => (light ? '#506B8B' : '#475F7B'),
    'success':      (light = false) => (light ? '#4EDE97' : '#39DA8A'),
    'danger':       (light = false) => (light ? '#FF7575' : '#FF5B5C'),
    'warning':      (light = false) => (light ? '#FDB75A' : '#FDAC41'),
    'info':         (light = false) => (light ? '#00E7E7' : '#00CFDD'),

    'light':        (light = false) => (light ? '#A3AFBD' : '#A3AFBD'),
    'dark':         (light = false) => (light ? '#394CC2' : '#394CC2'),

    'UNKNOW':       (light = false) => (light ? '#FFFFFF' : '#000000')

}



export default colors
