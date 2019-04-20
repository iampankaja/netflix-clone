import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faCheck } from '@fortawesome/free-solid-svg-icons';

import { YOUTUBE } from '../constatnts/routes';

const Title = styled.h1`
  font-family: 'Cinzel Decorative', cursive;
  font-size: 48px;
  color: white;
`;

const Overview = styled.span`
  font-family: 'Source Sans Pro', sans-serif;
  font-weight: 600;
  color: white;
`;

const Button = styled.button`
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0rem 0.5rem 1rem 0;
  width: 8rem;
  background: rgba(42%, 40%, 40%, 30%);
  color: white;
  border: 2px solid rgba(42%, 40%, 40%, 30%);

  &:hover {
    background: white;
    color: black;
  }
`;

const ShowDetails = ({ name, overview, youtubeKey }) => (
  <div>
    <Title>{name}</Title>
    <Button
      onClick={() => window.open(`${YOUTUBE}${youtubeKey}`, '_blank')}
      rel="noopener"
    >
      <FontAwesomeIcon icon={faPlay} style={{ marginRight: '10px' }} />
      Play
    </Button>
    <Button
      href="https://github.com/styled-components/styled-components"
      target="_blank"
      rel="noopener"
    >
      <FontAwesomeIcon icon={faCheck} style={{ marginRight: '10px' }} />
      My List
    </Button>
    <br />
    <Overview>{overview}</Overview>
  </div>
);

ShowDetails.propTypes = {
  name: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  youtubeKey: PropTypes.string,
};

ShowDetails.defaultProps = {
  youtubeKey: null,
};

export default ShowDetails;
