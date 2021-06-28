import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Text = styled.span`
    font-size: 30px;
`;

export const StrongText = styled.p`
    font-weight: bolder;
    display: inline;
`;

export const LogOut = styled.button`
    width: 100px;
    height: 40px;
    margin-top: 20px;
    border: none;
    border-radius: ${({ theme }) => theme.variables.borderRadius};
    background-color: ${({ theme }) => theme.colors.gray};
    `;