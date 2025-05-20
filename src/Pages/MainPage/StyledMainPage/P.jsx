import styled from "styled-components";



const P = styled.p`
    color:${prop => prop.color};
    margin-top:${prop => prop.margintop};
    margin-left:${prop => prop.marginleft};
    font-size:15px;
    font-weight: 500;

`

export default P