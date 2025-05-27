import styled from "styled-components";



const Div = styled.div`
    width:${prop => prop.width};
    height:${prop => prop.height};
    margin-top:${prop => prop.margintop};
    margin-bottom:${prop => prop.marginbottom};
    margin-left:${prop => prop.marginleft};
    margin-right:${prop => prop.marginright};
`

export default Div