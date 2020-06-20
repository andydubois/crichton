import axios from "axios";
import { put, takeEvery } from "redux-saga/effects";
// let LeagueAPI = require('leagueapiwrapper');
// LeagueAPI = new LeagueAPI(leagueAPIKey, Region.NA);

function* fetchDinos(action) {
  console.log("summoner search");
  try {
    // let summonerSearch = action.payload;
    console.log("action.payload is ", action.payload);
    let response = yield axios.get(`/api/dinos`);
    console.log("summonerSaga summoner response", response.data);
    yield put({
      type: "SET_DINOS",
      payload: response.data,
    });
  } catch (error) {
    console.log("error in client side summoner get", error);
  }
}

function* watchMe() {
  yield takeEvery("FETCH_DINOS", fetchDinos);
}

export default watchMe;
