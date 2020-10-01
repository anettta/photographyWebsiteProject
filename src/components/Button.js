import styled from "styled-components";

export const ButtonContainer = styled.button`

display: inline-block;
text-decoration: none;
letter-spacing: var(--mainSpacing);
color: var(--mainBlack);
background: var(--primaryColor);
padding: 0.4rem 0.9rem;
border: 3px solid var(--primaryColor);
transition: var(--mainTransition);
text-transform: uppercase;
cursor: pointer;
position: absolute;
margin-right: 2rem;
right: 0;
float:left;
&:hover {
    background: transparent;
    color: var(--primaryColor);
}
`;