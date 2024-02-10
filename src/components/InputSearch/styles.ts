import styled from "styled-components";

export const InputContainer = styled.form`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto 2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between; 
  align-items: center;
  padding: 0 1.5rem;
  gap: 1rem;
  margin-top: 4rem;
`

export const Input = styled.input`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 1.2rem 1rem;
  background : ${({theme}) => theme["gray-900"]};
  color: ${({theme}) => theme["gray-300"]};

  border: none;
  border-radius: 5px;
  outline: none;
  &:focus{
    border: none;
    box-shadow: 0 0 0 2px ${({theme}) => theme["green-500"]};
  }
`

export const ButtonSearch = styled.button`
  background: none;
  border: 1px solid ${({theme}) => theme["green-500"]};
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  gap: 1rem;
  color: ${({theme}) => theme["gray-100"]};
  padding: 1rem;
  transition: background 0.2s;
  &:hover{
    background: ${({theme}) => theme["green-500"]};
    fill: ${({theme}) => theme["gray-100"]};
  }
`