import React from 'react'

const FAQ = ({curr,active,onToggle}) => {
    const {question,answer} = curr;
  return (
    <>
      <li className='acc-list'>
        <div className='acc-content'>
          <h3>{question}</h3>
          <div className={`answer-wrapper ${active ? 'open' : ''}`}>
            <p>{answer}</p>
          </div>
        </div>
        <button className={active? 'close-btn' : ''} onClick={onToggle}>{active? "Close" : "Show" }</button>

      </li>
    </>
  )
}

export default FAQ
