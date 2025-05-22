import styled from "styled-components";


const DivBox = styled.div`
    width:${prop => prop.width};
    height:${prop => prop.height};
    background-color:${prop => prop.background};
    border-radius:${prop => prop.border}
    border:${prop => prop.borderbox};
    margin-right:${prop => prop.marginright};
    margin-top: ${prop => prop.margintop};
    margin-left: ${prop => prop.marginleft};
    margin-bottom: ${prop => prop.marginbottom};
`


export default DivBox