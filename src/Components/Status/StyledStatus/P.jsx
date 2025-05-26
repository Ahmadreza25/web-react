import styled from "styled-components";



const P = styled.p`
    color:${prop => prop.color};
    margin-top:${prop => prop.margintop};
    margin-left:${prop => prop.marginleft};
    margin-right: ${prop => prop.marginright};
    font-size:${prop => prop.font};
    font-weight: 700;

`

export default P