import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {value: false, same: false}

  onAdding = () => {
    this.setState(preState => ({value: !preState.value}))
  }

  onAddSecond = () => {
    this.setState(preState => ({same: !preState.same}))
  }

  render() {
    const {value, same} = this.state
    let Auth
    if (value === true) {
      Auth = (
        <div className="for-hide">
          <p className="for-name">Joe</p>
        </div>
      )
    }

    let AuthSec
    if (same === true) {
      AuthSec = (
        <div className="for-hide">
          <p className="for-name">Jonas</p>
        </div>
      )
    }

    return (
      <div className="for-outer-container">
        <div>
          <h1 className="for-header">Show/Hide</h1>
          <div className="for-inner">
            <div className="button-margin">
              {' '}
              <button
                className="for-button"
                type="button"
                onClick={this.onAdding}
              >
                Show/Hide Firstname
              </button>
              {Auth}
            </div>
            <div className="button-margin">
              {' '}
              <button
                className="for-button"
                type="button"
                onClick={this.onAddSecond}
              >
                Show/Hide Lastname
              </button>
              {AuthSec}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default ShowHide
