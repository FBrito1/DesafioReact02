import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1;
  margin-bottom: 10px;
  margin-top: 10px;
`;

export const Repository = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 5px;
  width: 100%;
  min-width: 100%;
  overflow: hidden;

  img {
    width: 45px;
    height: 45px;
    margin: 10px;
  }

  &:before {

  }


`;

export const Heading = styled.div`
  display: flex;
  flex-direction: column;

  strong {
    margin-bottom: 5px;
    font-size: 24px;
    margin-top: 10px;
  }

  small {
    font-size: 14px;
    color: #666;
  }
`;
