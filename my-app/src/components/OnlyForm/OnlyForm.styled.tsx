import styled from "styled-components";

interface IInput {
    inputError?: boolean;
}


export const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  width: 100%;
  margin: 40px auto;
`;

export const FormControl = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;


export const Label = styled.span`
  font-size: 14px;
  margin-bottom: 10px;
  margin-left: 5px;
`;

export const Input = styled.input<IInput>`
  height: 40px;
  padding: 0 20px;
  border: none;
  transition: border 0.3s;
  border-radius: ${({ theme }) => theme.variables.borderRadius};
  outline: none;
  background-color: ${({ theme }) => theme.colors.gray};
  
  &:hover,
  &:focus {
    outline: none;
  }
`;

export const InputError = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.red};
  margin-top: 10px;
`;

export const Button = styled.button<{ disabled?: boolean }>`
  height: 40px;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.purple};
  border-radius: ${({ theme }) => theme.variables.borderRadius};
  opacity: ${({ disabled }) => disabled ? 0.5 : 1};
  border: none;
  cursor: pointer;
`;

export const LabelCheckbox = styled.label`
  display: flex;
  margin-bottom: 20px;
`;

export const InputCheckbox = styled.input`
  display: none;
`;

export const CustomCheckboxWrapper = styled.div`
  width: 15px;
  height: 15px;
  border: solid ${({ theme }) => theme.colors.black} 1px;
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 5px;
`;

export const CustomCheckbox = styled.div`
  width: 11px;
  height: 11px;
  background-color: ${({ theme }) => theme.colors.purple};
  border-radius: 2px;
`;





