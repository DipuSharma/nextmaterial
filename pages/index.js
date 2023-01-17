import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Carousel from "../components/Carousel";
import {
  Grid
} from "@mui/material";
import BasicGrid from "../components/BasicGrid";

export default function Home() {
  const [data, setData] = useState();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
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

  if (!data) {
    return (
      <>
        <CssBaseline />
        <Container maxWidth="xxl" className="home-page">
          <Carousel />
        </Container>
        {/* Table Code */}
        {/* <div style={{ height: 250, width: "70%" }}>
          <DataGrid
            columns={[{ field: "username", minWidth: 150 }, { field: "age" }]}
            rows={rows}
          />
        </div> */}

        
        <BasicGrid/>
      </>
    );
  }
}
