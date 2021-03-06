import React, { Component } from "react";
import { Card, Badge } from "react-bootstrap";

const candidateCardStyle = {

  minWidth: '200px',
  borderRadius: '0'


}

export default class CandidateCard extends Component {
  render() {
    return (
      <Card style={{ width: '18rem', minWidth: "300px", margin:"2rem" }}>
        <Card.Img
          variant="top"
          src={process.env.PUBLIC_URL + `${this.props.photo}`}
        />
        <Card.Body>
          <Card.Title>
            {this.props.name}{" "}
            <Badge variant="secondary">{this.props.party}</Badge>{" "}
          </Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {this.props.occupation}
          </Card.Subtitle>
          <Card.Text>{/* {this.props.bio} */}</Card.Text>
          <Card.Link href={this.props.website}>Website</Card.Link> <br />
          <Badge variant="secondary">
            {this.props.ranBefore === 1
              ? "Returning Candidate"
              : "First Time Candidate"}
          </Badge>{" "}
          <br />
          <Badge variant="secondary">
            {this.props.hasBeenElected === 1
              ? "Has Been Elected"
              : "Has Never Been Elected"}
          </Badge>
        </Card.Body>
      </Card>
    );
  }
}
