import './index.css'
import {Component} from 'react'

class DenominationItem extends Component {
  can = () => {
    const {money, prov} = this.props
    prov(money.value)
  }
  render() {
    const {money} = this.props
    const {value} = money
    return (
      <li className="listitem">
        <button onClick={this.can} className="but">
          {value}
        </button>
      </li>
    )
  }
}
export default DenominationItem
