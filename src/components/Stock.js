import React from 'react'

class Stock extends React.Component {

  clickHandler = () => {
    this.props.clickHandler(this.props.stock)
  }

  removeHandler = () => {
    this.props.removeHandler(this.props.stock)
  }

  render() {
    return (
      <div>
        <div className="card">
          <div onClick={this.props.portfolio ? this.removeHandler : this.clickHandler} className="card-body">
            <h5 className="card-title">
              {this.props.stock.name}
            </h5>
            <p className="card-text">
            {this.props.stock.ticker}: {this.props.stock.price}
            </p>
          </div>
        </div>
      </div>
    )
  }


};

export default Stock
