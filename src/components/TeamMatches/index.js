import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import {Component} from 'react'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

class TeamMatches extends Component {
  state = {list: [], status: true}

  componentDidMount() {
    // console.log('harinath')
    const {match} = this.props
    const {params} = match
    console.log(match)
    const {id} = params
    //  console.log('harinath')
    // console.log(this.props)
    this.getResult(id)
  }

  getResult = async id => {
    // console.log('harinath')
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    console.log(data)
    const formatData = {
      teamUrl: data.team_banner_url,
      latest: data.latest_match_details,
      recentMatch: data.recent_matches,
    }
    this.setState({list: formatData, status: false})
  }

  render() {
    // console.log('harinath')
    const {list, status} = this.state
    const {teamUrl, latest, recentMatch} = list
    return status ? (
      <div testid="loader">
        <Loader type="Oval" color="#ffffff" height={50} width={50} />
      </div>
    ) : (
      <div className="team-match">
        <img src={teamUrl} alt="team banner" className="teamPic" />
        {status ? '' : <LatestMatch latest={latest} />}
        {status ? (
          ''
        ) : (
          <ul className="card-total">
            {recentMatch.map(each => (
              <MatchCard key={each.id} recentList={each} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default TeamMatches
