import React from 'react'
import Stripe from './Stripe'

function Stripes() {
    var data = [
        {
            url: "",
            number: "",
            title: "CSSDesignAwards"

        }
    ]
  return (
    <div>
      <Stripe />
    </div>
  )
}

export default Stripes
