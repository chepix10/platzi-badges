import React from 'react'
import { Link } from 'react-router-dom'

import './styles/BadgeDetails.css'
import confLog from '../images/platziconf-logo.svg'
import PageLoading from '../components/PageLoading'
import PageError from '../components/PageError'
import Badge from '../components/Badge'
import api from '../api'

class BadgeDetails extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      loading: true,
      error: null,
      data: undefined
    }
  }

  componentDidMount () {
    this.fetchData()
  }

  fetchData = async () => {
    this.setState({ loading: true, error: null })

    try {
      const data = await api.badges.read(this.props.match.params.badgeId)
      this.setState({ loading: false, data })
    } catch (error) {
      this.setState({ loading: false, error })
    }
  }

  handleChange = () => {

  }

  render () {
    if (this.state.loading) {
      return <PageLoading />
    }

    if (this.state.error) {
      return <PageError error={this.state.error} />
    }

    const { id, firstName, lastName, email, avatarUrl, twitter, jobTitle } = this.state.data

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
                onChange={this.handleChange} />
            </div>
            <div className='col' >
              <h2>Actions</h2>
              <div>
                <Link className='btn btn-primary mb-4' to={`/badges/${id}/edit`} >
                    Edit
                </Link>
              </div>
              <div>
                <button className='btn btn-danger'>Delete</button>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default BadgeDetails
