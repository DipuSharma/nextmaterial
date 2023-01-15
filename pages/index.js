import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Carousel from "../components/Carousel";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  Box
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

export default function Home() {
  const [data, setData] = useState();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const rows = [
    {
      id: 1,
      username: "@MUI",
      age: 38,
    },
  ];
  // const onClickNotify = () => {
  //   toast.notify(`Hi, I am a toast!`)
  // }
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      fetch("http://localhost:8000/product/all", {
        method: "GET",
      })
        .then((result) => {
          result.json().then((response) => {
            if (response) {
              setData(response.data);
            }
          });
        })
        .catch((err) => {
          router.push("/");
        })
        .finally(() => {
          setLoading(false);
        });
    }, 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (rows) {
    return (
      <>
        <CssBaseline />
        <Container maxWidth="xxl" className="home-page">
          <Carousel />
        </Container>
        <div style={{ margin: "25%" }} className="col-md-3">
          <Card sx={{ maxWidth: 600 }}>
            <CardContent>
              <Typography variant="h3" gutterBottom>
                A Simple MUI Card
              </Typography>
              <Typography variant="h4" component="div">
                Heading
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                describes the heading
              </Typography>
              <Typography variant="body1">
                Card content
                <br />
                {'"describes the content"'}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Card Button</Button>
            </CardActions>
          </Card>
        </div>
        {/* Table Code */}
        {/* <div style={{ height: 250, width: "70%" }}>
          <DataGrid
            columns={[{ field: "username", minWidth: 150 }, { field: "age" }]}
            rows={rows}
          />
        </div> */}

        <Box
          sx={{
            mx: "auto",
            width: 200,
            p: 1,
            m: 1,
            bgcolor: (theme) =>
              theme.palette.mode === "dark" ? "#101010" : "grey.50",
            color: (theme) =>
              theme.palette.mode === "dark" ? "grey.300" : "grey.800",
            border: "1px solid",
            borderColor: (theme) =>
              theme.palette.mode === "dark" ? "grey.800" : "grey.300",
            borderRadius: 2,
            textAlign: "center",
            fontSize: "0.875rem",
            fontWeight: "700",
          }}
        >
          Centered element
        </Box>
      </>
    );
  }
}
