import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Carousel from "../components/Carousel";

export default function Home() {
  const ImageList = [
    <img src="https://media.geeksforgeeks.org/wp-content/uploads/20211213172224/1.png" />,
    <img src="https://media.geeksforgeeks.org/wp-content/uploads/20211213172225/2.png" />,
    <img src="https://media.geeksforgeeks.org/wp-content/uploads/20211213172226/3.png" />,
    <img src="https://media.geeksforgeeks.org/wp-content/uploads/20211213172227/4.png" />,
    <img src="https://media.geeksforgeeks.org/wp-content/uploads/20211213172229/5.png" />,
  ];
  return (
    <>
      <CssBaseline />
      <Container maxWidth="xl" className="home-page">
        <Carousel/>
      </Container>
    </>
  );
}
