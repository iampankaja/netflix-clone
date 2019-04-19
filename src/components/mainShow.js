import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner';
import styled from 'styled-components';

import { BACKDROP_PATH } from '../constatnts/routes';

import fetchMainShow from '../actions';

const MainShowDiv = styled.div`
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;
  width: 100vw;
  height: 100vh;
`;

class MainShow extends Component {
  componentDidMount() {
    // eslint-disable-next-line react/destructuring-assignment
    this.props.fetchMainShow();
  }

  render() {
    const { loading, mainShow } = this.props;

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
              backgroundImage: `url(${BACKDROP_PATH}${mainShow.backdrop_path})`,
            }}
          />
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
  mainShow: PropTypes.shape.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainShow);
