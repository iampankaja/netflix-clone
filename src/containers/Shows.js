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
    return <div />;
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
  showDetails: state.mainShow.show,
  loading: state.mainShow.loading,
  error: state.mainShow.error,
});

Shows.propTypes = {
  getShows: PropTypes.func.isRequired,
  showDetails: PropTypes.shape,
};

Shows.defaultProps = {
  showDetails: PropTypes.objectOf(PropTypes.string),
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Shows);
