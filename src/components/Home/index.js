import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import {Component} from 'react'
import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {matchCardList: [], status: true}

  componentDidMount() {
    this.matchCard()
  }

  matchCard = async () => {
    const response = await fetch(`https://apis.ccbp.in/ipl`)

    const data = await response.json()

    const formatData = data.teams.map(each => ({
      name: each.name,
      id: each.id,
      url: each.team_image_url,
    }))

    this.setState({matchCardList: formatData, status: false})
  }

  render() {
    const {matchCardList, status} = this.state

    return status ? (
      <div testid="loader">
        <Loader type="Oval" color="#ffffff" height={50} width={50} />
      </div>
    ) : (
      <div className="bg-cont">
        <div className="title">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="ipl logo"
          />
          <h1>IPL DASHBOARD</h1>
        </div>
        <ul className="cardList">
          {matchCardList.map(each => (
            <TeamCard key={each.id} matchList={each} />
          ))}
        </ul>
      </div>
    )
  }
}

export default Home
