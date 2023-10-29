import Card from 'react-bootstrap/Card';

const AboutUs = () => {
    return (
        <>
            <h1 style={{margin: '20px'}} >Sobre Nosotros</h1>
            <p style={{margin: '20px'}} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia ipsum repudiandae illo qui veniam, doloribus, saepe beatae quam aliquid est rerum sunt harum consequatur quasi hic impedit autem quas recusandae!</p>
            <div 
            style={{
                display: 'flex', margin: '15px',
                justifyContent: 'center'
            }}
            >
            <Card style={{ width: '18rem', margin: '10px' }}>
                <Card.Img variant="top" src="src/assets/images/moda-hombre-primavera-verano-2021-770x488.jpg" />
                <Card.Body>
                    <Card.Title>Ropa casual</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem', margin: '10px' }}>
                <Card.Img variant="top" src="src/assets/images/0000222008_9_1_13.webp" />
                <Card.Body>
                    <Card.Title>Ropa elegante</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem', margin: '10px' }}>
                <Card.Img variant="top" src="src/assets/images/Moda verano 2017 hombre moda 2017 Bensimon ropa.jpg" />
                <Card.Body>
                    <Card.Title>Ropa estacional</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                </Card.Body>
            </Card>
            </div>
            
        </>
    );
}

export default AboutUs;