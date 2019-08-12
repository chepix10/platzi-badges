import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css'

import './global.css'
import Badge from './components/Badge'

const container = document.getElementById('app')

ReactDOM.render(<Badge
  firstName='José'
  lastName='Morales'
  jobTitle='Frontend Engineer'
  twitter='Iron_Chepe'
  avatarUrl='https://s.gravatar.com/avatar/d33af9e22f1fa895dac14f62c2644505?s=360' />,
container)
