import styled from "styled-components";




const P = styled.p`
    font-size:${prop => prop.fontsize};
    font-weight:${prop => prop.fontweight};
    color:${prop => prop.color};
`


export default P