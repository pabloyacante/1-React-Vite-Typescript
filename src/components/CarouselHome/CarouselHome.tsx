import { Carousel } from "react-bootstrap"


const CarouselHome= () => {
    return (
        <Carousel data-bs-theme="dark">


      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{maxHeight: "500px", objectFit: 'cover'}}
          src="/*src/assets/images/1366_2000.jpeg*/ https://4kwallpapers.com/images/walls/thumbs_2t/10955.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>Mario Kart</h5>
          <p>Pelicula Exclusiva en Cines y Paginas Pirata</p>
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{maxHeight: "500px", objectFit: 'cover'}}
          src="/*src/assets/images/super-mario-bros-la-pelicula-escenas-postcreditos-2-06042023-1140x750.jpeg*/ https://cloudfront-us-east-1.images.arcpublishing.com/copesa/HTX4FJZLFVDQTHUG5OHPIW3AMI.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Mario y Luigi</h5>
          <p>Pelicula Exclusiva en Cines y Paginas Pirata</p>
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{maxHeight: "500px", objectFit: 'cover'}}
          src="/*src/assets/images/super-mario-bros-movie-800x400.jpg*/ https://i.pinimg.com/474x/12/ac/66/12ac66cf9d416c7364b5ead73c6f7647.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Ojos de Mario</h5>
          <p>
            Pelicula Exclusiva en Cines y Paginas Pirata
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    )

}

export default CarouselHome;
