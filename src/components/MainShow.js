import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import ShowDetails from './ShowDetails';

const MainShowDiv = styled.div`
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;
  width: 100vw;
  height: 100vh;
`;

const Show = styled.div`
  position: absolute;
  top: 20%;
  width: 30%;
  left: 10%;
`;

const MainShow = ({ name, overview, youtubeKey }) => (
  <MainShowDiv
    style={{
      backgroundImage:
        "url('https://movieposterhd.com/wp-content/uploads/2019/03/Game-of-Thrones-Season-8-Full-Cast-Poster-HD.jpg')",
    }}
  >
    <Show>
      <ShowDetails name={name} overview={overview} youtubeKey={youtubeKey} />
    </Show>
  </MainShowDiv>
);

MainShow.propTypes = {
  name: PropTypes.string,
  overview: PropTypes.string,
  youtubeKey: PropTypes.string,
};

MainShow.defaultProps = {
  name: null,
  overview: null,
  youtubeKey: null,
};

export default MainShow;
