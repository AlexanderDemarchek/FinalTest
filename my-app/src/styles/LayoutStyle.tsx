import styled from "styled-components";

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