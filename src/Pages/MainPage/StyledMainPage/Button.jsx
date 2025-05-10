import styled from "styled-components";


const Button = styled.button`
    width: ${prop => prop.width};
    height: ${prop => prop.height};
    outline: none;
    border-radius: ${prop => prop.border};
    border: none;
    background-color: ${prop => prop.bachground};
    color: ${prop => prop.color};
    font-size: 14px;
    font-weight: 700;
    margin-right: ${prop => prop.marginright};
`

export default Button