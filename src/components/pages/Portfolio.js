import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Navbar from "../layouts/Navbar";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import { DataStore } from "@aws-amplify/datastore";
import { Projects } from "../../models";
import { Paper } from "@material-ui/core";

export default function Portfolio() {
  const [apps, setApps] = useState([]);

  useEffect(() => {
    const func = async () => {
      const models = await DataStore.query(Projects);
      setApps(models);
      console.log(models);
    };
    func();
  }, []);

  return (
    <Navbar>
      <div style={{ width: "100vw" }}>
        <Grid
          container
          style={{ marginBottom: "1em", marginTop: "1em" }}
          justify="center"
        >
          <Grid
            style={{ marginBottom: "1em", marginTop: "1em" }}
            container
            justify="center"
          >
            <Typography
              style={{ fontWeight: "bold", color: "#355B8C" }}
              variant="h3"
            >
              Here are a few of the Projects I created.
            </Typography>
          </Grid>
          <Grid
            style={{ marginBottom: "1em", marginTop: "1em" }}
            container
            justify="center"
          >
            <Grid>
              <Paper
                style={{
                  marginTop: "10px",
                  width: "100%",
                  backgroundColor: "#355B8C",
                }}
              >
                {apps.map((app) => (
                  <Card
                    style={{ marginTop: "10px", padding: "20px" }}
                    key={app.id}
                  >
                    <Typography
                      style={{ fontWeight: "bold", color: "#355B8C" }}
                      variant="h4"
                    >
                      {app.title}
                    </Typography>
                    <a href={app.url} target="_blank" rel="noreferrer">
                      {app.url}
                    </a>
                    <Typography>{app.content}</Typography>

                    <Typography>Created: {app.createdDate}</Typography>
                  </Card>
                ))}
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </Navbar>
  );
}
