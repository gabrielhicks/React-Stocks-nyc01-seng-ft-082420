import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  renderPortfolio = () => {
    let currentStocks = this.props.portfolio
    return currentStocks.map(stock => <Stock removeHandler={this.props.removeHandler} key={stock.id} stock={stock} portfolio />)
  }

  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
          {
            this.renderPortfolio()
          }
      </div>
    );
  }

}

export default PortfolioContainer;
