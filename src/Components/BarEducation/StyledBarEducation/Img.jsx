import styled from "styled-components";


const Img = styled.img`
    width:${prop => prop.width};
    height:${prop => prop.height};
    border-radius:${prop => prop.borderr};
    margin-top:${prop => prop.margintop};
    margin-bottom:${prop => prop.marginbottom};
    margin-left:${prop => prop.marginleft};
    margin-right:${prop => prop.marginright};
`


export default Img