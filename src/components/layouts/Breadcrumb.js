import React from "react";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import { withRouter } from "react-router-dom";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";

const Breadcrumb = (props) => {
  const {
    history,
    location: { pathname },
  } = props;

  const pathnames = pathname.split("/").filter((x) => x);

  return (
    <Breadcrumbs
      separator={<NavigateNextIcon fontSize="small" />}
      style={{ marginLeft: "20em" }}
      aria-label="breadcrumb"
    >
      {pathnames.length > 0 ? (
        <Link style={{ color: "teal" }} onClick={() => history.push("/")}>
          Home
        </Link>
      ) : (
        <Typography> Home </Typography>
      )}
      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
        const isLast = index === pathnames.length - 1;
        return isLast ? (
          <Typography key={name}>{name}</Typography>
        ) : (
          <Link
            style={{ color: "teal" }}
            key={name}
            onClick={() => history.push(routeTo)}
          >
            {name}
          </Link>
        );
      })}
    </Breadcrumbs>
  );
};

export default withRouter(Breadcrumb);
