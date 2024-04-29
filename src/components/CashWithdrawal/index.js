import './index.css'
import {Component} from 'react'
import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {rupees: 2000}
  adder = (a) => {
    this.setState(prevState => ({rupees: prevState.rupees - a}))
  }
  render() {
    const {rupees} = this.state
    const {denominationsList} = this.props
    return (
      <div className="bg-container">
        <div className="card">
          <div className="sCard">
            <div className="profile">
              <p className="para2">S</p>
            </div>
            <h1 className="sarahead">Sarah Williams</h1>
          </div>
          <div className="rup">
            <p className="your">Your Balance</p>
            <div>
              <p className="moneyhead">{rupees}</p>
              <p className="rupara">In Rupees</p>
            </div>
          </div>
          <p className="withHead">Withdraw</p>
          <p className="hunt">CHOOSE SUM (IN RUPEES)</p>
          <ul className="unodd">
            {denominationsList.map(item => (
              <DenominationItem money={item} prov={this.adder} key={item.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
