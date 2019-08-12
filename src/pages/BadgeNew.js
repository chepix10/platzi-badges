import React from 'react'

import './styles/BadgeNew.css'
import header from '../images/badge-header.svg'
import Navbar from '../components/Navbar'
import Badge from '../components/Badge'
import BadgeForm from '../components/BadgeForm'

class BadgeNew extends React.Component {
  render () {
    return (
      <div>
        <Navbar />
        <div className='BadgeNew__hero'>
          <img className='img-fluid' src={header} alt='Logo' />
        </div>
        <div className='container'>
          <div className='row'>
            <div className='col-6'>
              <Badge firstName='José'
                lastName='Morales'
                jobTitle='Salesforce Developer'
                twitter='Iron_Chepe'
                avatarUrl='https://s.gravatar.com/avatar/d33af9e22f1fa895dac14f62c2644505?s=360' />
            </div>
            <div className='col-6'>
              <BadgeForm />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default BadgeNew
