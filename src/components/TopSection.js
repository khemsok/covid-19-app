import React, { Fragment } from "react";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import LinearProgress from "@material-ui/core/LinearProgress";
import Tooltip from "@material-ui/core/Tooltip";

import { numberWithCommas } from "../util/helper";

import "./TopSection.css";

import Typography from "@material-ui/core/Typography";

function TopSection({
  country,
  cases,
  deaths,
  recovered,
  dataStatus,
  index,
  active,
  critical,
  todayDeaths,
  todayCases
}) {
  const displayTopSection = dataStatus ? (
    <ExpansionPanel className="panel">
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        <div className="horizontal-display" style={{ width: "100%" }}>
          <ul
            style={{
              listStyleType: "none",
              margin: "0",
              padding: "0",
              overflow: "hidden"
            }}
          >
            <li style={{ float: "left" }}>
              <p>
                <span style={{ fontWeight: 800, marginRight: "20px" }}>
                  {index}
                </span>
                {country}
              </p>
            </li>
            <li>
              <Tooltip title="Number of Recoveries" placement="top">
                <p>😃 {numberWithCommas(recovered)}</p>
              </Tooltip>
            </li>

            <li>
              <Tooltip title="Number of Deaths" placement="top">
                <p>💀 {numberWithCommas(deaths)}</p>
              </Tooltip>
            </li>
            <li>
              <Tooltip title="Number of Cases" placement="top">
                <p>😥 {numberWithCommas(cases)}</p>
              </Tooltip>
            </li>
          </ul>
        </div>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <div style={{ width: "100%" }}>
          <Typography
            variant="caption"
            style={{ display: "inline-block", marginBottom: "10px" }}
          >
            Active Cases
          </Typography>
          <Typography style={{ float: "right" }}>
            {numberWithCommas(active)}
          </Typography>
          <br />
          <Typography
            variant="caption"
            style={{ display: "inline-block", marginBottom: "10px" }}
          >
            Critical Condition
          </Typography>
          <Typography style={{ float: "right" }}>
            {numberWithCommas(critical)}
          </Typography>
          <br />
          <Typography
            variant="caption"
            style={{ display: "inline-block", marginBottom: "10px" }}
          >
            Today Cases
          </Typography>
          <Typography style={{ float: "right" }}>
            {numberWithCommas(todayCases)}
          </Typography>
          <br />
          <Typography
            variant="caption"
            style={{ display: "inline-block", marginBottom: "10px" }}
          >
            Today Deaths
          </Typography>
          <Typography style={{ float: "right" }}>
            {numberWithCommas(todayDeaths)}
          </Typography>
        </div>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  ) : (
    <ExpansionPanel>
      <ExpansionPanelSummary>
        <div style={{ width: "100%" }}>
          <LinearProgress color="primary" />
        </div>
      </ExpansionPanelSummary>
    </ExpansionPanel>
  );
  return (
    <Fragment>
      {displayTopSection}
      <div style={{ marginBottom: "20px" }} />
    </Fragment>
  );
}

export default TopSection;
