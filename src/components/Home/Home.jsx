import React, { Component } from "react";
import { connect } from "react-redux";
//components
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

class Home extends Component {
  state = {
    dinoName: "",
  };

  componentDidMount() {
    this.getDinos();
  }

  getDinos = (event) => {
    this.props.dispatch({
      type: "FETCH_DINOS",
    });
  };

  handleChangeFor = (event) => {
    this.setState({
      dinoName: event.target.value,
    });
    console.log(this.state);
  };

  dinoSearch = (event) => {
     let dinoArray = [];
     let dinoReducer = this.props.store.dinoReducer
    for (let i=0; i < dinoReducer.length; i++) {
      if (dinoReducer[i].name.includes(this.state.dinoName)) {
        dinoArray.push(dinoReducer[i])
      }
    }
    this.props.dispatch({
      type: "SET_DINOS",
      payload: dinoArray,
    });
  }



  render() {
    return (
      <div>
        <form>
          <input type='text' onChange={this.handleChangeFor} />
          <button>Search</button>
        </form>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
            </TableRow>
            ;
          </TableHead>
          <TableBody>
            {this.props.store.dinoReducer.map((dino) => {
              return (
                <TableRow>
                  <TableCell>{dino.name}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    );
  }
}
const mapStateToProps = (store) => ({
  store,
});
export default connect(mapStateToProps)(Home);
