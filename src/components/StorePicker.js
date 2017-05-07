import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
  constructor(props) {
    super();
    this.goToStore = this.goToStore.bind(this);
  }

  goToStore(event) {
    event.preventDefault();
    const storeId = this.storeInput.value
    this.context.router.transitionTo(`/store/${storeId}`);
  }
  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h1>Please enter a store</h1>
        <input type="text" required placeholder="store name" defaultValue={getFunName()} ref={(input) => { this.storeInput = input}} />
        <button type='submit'> Visit Store </button>
      </form>
    );
  }
}

StorePicker.contextTypes = {
  router: React.PropTypes.object

}

export default StorePicker;
