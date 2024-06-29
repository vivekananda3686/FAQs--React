// Write your code here.
import './index.css'

const FaqItem = props => {
  const {list, key, getTheAnswer, OpenedOrNot} = props
  const {questionText, answerText, id} = list

  const answerPlease = () => {
    getTheAnswer(id)
  }

  const displayAnswer = () => {
    if (OpenedOrNot) {
      return (
        <div>
          <hr />
          <p className="para">{answerText}</p>
        </div>
      )
    }
  }

  return (
    <div className="list-item">
      <li>
        <div className="list-item-cont">
          <div>
            <h1 className="question">{questionText}</h1>
          </div>
          <div>
            {OpenedOrNot ? (
              <button onClick={answerPlease}>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png"
                  alt="minus"
                />
              </button>
            ) : (
              <button onClick={answerPlease}>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png"
                  alt="plus"
                />
              </button>
            )}
          </div>
        </div>
        {displayAnswer()}
      </li>
    </div>
  )
}

export default FaqItem
