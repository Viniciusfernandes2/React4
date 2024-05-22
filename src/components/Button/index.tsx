import styled from "styled-components"
import { ButtonProps } from "../../types";

export default function Button ({children, action}:ButtonProps){
    return <ButtonSld onClick={action}>{children}</ButtonSld>
}
export const ButtonSld = styled.button`
    display: flex;
    padding: 10px 20px;
    background-color: ${({theme}) => theme.button.bg };
    color: ${({theme}) => theme.button.text };
    border: none;
    margin-left: 5px;
    cursor: pointer;
    border-radius: 5px;
    
    &:hover {
        background-color: ${({theme}) => theme.button.bgHover };
    }
`;