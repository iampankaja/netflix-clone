import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner';
import styled from 'styled-components';

import ShowDetails from './ShowDetails';

import { fetchMainShow } from '../actions';

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

class MainShow extends Component {
  componentDidMount() {
    // eslint-disable-next-line react/destructuring-assignment
    this.props.fetchMainShow();
  }

  render() {
    const { loading, mainShow } = this.props;
    const youtubeKey = !mainShow ? mainShow.videos.results[0].key : null;
    return (
      <div>
        {loading ? (
          <>
            <Loader
              type="CradleLoader"
              color="#00BFFF"
              height="100"
              width="100"
            />
          </>
        ) : (
          <MainShowDiv
            style={{
              backgroundImage:
                "url('https://movieposterhd.com/wp-content/uploads/2019/03/Game-of-Thrones-Season-8-Full-Cast-Poster-HD.jpg')",
            }}
          >
            <Show>
              <ShowDetails
                name={mainShow.name}
                overview={mainShow.overview}
                youtubeKey={youtubeKey}
              />
            </Show>
          </MainShowDiv>
        )}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ fetchMainShow }, dispatch);

const mapStateToProps = state => ({
  mainShow: state.mainShow.show,
  loading: state.mainShow.loading,
  error: state.mainShow.error,
});

MainShow.propTypes = {
  fetchMainShow: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  mainShow: PropTypes.shape,
};

MainShow.defaultProps = {
  mainShow: {},
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainShow);
