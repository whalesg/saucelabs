import { Component } from 'react';
import { connect } from 'react-redux';

class OverviewContainer extends Component {
  render() {
    return "The devices overview goes here"
  }
}

OverviewContainer.propTypes = {};

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OverviewContainer)
