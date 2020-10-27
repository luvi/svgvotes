import React, { Component } from "react";
import CandidateCard from "./CandidateCard";




export default class ConstituencyCard extends Component {
  render() {
    const candidates = this.props.candidates;
    console.log(candidates);

    return (
      <>
      <div style={{padding:'10px'}}>
        <h4>{this.props.constituency}</h4>
        <br />
        <br />
        </div>
        <div style={{display:'flex',justifyContent: "space-evenly", flexFlow:"wrap"}} >
          {candidates.map((obj) => {
            return (
              <CandidateCard
                name={obj.name}
                photo={obj.photo}
                party={obj.party}
                occupation={obj.occupation}
                bio={obj.bio}
                website={obj.website}
                ranBefore={obj.ranBefore}
                hasBeenElected={obj.electedBefore}
              />
            );
          })}
        </div>
      </>
    );
  }
}
