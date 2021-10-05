// import {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {matchList} = props
  const {id, url, name} = matchList

  return (
    <Link to={`/team-matches/${id}`}>
      <li className="card">
        <img src={url} className="image" alt={name} />
        <p>{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
