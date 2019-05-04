import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import ShowList from '../components/ShowList';

import { fetchShows } from '../actions';

class Shows extends Component {
  async componentDidMount() {
    const { getShows } = this.props;

    await getShows('popular');
    await getShows('top_rated');
  }

  render() {
    const { popularShows = {}, topRatedShows = {} } = this.props;
    return (
      <div>
        <ShowList type="Popular" shows={popularShows} />
        <ShowList type="Top rated" shows={topRatedShows} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getShows: fetchShows,
    },
    dispatch
  );

const mapStateToProps = state => ({
  popularShows: state.popularTvShows.showDetails,
  topRatedShows: state.topRatedTvShows.showDetails,
  loading: state.mainShow.loading,
  error: state.mainShow.error,
});

Shows.propTypes = {
  getShows: PropTypes.func.isRequired,
  popularShows: PropTypes.shape,
  topRatedShows: PropTypes.shape,
};

Shows.defaultProps = {
  popularShows: PropTypes.objectOf(PropTypes.string),
  topRatedShows: PropTypes.objectOf(PropTypes.string),
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Shows);
