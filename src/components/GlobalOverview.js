import React, { useState, useEffect, Fragment } from "react";

import GlobalSection from "./GlobalSection";
import moment from "moment";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

function convertUnixTime(unixTime) {
  return moment.unix(unixTime / 1000).fromNow();
}

function GlobalOverview() {
  const [allCases, setAllCases] = useState({});
  useEffect(() => {
    fetch("https://corona.lmao.ninja/v2/all")
      .then((res) => res.json())
      .then((data) => setAllCases(data));
  }, []);

  // let dataStatus = Object.keys(allCases).length !== 0 ? true : false;

  let displayGlobalSection =
    Object.keys(allCases).length === 0 ? (
      <Fragment>
        <Grid item xs={12} md={4}>
          <GlobalSection dataStatus={false} />
        </Grid>
        <Grid item xs={12} md={4}>
          <GlobalSection dataStatus={false} />
        </Grid>
        <Grid item xs={12} md={4}>
          <GlobalSection dataStatus={false} />
        </Grid>
      </Fragment>
    ) : (
      <Fragment>
        <Grid item xs={12} md={4}>
          <GlobalSection
            header="😥 Cases"
            dataStatus={true}
            casualties={allCases["cases"]}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <GlobalSection
            header="💀 Deaths"
            dataStatus={true}
            casualties={allCases["deaths"]}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <GlobalSection
            header="😃 Recovered"
            dataStatus={true}
            casualties={allCases["recovered"]}
          />
        </Grid>
      </Fragment>
    );

  const lastUpdated = (
    <Grid container justify="flex-end" spacing={4}>
      <Grid item xs={7} md={4}>
        {Object.keys(allCases).length === 0 ? null : (
          <Typography style={{ float: "right" }}>
            Last Updated: {convertUnixTime(allCases["updated"])}
          </Typography>
        )}
      </Grid>
    </Grid>
  );

  return (
    <Fragment>
      <Typography
        variant="h5"
        style={{ margin: "20px 0", fontWeight: "ligher" }}
      >
        Global Overview 🌎
      </Typography>
      <Grid container justify="center" alignItems="center" spacing={4}>
        {displayGlobalSection}
      </Grid>
      {lastUpdated}
    </Fragment>
  );
}

export default GlobalOverview;
