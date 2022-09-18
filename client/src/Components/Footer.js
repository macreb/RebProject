import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";


const Footer = () => {

    return (
    <Wrapper>
        <div>Wherever you go, there you are 💞</div>
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
    background-color: lightgray;
`;

const Text = styled.p`
    font-size: 36px;
    text-align: center;
    margin: 12px 0 0 24px;
`;

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