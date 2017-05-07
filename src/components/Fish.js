import React from 'react';
import { formatPrice } from '../helpers';

class Fish extends React.Component {

  render() {
    const { details, index } = this.props;
    // the above is the equivalent of going
    // const details = this.props.details;
    // const index = this.props.index;


    // is_available = (status == 'available')
    const isAvailable = (details.status === 'available');
    const buttonText = isAvailable ? 'Add To Order' : 'Sold Out';
    return (
      <li className="menu-fish">
        <img src={details.image} alt={this.name}/>
        <h3 className='fish-name'>
          {details.name}
          <span className="price">{formatPrice(details.price)}</span>
        </h3>
        <p>{details.desc}</p>
        { /* we cant pass something through straight away
          in the on clock thing liek this
          // onClick={this.props.addToOrder()} //
          as it will load on page load
          so we use a 'lambda' of sorts
          */}
        <button disabled={!isAvailable}
                onClick={() => this.props.addToOrder(index)}>
          {buttonText}
        </button>
      </li>
    )
  }


}

export default Fish;
