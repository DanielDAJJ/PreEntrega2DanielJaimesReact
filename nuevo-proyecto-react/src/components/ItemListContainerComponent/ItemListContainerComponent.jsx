import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './ItemListContainerComponent.css';


const ItemListComponent = ({ products }) => {

  return <div className='itemListContainer'>{ 
            products.map((product) =>{
              return (
                  <Card key={product.id} style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={product.thumbnail} />
                    <Card.Body>
                      <Card.Title>{product.title}</Card.Title>
                      <Card.Text>
                        {product.description}
                      </Card.Text>
                      <Button variant="outline-dark"><Link to={`/item/${product.id}`}>Detalles</Link></Button>
                    </Card.Body>
                  </Card>
                )
              }
            )
          }
  </div>
}

export default ItemListComponent