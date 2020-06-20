import React, { Component } from "react";
import { connect } from "react-redux";
//components

class Home extends Component {
  state = {
  };

  componentDidMount() {
    this.getDinos();
  }


  getDinos = (event) => {
    this.props.dispatch({
      type: "FETCH_DINOS"
    });
  };

  render() {
    return (
      <div>

      </div>
    );
  }
}
const mapStateToProps = (store) => ({
  store,
});
export default connect(mapStateToProps)(Home);
