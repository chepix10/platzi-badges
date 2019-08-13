import React from 'react'

import './styles/BadgeNew.css'
import header from '../images/platziconf-logo.svg'
import Badge from '../components/Badge'
import BadgeForm from '../components/BadgeForm'
import api from '../api'
import PageLoading from '../components/PageLoading'

class BadgeNew extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      loading: false,
      error: null,
      form: {
        firstName: '',
        lastName: '',
        email: '',
        jobTitle: '',
        twitter: ''
      }
    }
  }

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    })
  }

  handleAvatarChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        avatarUrl: e
      }
    })
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    this.setState({ loading: true, error: null })

    try {
      await api.badges.create(this.state.form)
      this.setState({ loading: false })

      this.props.history.push('/badges')
    } catch (err) {
      this.setState({ loading: false, error: err })
    }
  }

  render () {
    if (this.state.loading) {
      return <PageLoading />
    }
    return (
      <React.Fragment>
        <div className='BadgeNew__hero'>
          <img className='BadgeNew__hero-image img-fluid' src={header} alt='Logo' />
        </div>
        <div className='container'>
          <div className='row'>
            <div className='col-6'>
              <Badge onChange={this.handleAvatarChange}
                firstName={this.state.form.firstName || 'FIRST_NAME'}
                lastName={this.state.form.lastName || 'LAST_NAME'}
                jobTitle={this.state.form.jobTitle || 'JOB_TITLE'}
                twitter={this.state.form.twitter || 'twitter'}
                email={this.state.form.email || 'EMAIL'}
                avatarUrl='https://s.gravatar.com/avatar/d33af9e22f1fa895dac14f62c2644505?s=360' />
            </div>
            <div className='col-6'>
              <BadgeForm onChange={this.handleChange}
                onSubmit={this.handleSubmit} formValues={this.state.form}
                error={this.state.error} />
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default BadgeNew
