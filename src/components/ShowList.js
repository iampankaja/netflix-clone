import React from 'react';
import styled from 'styled-components';

const ShowCard = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 20%;
`;

const ShowContainer = styled.div`
  padding: 2px 16px;
`;

const ShowList = () => (
  <ShowCard>
    <ShowContainer>List</ShowContainer>
  </ShowCard>
);

export default ShowList;
