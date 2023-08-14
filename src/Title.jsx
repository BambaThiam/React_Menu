import React from 'react'

const Title = ({ text }) => {
  return (
    <div className="title">
      {/* Title à supprimer si besoin */}
      <h1 className="titleBamba">"BAMBA - React Menu template"</h1>
      <h2>{text || 'Default Title'}</h2>
      <div className="title-underline"></div>
    </div>
  )
}
export default Title
