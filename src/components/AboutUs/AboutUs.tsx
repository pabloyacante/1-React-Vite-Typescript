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
                <Card.Img variant="top" src="https://www.hdwallpapers.in/download/mario_hd_super_mario_bros_-HD.jpg" /> /*src/assets/images/mario_hd_super_mario_bros_.jpg*/
                <Card.Body>
                    <Card.Title>Mario Fuego</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem', margin: '10px' }}>
                <Card.Img variant="top" src=" https://p4.wallpaperbetter.com/wallpaper/434/135/615/super-4k-8k-mario-wallpaper-preview.jpg" /> /*src/assets/images/hero-artwork-super-mario-bros-mario-character-wallpaper-preview.jpg*/
                <Card.Body>
                    <Card.Title>Mario Heroe</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem', margin: '10px' }}>
                <Card.Img variant="top" src=" https://mizivir.com/wp-content/uploads/2023/07/super-mario-bros-movie-2.jpg" /> /*src/assets/images/super-mario-super-mario-bros-hd-wallpaper-preview.jpg*/
                <Card.Body>
                    <Card.Title>Mario Laburante</Card.Title>
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
