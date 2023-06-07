import { Card, ListGroup } from "react-bootstrap"

const ItemCard = ({ title, description, itemImage, price, animal, }) => {
  return(
      <Card className="m-3"  style={{ width: '375px', borderRadius: "0" }}>
        <Card.Img style={{ height: '12rem', objectFit: 'cover', borderRadius: "0" }}
                  variant="top"
                  src={itemImage}
                  alt={title}/>
        <Card.Body>
          <Card.Title className="text-center font-weight-bold">{title}</Card.Title>
          <Card.Text className="text-center">
            {description}
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item
            className="text-center"
            style={{ borderRadius: "0", backgroundColor: '#99A98F' }}
          >{`Price : £${price}`}
          </ListGroup.Item>
        </ListGroup>
      </Card>
  )
}

export default ItemCard;