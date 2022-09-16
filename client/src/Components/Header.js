import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";


const Header = () => {
    
    // const quizResult = sessionStorage.getItem("result");

    return (
        
        <Wrapper>
        <Link to="/">
            <>
            <h1>So You Want to Escape Your Life</h1>
            </>
        </Link>
        </Wrapper>
    );
};

const Wrapper = styled.header`
    display: flex;
    height: 110px;
`;

export default Header;



// could add a link to the results or comments...

    //   <Nav>
    //         <>
    //         {(!result)
    //         ? <></>
    //         : <StyledNavLink to="/feelings">Reservation</StyledNavLink>
    //         }
    //         </>
    //     </Nav>