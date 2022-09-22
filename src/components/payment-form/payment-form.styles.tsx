import styled from 'styled-components';
import Button from '../button/button.component';

export const PaymentFormContainer = styled.div`
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const FormContainer = styled.form`
  height: 100px;
    @media screen and (max-width: 800px) {
    min-width: 500px;
  }
  @media screen and (min-width: 400px) {
    min-width: 300px;
  }

`;

export const PaymentButton = styled(Button)`
  margin-left: auto;
  margin-top: 30px;
`;
