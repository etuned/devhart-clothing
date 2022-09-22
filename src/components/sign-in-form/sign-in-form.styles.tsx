import styled from 'styled-components';

export const SignInContainer = styled.div`
  display: flex;
  flex-direction: column;
 
    @media only screen and (min-width: 900px) {
      width: 380px;
      
      h2 {
        margin: 10px 0;
      }
    }
    @media only screen and (max-width: 899px) {
      width: 100%;

      h2 {
        margin: 55px 0;
      }
    }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
`;
