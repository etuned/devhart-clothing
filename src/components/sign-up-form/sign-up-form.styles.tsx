import styled from 'styled-components';

export const SignUpContainer = styled.div`
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
