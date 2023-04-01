// Write your code here
import {Component} from 'react'
import './index.css'

class DenominationItem extends Component {
  add = () => {
    const {details, onAdd} = this.props
    const {value} = details
    onAdd(value)
  }

  render() {
    const {details} = this.props
    const {value} = details
    return (
      <li>
        <button onClick={this.add} type="button">
          {value}
        </button>
      </li>
    )
  }
}

export default DenominationItem
