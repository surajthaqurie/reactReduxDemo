import React, { Component } from 'react';
import './App.css';

// Its a function that return higer order component
import { connect } from 'react-redux';

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="age">
          Youe Age:<span>{this.props.age}</span>
        </div>
        <button className="ageUp" onClick={this.props.onAgeUp}>Age UP</button>
        <button className="ageDown" onClick={this.props.onAgeDown}>Age Down</button>
        <hr />
        <div>History</div>
        <div>
          <ul>
            {
              this.props.history.map(ele => (
                <li className="historyItem"
                  key={ele.id}
                  onClick={() => this.props.onDelItem(ele.id)}>
                  {ele.age}
                </li>
              ))

            }
          </ul>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    age: state.age,
    history: state.history
  }
}

const mapDispachToProps = (dispach) => {
  return {
    onAgeUp: () => dispach({ type: 'AGE_UP', value: 1 }),
    onAgeDown: () => dispach({ type: 'AGE_DOWN', value: 1 }),
    onDelItem: (id) => dispach({ type: "DEL_ITEM", key: id })
  }
}

export default connect(mapStateToProps, mapDispachToProps)(App);
