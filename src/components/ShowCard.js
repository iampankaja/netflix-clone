import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { SHOW_IMAGE_BASE } from '../constatnts/other';

const Card = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 20%;
`;

const ShowCard = ({ name, imageUrl }) => (
  <>
    <Card>
      <img src={`${SHOW_IMAGE_BASE}/${imageUrl}`} alt={name} />
      <div>{name}</div>
    </Card>
  </>
);

ShowCard.propTypes = {
  name: PropTypes.string,
  imageUrl: PropTypes.string,
};

ShowCard.defaultProps = {
  name: '',
  imageUrl: '',
};

export default ShowCard;
