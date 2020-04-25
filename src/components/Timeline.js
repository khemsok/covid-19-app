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
  ResponsiveContainer,
} from "recharts";

function Timeline() {
  const [countrySelected, setCountrySelected] = useState("Afghanistan");
  const [historicalData, setHistoricalData] = useState({});
  const [countryArr, setCountryArr] = useState([]);

  useEffect(() => {
    fetch(`https://corona.lmao.ninja/v2/historical/${countrySelected}`)
      .then((res) => res.json())
      .then((data) => {
        setHistoricalData(data);
      });

    if (countryArr.length === 0) {
      fetch("https://corona.lmao.ninja/v2/historical?lastdays=30")
        .then((res) => res.json())
        .then((data) => {
          let uniqueCountry = [];
          let uniqueCountryObj = [];
          for (let val in data) {
            if (uniqueCountry.indexOf(data[val].country) === -1) {
              uniqueCountry.push(data[val].country);
              uniqueCountryObj.push({ country: data[val].country });
            }
          }
          setCountryArr(uniqueCountryObj);
        });
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
          deaths: historicalData["timeline"]["deaths"][element],
          recoveries: historicalData["timeline"]["recovered"][element],
        });
      }
    );
    autocompleteDisplay = (
      <div>
        {countryArr.length !== 0 ? (
          <Autocomplete
            style={{ width: 300 }}
            disableClearable
            size="small"
            options={countryArr}
            getOptionLabel={(option) => {
              return option.country;
            }}
            defaultValue={countryArr[0]}
            onChange={(event, value, reason) => {
              if (reason === "select-option") {
                setCountrySelected(value["country"]);
              }
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                variant="standard"
                label="Choose a country"
                placeholder="Choose a country"
              />
            )}
          />
        ) : null}
      </div>
    );
  }

  return historicalTransform.length !== 0 ? (
    <Container maxWidth="md" style={{ marginTop: "50px" }}>
      <Typography variant="h5">
        Timeline <span>⏳</span>
      </Typography>
      {autocompleteDisplay}

      <div style={{ display: "flex", justifyContent: "center" }}>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart
            data={historicalTransform}
            margin={{
              top: 5,
              bottom: 5,
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
              stroke="#00a4f4"
              activeDot={{ r: 8 }}
            />
            <Line
              type="monotone"
              dataKey="recoveries"
              stroke="#05c256"
              activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="deaths" stroke="#ff5454" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Container>
  ) : null;
}

export default Timeline;
