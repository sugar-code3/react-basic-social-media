import React from 'react'

export const Loader = () => {
  return (
<div className="d-flex justify-content-center">
  <div className="spinner-border" role="status" style={{width:"4rem",height:"4rem"}}>
    <span className="sr-only"></span>
  </div>
</div>
  )
}
