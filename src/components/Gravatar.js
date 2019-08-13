import React from 'react'
import md5 from 'md5'

function Gravatar (props) {
  const email = props.email
  const hash = md5(email)
  const avatarUrl = `https://s.gravatar.com/avatar/${hash}?s=360`

  return (
    <img onLoad={() => props.onChange(avatarUrl)} className={props.className} src={avatarUrl} alt='Avatar' />
  )
}

export default Gravatar
