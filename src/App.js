import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as types from './actions';
import User from './components/User';

class App extends Component {
  render() {
    const { increment, decrement } = this.props;
    return (
        <div className="container">
          <h1 className="jumbotron-heading text-center">{ this.props.counter }</h1>
            {/*<h1 className="jumbotron-heading text-center">{ this.props.user }</h1>*/}

          <p className="text-center">
              <button onClick={ () => increment()} className="btn btn-primary mr-2">Increase</button>
              <button onClick={ () => decrement()} className="btn btn-danger mr-2">Decrease</button>
          </p>
            <User />
        </div>
    );
  }
}

const mapStateToProps = (state) =>{
  return {
    counter: state.counter,
      // user: state.user
  };
}
//
// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment: (name)=> { dispatch(increment(name)) }
//   }
// }

App.propTypes = {
    counter: PropTypes.number.isRequired,
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
}

export default connect(mapStateToProps,types)(App);
