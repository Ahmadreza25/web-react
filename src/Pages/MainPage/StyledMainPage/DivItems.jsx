import styled from "styled-components";


const DivItems = styled.div`
    display: flex;
    align-items: center;
    justify-content:${prop => prop.justify};
    margin-left:${prop => prop.marginleft};
`

export default DivItems