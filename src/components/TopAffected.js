import React, { useState, useEffect, Fragment } from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import TopSection from "./TopSection";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";

function TopAffected() {
  const [allData, setAllData] = useState([]);
  const [sortSelector, setSortSelector] = useState("cases");

  const handleChange = event => {
    setSortSelector(event.target.value);
    fetch(`https://corona.lmao.ninja/countries?sort=${event.target.value}`)
      .then(res => res.json())
      .then(data => setAllData(data));
  };

  useEffect(() => {
    fetch("https://corona.lmao.ninja/countries?sort=cases")
      .then(res => res.json())
      .then(data => setAllData(data));
  }, []);

  let displayCountries =
    allData.length !== 0
      ? allData
          .slice(0, 10)
          .map((element, index) => (
            <TopSection
              dataStatus={true}
              country={element["country"]}
              cases={element["cases"]}
              deaths={element["deaths"]}
              recovered={element["recovered"]}
              index={index + 1}
              active={element["active"]}
              critical={element["critical"]}
              todayDeaths={element["todayDeaths"]}
              todayCases={element["todayCases"]}
            />
          ))
      : [...Array(10)].map((element, index) => (
          <TopSection dataStatus={false} />
        ));

  return (
    <Container maxWidth="md">
      <div>
        <Typography
          variant="h5"
          style={{ marginTop: "50px", marginBottom: "5px" }}
        >
          Top Affected Countries
        </Typography>
        <FormControl>
          <InputLabel id="demo-simple-select-label">Sort By</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={sortSelector}
            onChange={handleChange}
          >
            <MenuItem value={"cases"}>Cases</MenuItem>
            <MenuItem value={"deaths"}>Deaths</MenuItem>
            <MenuItem value={"recovered"}>Recovered</MenuItem>
          </Select>
        </FormControl>
      </div>

      {displayCountries}
    </Container>
  );
}

export default TopAffected;
