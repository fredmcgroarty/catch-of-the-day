import React from 'react';

class FishForm extends React.Component {
  createFish(event) {
    event.preventDefault();
    const fish = {
      name: this.name.value,
      price: this.price.value,
      status: this.status.value,
      description: this.description.value,
      image: this.image.value
    }
    // this calls method in parent compoentns 'App'
    this.props.addFish(fish)
    this.fishForm.reset();
    // console.log(fish)
  }

  render() {
    return (
      <form action="fish-edit" ref={(input) => this.fishForm = input} onSubmit={(e) => this.createFish(e)}>
        <input type="text" ref={(input) => this.name = input } placeholder='Fish Name'/>
        <input type="text" ref={(input) => this.price = input } placeholder='Fish Price'/>
        <select ref={(input) => this.status = input }>
          <option value="available">Fresh</option>
          <option value="unavailable">Sold Out</option>

        </select>
        <textarea type="text" ref={(input) => this.description = input } placeholder='Fish Description'></textarea>
        <input type="text" ref={(input) => { this.image = input}} placeholder='Fish Image'/>
        <button type='submit'>Add</button>
      </form>
    );
  }
}

export default FishForm;
