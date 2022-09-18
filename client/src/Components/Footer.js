import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";


const Footer = () => {

    return (
    <Wrapper>
        <Noexit>🎢<Skull>💀</Skull>  Wherever you go, there you are  <Skull>💀</Skull>🎢</Noexit>
    </Wrapper>
    )
};

const Wrapper = styled.div`
    display: flex;
    height: 60px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 15px;
    background-color: black;
`;

const Noexit = styled.span`
font-size: 16px;
color: lightgray;
`

const Skull = styled.span`
font-size: 20px;
/* background-color: black;
border-radius: 50%; */
padding: 5px;
`

export default Footer;



// Link to="/">
//                 <h1>Play again?</h1>
//         </Link>

// could change link to styled NavLink

// const StyledNavLink = styled(NavLink)`
//   border: 1px solid transparent;
//   border-radius: 4px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   font-size: 18px;
//   height: 42px;
//   margin: 0 0 0 8px;
//   padding: 0 14px;
//   width: 100%;
//   text-decoration: none;
//   transition: all ease 400ms;

//   &:disabled {
//     cursor: not-allowed;
//     opacity: 0.5;
//   }

//   &:hover {
//     background: var(--color-alabama-crimson);
//     color: var(--color-selective-yellow);
//     border-color: var(--color-selective-yellow);
//   }
// `;