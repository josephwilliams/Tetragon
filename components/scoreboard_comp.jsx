import React from 'react';

export default class ScoreBoard extends React.Component {
  constructor(props){
    super(props);
  }

  render () {
    return (
      <div className="scoreboard-container">
        <div className="top">
          <div className="score-container">
            red: {this.props.redCount}
          </div>
          <div className="score-container">
            blue: {this.props.blueCount}
          </div>
        </div>
        <div className="bottom">
          {this.props.message}
        </div>
      </div>
    )
  }
}