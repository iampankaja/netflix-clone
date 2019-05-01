import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import ShowCard from './ShowCard';

const List = styled.div`
  overflow: hidden;
`;

const ShowList = ({ type, shows }) => (
  <>
    <div>
      <h3>{type}</h3>
    </div>
    <List>
      {shows !== undefined
        ? shows.results.map(show => (
            <ShowCard name={show.name} imageUrl={show.backdrop_path} />
          ))
        : ''}
    </List>
  </>
);

ShowList.propTypes = {
  type: PropTypes.string,
  shows: PropTypes.shape,
};

ShowList.defaultProps = {
  type: '',
  shows: undefined,
};

export default ShowList;
