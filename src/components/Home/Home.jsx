import React, { Component } from "react";
import { connect } from "react-redux";
//components
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { SvgIconProps } from "@material-ui/core/SvgIcon";

import Search from "@material-ui/icons/Search";
import ViewColumn from "@material-ui/icons/ViewColumn";
import SaveAlt from "@material-ui/icons/SaveAlt";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Add from "@material-ui/icons/Add";
import Check from "@material-ui/icons/Check";
import FilterList from "@material-ui/icons/FilterList";
import Remove from "@material-ui/icons/Remove";

import MaterialTable from "material-table";
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
    let dinoReducer = this.props.store.dinoReducer;
    for (let i = 0; i < dinoReducer.length; i++) {
      if (dinoReducer[i].name.includes(this.state.dinoName)) {
        dinoArray.push(dinoReducer[i]);
      }
    }
    this.props.dispatch({
      type: "SET_DINOS",
      payload: dinoArray,
    });
  };

  render() {
    return (
      <div>
        <MaterialTable
          icons={{
            Check: Check,
            DetailPanel: ChevronRight,
            Export: SaveAlt,
            Filter: FilterList,
            FirstPage: FirstPage,
            LastPage: LastPage,
            NextPage: ChevronRight,
            PreviousPage: ChevronLeft,
            Search: Search,
            ThirdStateCheck: Remove,
          }}
          title='Jurassic World Dinosaurs'
          columns={[
            { title: "Name", field: "name" },
            {
              title: "Type",
              field: "type",
            },
            { title: "Base Rating", field: "base_rating", type: "numeric" },
            { title: "Rating @ 100%", field: "100_rating", type: "numeric" },
            {
              title: "$ Cost/rating @ 50%",
              field: "cost_rating_50",
              type: "numeric",
            },
            {
              title: "$ Cost/rating @ 100%",
              field: "cost_rating_100",
              type: "numeric",
            },
            {
              title: "Population Minimum",
              field: "pop_min",
              customFilterAndSearch: (term, rowdata) => term <= rowdata.pop_min,
            },
            {
              title: "Population Maximum",
              field: "pop_max",
              customFilterAndSearch: (term, rowdata) => term >= rowdata.pop_max,
            },
            {
              title: "Social Minimum",
              field: "social_min",
              customFilterAndSearch: (term, rowdata) =>
                term <= rowdata.social_min,
            },
            {
              title: "Social Maximum",
              field: "social_max",
              customFilterAndSearch: (term, rowdata) =>
                term <= rowdata.social_max,
            },
            {
              title: "Comfort %",
              field: "comfort_percent",
              type: "numeric",
            },
            {
              title: "Forest Area",
              field: "forest_area",
              type: "numeric",
            },
            {
              title: "Grass Area",
              field: "grass_area",
              type: "numeric",
            },
            { title: "Total Area", field: "total_area", type: "numeric" },

            // {
            //   title: "Birth Place",
            //   field: "birthCity",
            //   lookup: { 34: "İstanbul", 63: "Şanlıurfa" },
            // },
          ]}
          data={this.props.store.dinoReducer}
          options={{
            filtering: true,
            sorting: true,
            cellStyle: {
               backgroundColor: "rgba(0, 0, 0, .1)"
            },
          }}
        />

        {/* <Table>
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
        </Table> */}
      </div>
    );
  }
}
const mapStateToProps = (store) => ({
  store,
});
export default connect(mapStateToProps)(Home);
