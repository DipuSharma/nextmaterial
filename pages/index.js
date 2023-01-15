import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Carousel from "../components/Carousel";

export default function Home() {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="xl" className="home-page">
        <Carousel/>
      </Container>
    </>
  );
}
