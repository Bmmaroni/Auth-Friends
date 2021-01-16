import React from 'react';
import { Card } from 'react-bootstrap';

class Friend extends React.Component {
  render() {
    const { friend } = this.props;

    return(
      <div>
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Header>{friend.name}</Card.Header>
            <Card.Text>{friend.age}</Card.Text>
            <Card.Text>{friend.email}</Card.Text>
          </Card.Body>
        </Card>
      </div>
    )
  }
}

export default Friend;