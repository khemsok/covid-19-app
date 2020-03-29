import React, { useEffect, useState } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

function Timeline() {
  const [countrySelected, setCountrySelected] = useState("USA");
  const [historicalData, setHistoricalData] = useState({});
  const [countryArr, setCountryArr] = useState([]);

  useEffect(() => {
    fetch(`https://corona.lmao.ninja/v2/historical/${countrySelected}`)
      .then(res => res.json())
      .then(data => setHistoricalData(data));

    if (countryArr.length === 0) {
      fetch("https://corona.lmao.ninja/countries?sort=cases")
        .then(res => res.json())
        .then(data => setCountryArr(data.slice(0, 20)));
    }
  }, [countrySelected]);

  let historicalTransform = [];
  let autocompleteDisplay = null;
  if (Object.keys(historicalData).length !== 0) {
    Object.keys(historicalData["timeline"]["cases"]).forEach(
      (element, index) => {
        historicalTransform.push({
          date: element,
          cases: historicalData["timeline"]["cases"][element],
          deaths: historicalData["timeline"]["deaths"][element]
        });
      }
    );
    autocompleteDisplay = (
      <div>
        <Autocomplete
          style={{ width: 300 }}
          size="small"
          options={countryArr}
          getOptionLabel={option => option.country}
          defaultValue={[countryArr[0]]}
          onChange={(event, value, reason) => {
            if (reason === "select-option") {
              setCountrySelected(value["country"]);
            }
          }}
          renderInput={params => (
            <TextField
              {...params}
              variant="standard"
              label="Choose a country"
              placeholder="Choose a country"
            />
          )}
        />
      </div>
    );
  }

  return historicalTransform.length !== 0 ? (
    <Container maxWidth="md" style={{ marginTop: "50px" }}>
      <Typography variant="h5">Timeline ⏳</Typography>
      {/* <Typography variant="h5">{countrySelected}</Typography> */}
      {autocompleteDisplay}

      <div style={{ display: "flex", justifyContent: "center" }}>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart
            data={historicalTransform}
            margin={{
              top: 5,
              bottom: 5
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="cases"
              stroke="#37adbd"
              activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="deaths" stroke="red" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Container>
  ) : null;
}

export default Timeline;
