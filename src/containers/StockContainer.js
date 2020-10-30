import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  renderStocks = () => {
    let currentStocks = this.props.stocks
    return currentStocks.map(stock => <Stock clickHandler={this.props.clickHandler} key={stock.id} stock={stock} />)
  }

  render() {
    // console.log(this.props.stocks.map(stock => stock.ticker))
    return (
      <div>
        <h2>Stocks</h2>
        {
          this.renderStocks()
        }
      </div>
    );
  }

}

export default StockContainer;
