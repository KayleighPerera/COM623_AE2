import styled from "styled-components";

const StyledInput = styled.input`
width: 100%;
height: 44px;
border: 1px solid ${({ theme }) => theme.colors.darkShade[10]}};
box-sizing: border-box;
border-radius: 4px;
font-size: 20px;
margin-bottom: 2%;
`;

export default StyledInput;
