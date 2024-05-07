import React from 'react'

const Progress_bar = ({ bgcolor, progress, height }) => {

  const Parentdiv = {
    height: '15px',
    width: '95%',
    backgroundColor: 'whitesmoke',
    borderRadius: 40,
    margin: 50
  }

  const Childdiv = {
    height: '100%',
    width: `${progress}%`,
    backgroundColor: bgcolor,
    borderRadius: 40,
    textAlign: 'right'
  }

  return (
    <div style={Parentdiv}>
      <div style={Childdiv}>
      </div>
    </div>
  )
}

export default Progress_bar