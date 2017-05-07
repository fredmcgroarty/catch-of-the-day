import React from 'react';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';
import Fish from './Fish';
import sampleFishes from '../sample-fishes';

class App extends React.Component {
  constructor(props) {
    super(props);
    // initial state
    this.addFish     = this.addFish.bind(this);
    this.loadSamples = this.loadSamples.bind(this);
    this.addToOrder = this.addToOrder.bind(this);


    this.state = {
      fishes: {},
      order: {}
    }
  }

  addFish(fish) {
    // make a copy of the current state
    // '...' makes the COPY
    const fishes = {...this.state.fishes};
    const timestamp = Date.now();
    fishes[`fish-${timestamp}`] = fish;
    // this.setState({ fishes:  fishes })
    // same as below
    this.setState({ fishes })

  }

  addToOrder(key) {
    // make a copy of the state
    const order = {...this.state.order};
    // update or add the new fish to the order
    order[key] = order[key] + 1 || 1;
    this.setState({ order });
  }

  loadSamples() {
    this.setState({
      fishes: sampleFishes
    })
  }

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fishy Freddy's Fresh Food"/>
          <ul className="list-of-fishes">
            {/*
              This is a way of iteratng over a kind_of?(Hash)
              The equivalent in Ruby would be
              hash_object.keys.each do |k|
                details = hash_object[k]
              end

              key is reserved for React, that is not going
              to be available below
              so we need to send it down as our own custom prop
              */
            }
            {
              Object
                .keys(this.state.fishes)
                .map(key => <Fish key={key}
                                  index={key}
                                  details={this.state.fishes[key]}
                                  addToOrder={this.addToOrder}/>)
            }
          </ul>
        </div>
        <Order fishes={this.state.fishes} order={this.state.order} />
        <Inventory addFish={this.addFish} loadSamples={this.loadSamples}/>
      </div>
    );
  }
}

export default App;
