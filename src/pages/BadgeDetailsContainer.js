import React from 'react'

import PageLoading from '../components/PageLoading'
import PageError from '../components/PageError'
import api from '../api'
import BadgeDetails from './BadgeDetails'

class BadgeDetailsContainer extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      loading: true,
      error: null,
      data: undefined,
      modalIsOpen: false
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

  handleOpenModal = () => {
    this.setState({
      modalIsOpen: true
    })
  }

  handleCloseModal = () => {
    this.setState({
      modalIsOpen: false
    })
  }

  handleDeleteBadge = async () => {
    this.setState({ loading: true, error: null })

    try {
      await api.badges.remove(this.props.match.params.badgeId)
      this.props.history.push('/badges')
    } catch (error) {
      this.setState({ loading: false, error })
    }
  }

  render () {
    if (this.state.loading) {
      return <PageLoading />
    }

    if (this.state.error) {
      return <PageError error={this.state.error} />
    }

    return (
      <BadgeDetails badge={this.state.data} handleChange={this.handleChange}
        onCloseModal={this.handleCloseModal} onOpenModal={this.handleOpenModal}
        modalIsOpen={this.state.modalIsOpen} onDeleteBadge={this.handleDeleteBadge} />
    )
  }
}

export default BadgeDetailsContainer
