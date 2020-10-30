import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {
  state = {
    stocks: [],
    portfolio: [],
    type: []
  }

  componentDidMount() {
    fetch("http://localhost:5000/stocks")
    .then(resp => resp.json())
    .then(stocks => {
      this.setState({
        stocks: stocks
      })
    })
  }

  clickHandler = stock => {
    let allStocks = [...this.state.portfolio, stock]
    this.setState(() => ({
      portfolio: allStocks
    }))
  }

  removeHandler = oldStock => {
    let allStocks = [...this.state.portfolio]
    let removeStock = allStocks.filter(stock => stock.id !== oldStock.id)
    this.setState(() => ({
      portfolio: removeStock
    }))
  }

  filterStocks = type => {
    let allStocks = [...this.state.stocks]
    let filteredStocks = allStocks.filter(stock => stock.type === type)
    console.log(filteredStocks)
  }

  render() {
    return (
      <div>
        <SearchBar filterStocks={this.filterStocks}/>

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={this.state.stocks} clickHandler={this.clickHandler}/>

            </div>
            <div className="col-4">

              <PortfolioContainer removeHandler={this.removeHandler} portfolio={this.state.portfolio}/>

            </div>
          </div>
      </div>
    )
  }

}

export default MainContainer;
