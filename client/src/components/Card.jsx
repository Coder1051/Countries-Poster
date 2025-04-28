import Button from 'react-bootstrap/Button';
import { Card, Row, Col } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Cards() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await axios.get("http://localhost:4300/api/v1/ads");  
        setData(response.data);  
        console.log(response.data);  
        localStorage.setItem('countryAds', JSON.stringify(response.data));  
      } catch (err) {
        console.error('Error fetching data:', err);
      }
    };

    fetchdata();  
  }, []);  

  return (
    <Row className="w-100" style={{padding:'20px'}} >
      {data.map((item, index) => (  
        <Col key={index} md={4} className="mb-4"  style={{padding:'20px'}}>
          <Card>
            <Card.Img variant="top" src={item.Image} width={100} /> 
            <Card.Body>
              <Card.Title>{item.Name}</Card.Title> 
              <Card.Text>{item.Description}</Card.Text> 
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default Cards;
