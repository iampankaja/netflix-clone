import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import MainShow from '../components/MainShow';
import Loading from '../components/Loader';

import { fetchMainShow, fetchShows } from '../actions';

class Main extends Component {
  async componentDidMount() {
    const { getMainShow, getShows } = this.props;

    await getMainShow();
    await getShows('popular');
    await getShows('top_rated');
  }

  render() {
    const { loading = true, mainShow } = this.props;
    const youtubeKey = !mainShow ? mainShow.videos.results[0].key : null;
    return (
      <div>
        {loading && mainShow == null ? (
          <Loading />
        ) : (
          <MainShow
            name={mainShow.name || null}
            overview={mainShow.overview || null}
            youtubeKey={youtubeKey}
          />
        )}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getMainShow: fetchMainShow,
      getShows: fetchShows,
    },
    dispatch
  );

const mapStateToProps = state => ({
  mainShow: state.mainShow.show,
  loading: state.mainShow.loading,
  error: state.mainShow.error,
});

Main.propTypes = {
  getMainShow: PropTypes.func.isRequired,
  getShows: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  mainShow: PropTypes.shape,
};

Main.defaultProps = {
  mainShow: PropTypes.objectOf(PropTypes.string),
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
