import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Megan() {
    return (
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" width="300px" src="https://images.unsplash.com/photo-1533738363-b7f9aef128ce?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="cat with sunglasses on" />
        <Card.Body>
            <Card.Title>Megan Lake</Card.Title>
            <Card.Text>
            She likes music and harry potter.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
        </Card.Body>
        </Card>
    );
}

export default Megan;