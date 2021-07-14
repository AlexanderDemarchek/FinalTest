import styled from "styled-components";
import "../assets/Gilroy-UltraLight.woff"

const Layout = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    align-items: center;
    justify-content: center;
    
    h1{
      position: absolute;
      top: 20px;
    }
`;

export default Layout;