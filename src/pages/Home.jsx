
import { Typography, Container, Grid, Card, CardContent, CardMedia, Box } from '@mui/material';
import Carousel from 'react-material-ui-carousel';



export default function HomePage() {
  
  const items = [
    {
      image: "${process.env.PUBLIC_URL}/img_resources/caurousel_001.png",
      label: "First slide label",
      description: "Nulla vitae elit libero, a pharetra augue mollis interdum."
    },
    {
      image: "${process.env.PUBLIC_URL}/img_resources/caurousel_002.png",
      label: "Second slide label",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      image: "${process.env.PUBLIC_URL}/img_resources/caurousel_003.png",
      label: "Third slide label",
      description: "Praesent commodo cursus magna, vel scelerisque nisl consectetur."
    }
  ];

  return (
    <>
      <Carousel
        showThumbs={false}
        showStatus={false}
        infiniteLoop
        useKeyboardArrows
        autoPlay
        interval={3000}
        transitionTime={0} // Set the transition time to 0
        swipeable={false}
        swipe={false} // Remove the drop-down effect
      >
        {items.map((item, index) => (
          <Box key={index} sx={{ position: 'relative', height: 400 }}>
            <img
              src={item.image}
              alt={item.label}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <Box sx={{ position: 'absolute', bottom: 0, left: 0, p: 2, backgroundColor: 'rgba(0, 0, 0, 0.5)', color: 'white' }}>
              <Typography variant="h6">{item.label}</Typography>
              <Typography>{item.description}</Typography>
            </Box>
          </Box>
        ))}
      </Carousel>

      <Container sx={{ my: 4, textAlign: 'center' }}>
        <Typography variant="h4">Some Informative Text</Typography>
        <Typography variant="body1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Typography>
      </Container>

      <Container>
        <Grid container spacing={10}>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image="https://via.placeholder.com/150"
                alt="Card Image 1"
              />
              <CardContent>
                <Typography variant="h5">Card Title 1</Typography>
                <Typography variant="body2" color="text.secondary">
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image="https://via.placeholder.com/150"
                alt="Card Image 2"
              />
              <CardContent>
                <Typography variant="h5">Card Title 2</Typography>
                <Typography variant="body2" color="text.secondary">
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image="https://via.placeholder.com/150"
                alt="Card Image 3"
              />
              <CardContent>
                <Typography variant="h5">Card Title 3</Typography>
                <Typography variant="body2" color="text.secondary">
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
