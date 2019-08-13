import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

import './styles/BadgesList.css'

class BadgesList extends React.Component {
  render () {
    if (this.props.badges.length === 0) {
      return (
        <div>
          <h3>No badges were found</h3>
          <Link className='btn btn-primary' to='/badges/new'>
            Create new badge
          </Link>
        </div>
      )
    }
    return (
      <ul className='list-unstyled'>
        {this.props.badges.map((badge) => {
          return (
            <li className='BadgesList__item shadow' key={badge.id}>
              <Link className='text-reset text-decoration-none' to={`/badges/${badge.id}/edit`}>
                <div className='card'>
                  <div className='card-body'>
                    <div className='BadgesList__info'>
                      <img className='BadgesList__avatar' src={badge.avatarUrl} alt='Avatar' />
                      <ul className='list-unstyled'>
                        <li className='font-weight-bold'>
                          {badge.firstName} {badge.lastName}
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faTwitter} />
                          @{badge.twitter}
                        </li>
                        <li>{badge.jobTitle}</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Link>
            </li>
          )
        })}
      </ul>
    )
  }
}

export default BadgesList
