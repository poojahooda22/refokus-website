import React from 'react'
import Stripe from './Stripe'

function Stripes() {
    var data = [
        {
            url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd75d563689fd_Awwards-logotype-2018%201.svg",
            number: "15",
        },
        {
            url: "https://assets-global.website-files.com/6334198f23…3689fb_css-design-awards-logos-id1L9L8Yvp%201.svg",
            number: "15",
        },
        {
            url: "",
            number: "15",
        }
    ]
  return (
    <div>
      <Stripe />
    </div>
  )
}

export default Stripes
