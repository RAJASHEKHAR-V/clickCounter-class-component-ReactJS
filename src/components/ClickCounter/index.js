import {Component} from 'react'

import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  onClickMe = () => {
    this.setState(prevSate => ({count: prevSate.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-Container">
        <h1 className="heading">
          The Button has been clicked <span className="count">{count}</span>{' '}
          times
        </h1>
        <p className="instruction">Click the button to increase the count!</p>
        <div>
          <button className="button" type="submit" onClick={this.onClickMe}>
            Click Me!
          </button>
        </div>
      </div>
    )
  }
}

export default ClickCounter
