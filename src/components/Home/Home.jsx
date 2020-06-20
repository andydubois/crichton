import React, { Component } from "react";
import { connect } from "react-redux";
//components

class Home extends Component {
  state = {
  };



  getSummoner = (event) => {
    this.props.dispatch({
      type: "FETCH_SUMMONER",
      payload: this.state.summonerName,
    });
    console.log(this.state);
    this.props.history.push(`/summoner/${this.props.store.summoner.accountId}`);
  };

  handleChangeFor = (event) => {
    this.setState({
      summonerName: event.target.value,
    });
    console.log(this.state);
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
