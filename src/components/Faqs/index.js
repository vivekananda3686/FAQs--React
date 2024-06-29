// Write your code here.
import {Component} from 'react'
import FaqItem from '../FaqItem'
import './index.css'

class Faqs extends Component {
  state = {
    anSeenId: null,
  }

  getTheAnswer = val => {
    const { anSeenId} = this.state
    this.setState(prevState => ({
       anSeenId: prevState. anSeenId === val ? null : val,
    }))
  }

  render() {
    const {faqsList} = this.props
    const { anSeenId} = this.state
    return (
      <div className="main-container">
        <div className="card-container">
          <h1>FAQs</h1>
          <ul>
            {faqsList.map(each => (
              <FaqItem
                list={each}
                key={each.id}
                getTheAnswer={this.getTheAnswer}
                OpenedOrNot={ anSeenId === each.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
