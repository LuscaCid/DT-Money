import styled from "styled-components";

export const SummaryContainer = styled.section`
  max-width: 1100px;
  margin: -5rem auto 0;
  display : grid ;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  align-items: center;
  padding: 0 1.5rem;
 
  .type {
    font-size: .9rem;
    color: ${({theme}) => theme["gray-300"]};
  }
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1rem;
  }
  .quantity {
    font-size: 1.5rem;
    font-weight: 700;
  }
  
  
`

export const SummaryCard = styled.div`
  width: 100%;
  display : flex ;
  justify-content: space-between;
  flex-direction: column;
  background: ${({theme}) => theme["gray-600"]};
  padding: 1.6rem 1rem;
  height: 124px;
  border-radius: 5px;
  &:last-child{
    background: ${({theme}) => theme["green-700"]};
  }
`
