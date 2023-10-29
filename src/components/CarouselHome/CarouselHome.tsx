import { Carousel } from "react-bootstrap"


const CarouselHome= () => {
    return (
        <Carousel data-bs-theme="dark">


      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{maxHeight: "500px", objectFit: 'cover'}}
          src="src/assets/images/he_highsummer_0519_10.webp" 
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>Temporada 2023</h5>
          <p>Renova tu outfit con lo último en moda</p>
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{maxHeight: "500px", objectFit: 'cover'}}
          src="src/assets/images/79890d8a191a895deb499c0d0b11a9d3.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Set Francia</h5>
          <p>Cambia de aire con lo último del desfile de Paris</p>
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{maxHeight: "500px", objectFit: 'cover'}}
          src="src/assets/images/ropa-para-hombre-verano.jpg"

          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Verano elegante</h5>
          <p>
            Pasa el verano a la moda con nuestros conjuntos propios
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    )

}

export default CarouselHome;
