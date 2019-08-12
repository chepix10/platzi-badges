import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

import './styles/BadgesList.css'

class BadgesList extends React.Component {
  render () {
    return (
      <ul className='list-unstyled'>
        {this.props.badges.map((badge) => {
          return (
            <li className='BadgesList__item shadow' key={badge.id}>
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
                        <a className='BadgesList__info-twitter' href={'https://twitter.com/' + badge.twitter}>
                          @{badge.twitter}
                        </a>
                      </li>
                      <li>{badge.jobTitle}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
          )
        })}
      </ul>
    )
  }
}

export default BadgesList
