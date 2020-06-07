import styled from "styled-components";

export const ButtonContainer = styled.button`
  text-transform: capitalize;
  font-size: 1.0rem;
  background: transparent;
  border: 0.1rem solid #232528;
  color: #f3f3f3;
  border-radius: 0.5rem;
  padding: 0.2rem 0.5rem;
  cursor: pointer;
  margin: 0.2rem 0.5rem 0.2rem 0;
  transition: all 0.5s ease-in-out;
  &:hover {
    background: #c3c3c3;
    color: #232528;
  }
  &:focus {
    outline: none;
  }
`;