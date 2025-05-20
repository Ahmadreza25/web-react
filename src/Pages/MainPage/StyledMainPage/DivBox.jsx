import styled from "styled-components";


const DivBox = styled.div`
    width:${prop => prop.width};
    height:${prop => prop.height};
    background-color:${prop => prop.background};
    border-radius:${prop => prop.border}
`


export default DivBox