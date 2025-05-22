import styled from "styled-components";




const P = styled.p`
    margin-right:${prop => prop.marginright};
    margin-top: ${prop => prop.margintop};
    margin-left: ${prop => prop.marginleft};
    margin-bottom: ${prop => prop.marginbottom};
    font-size:${prop => prop.font};
    text-align:${prop => prop.text};
    color:${prop => prop.color};
    font-weight: 700;
`


export default P