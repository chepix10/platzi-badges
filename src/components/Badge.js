import React from 'react'

import './styles/Badge.css'
import confLogo from '../images/badge-header.svg'

class Badge extends React.Component {
  render () {
    return (
      <div className='Badge'>
        <div className='Badge__header'>
          <img src={confLogo} alt='Logo de la conferencia' />
        </div>
        <div className='Badge__section-name'>
          <img className='Badge__avatar' src='https://s.gravatar.com/avatar/d33af9e22f1fa895dac14f62c2644505?s=80' alt='Avatar' />
          <h1>
            José <br />Morales
          </h1>
        </div>
        <div className='Badge__section-info'>
          <h3>Frontend Engineer</h3>
          <div>@Iron_Chepe</div>
        </div>
        <div className='Badge__footer'>
        #platziconf
        </div>
      </div>
    )
  }
}

export default Badge
