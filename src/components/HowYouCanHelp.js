import React from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import InfoIcon from "@material-ui/icons/Info";
import Tooltip from "@material-ui/core/Tooltip";

import "./HowYouCanHelp.css";

function HowYouCanHelp() {
  return (
    <Container maxWidth="md" style={{ marginTop: "50px" }}>
      <Typography variant="h5" style={{ marginBottom: "20px" }}>
        How You Can Help 💉
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <a
            href="https://covid19responsefund.org/"
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            <Tooltip title="Click for more info" placement="top">
              <Paper
                className="select-panel-1"
                elevation={2}
                style={{
                  height: "75px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <Typography>
                  Donate 💰{" "}
                  <span>
                    <InfoIcon
                      className="info-icon"
                      style={{
                        verticalAlign: "middle",
                        fontSize: "1em"
                      }}
                    />
                  </span>
                </Typography>
              </Paper>
            </Tooltip>
          </a>
        </Grid>
        <Grid item xs={12} md={4}>
          <a
            href="https://www.cdc.gov/handwashing/when-how-handwashing.html"
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            <Tooltip title="Click for more info" placement="top">
              <Paper
                className="select-panel-2"
                elevation={2}
                style={{
                  height: "75px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <Typography>
                  Wash Your Hand 💧{" "}
                  <span>
                    <InfoIcon
                      className="info-icon"
                      style={{
                        verticalAlign: "middle",
                        fontSize: "1em"
                      }}
                    />
                  </span>
                </Typography>
              </Paper>
            </Tooltip>
          </a>
        </Grid>
        <Grid item xs={12} md={4}>
          <a
            href="https://www.hopkinsmedicine.org/health/conditions-and-diseases/coronavirus/coronavirus-social-distancing-and-self-quarantine"
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            <Tooltip title="Click for more info" placement="top">
              <Paper
                className="select-panel-3"
                elevation={2}
                style={{
                  height: "75px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <Typography>
                  Social Distancing 🚶‍♂️{" "}
                  <span>
                    <InfoIcon
                      className="info-icon"
                      style={{
                        verticalAlign: "middle",
                        fontSize: "1em"
                      }}
                    />
                  </span>
                </Typography>
              </Paper>
            </Tooltip>
          </a>
        </Grid>
      </Grid>
    </Container>
  );
}

export default HowYouCanHelp;
