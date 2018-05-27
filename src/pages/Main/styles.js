import styled from 'styled-components';

export const Container = styled.div`
display: flex;
flex-direction: row;
`;

export const SidePanel = styled.div`
display: flex;
flex-direction: column;
background-color: #FFF;
padding: 20px;
width: 320px;
height: 100%;
min-height: 100%;
box-shadow: 3px 0px 10px -1px rgba(204,204,204,1);

hr {
  margin-top: 20px;
  border: 0;
  height: 1px;
  background: #EEE;
}
`;

export const Form = styled.form`
display: flex;

input {
  flex: 1;
  background-color: #EEE;
  height: 55px;
  font-size: 18px;
  color: #444;
  border: 0;
  border-radius: 3px;
  width: 80%;
  padding: 5px;
}

button {
  background-color: #59EA9A;
  color: #FFF;
  width: 55px;
  height: 55px;
  padding: 0 20px;
  margin-left: 10px;
  border: 0;
  font-size: 20px;
  font-weight: bold;
  border-radius: 3px;

  &:hover {
    background: #52D89f;
  }



}

`;


// border: ${props => (props.withError ? '2px solid #F00' : 0)};
