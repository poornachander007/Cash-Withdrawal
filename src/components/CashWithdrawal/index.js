// Write your code here
import {Component} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

class CashWithdrawal extends Component {
  state = {presentAmount: 2000}

  onAdd = value => {
    // const {details} = this.props
    // const {value} = details
    this.setState(preState => ({
      presentAmount: preState.presentAmount - parseInt(value),
    }))
  }

  render() {
    const {presentAmount} = this.state
    console.log(presentAmount)
    const {denominationsList} = this.props
    return (
      <div className="page_container">
        <div className="container">
          <div className="name_container">
            <p className="icon">p</p>
            <p className="name">Poornachander Varukolu</p>
          </div>
          <div className="balance_container">
            <p className="your_balance_msg">Your Balance</p>
            <div className="present_amount_container">
              <p className="present_amount">{presentAmount}</p>
              <p className="in_rupees">In Rupees</p>
            </div>
          </div>
          <p className="withdraw">Withdraw</p>
          <p className="choose_sum">CHOOSE SUM (IN RUPEES)</p>
          <ul className="denomination_container">
            {denominationsList.map(eachItem => (
              <DenominationItem
                onAdd={this.onAdd}
                key={eachItem.id}
                details={eachItem}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
