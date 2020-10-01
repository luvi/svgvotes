import React, { Component } from "react";
import { Card } from "react-bootstrap";
import CandidateCard from "./CandidateCard";


export default class ConstituencyCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {

  
    const candidates = this.props.candidates
    console.log(candidates)

    return (
      <Card body>
         <h4>{this.props.constituency}</h4> 
        <br />
        <br />

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        >
       

        {candidates.map((obj) => {

            return <CandidateCard  name={obj.name} party={obj.party} occupation={obj.occupation} bio={obj.bio} website={obj.website} ranBefore={obj.ranBefore} hasBeenElected={obj.electedBefore}  />


        })} 
            
         
          
        </div>
      </Card>
    );
  }
}
