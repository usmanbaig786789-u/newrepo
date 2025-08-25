import React from 'react'

function Alert(props) {
  const Capitaliz = (word)=>{
    let lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() +lower.slice(1)

  }
  return (
    props.alert &&
    <div className="alert-1 alert alert-warning alert-dismissible fade show" role="alert">
  <strong>{Capitaliz(props.alert.type) }</strong>{props.alert.msg}
</div>    

  )
}

export default Alert
