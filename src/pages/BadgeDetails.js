import React from 'react'
import { Link } from 'react-router-dom'

import './styles/BadgeDetails.css'
import confLog from '../images/platziconf-logo.svg'
import Badge from '../components/Badge'
import DeleteBadgeModal from '../components/DeleteBadgeModal'

function BadgeDetails (props) {
  const { id, firstName, lastName, email, avatarUrl, twitter, jobTitle } = props.badge

  return (
    <React.Fragment>
      <div className='BadgeDetails__hero'>
        <div className='container'>
          <div className='row'>
            <div className='col-6'>
              <img src={confLog} alt='Logo de la Conferencia' />
            </div>
            <div className='.BadgeDetails__hero-attendant-name  col-6' >
              <h1>{firstName} {lastName}</h1>
            </div>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <Badge firstName={firstName}
              lastName={lastName}
              email={email}
              jobTitle={jobTitle}
              avatarUrl={avatarUrl}
              twitter={twitter}
              onChange={props.handleChange} />
          </div>
          <div className='col' >
            <h2>Actions</h2>
            <div>
              <Link className='btn btn-primary mb-4' to={`/badges/${id}/edit`} >
                Edit
              </Link>
            </div>
            <div>
              <button onClick={props.onOpenModal} className='btn btn-danger'>Delete</button>
              <DeleteBadgeModal isOpen={props.modalIsOpen} onCloseModal={props.onCloseModal}
                onDeleteBadge={props.onDeleteBadge} />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default BadgeDetails
