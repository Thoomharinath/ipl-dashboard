import './index.css'

const MatchCard = props => {
  const {recentList} = props

  const expandList = latest1 => ({
    umpires: latest1.umpires,
    result: latest1.result,
    manOfMatch: latest1.man_of_match,
    date: latest1.date,
    venue: latest1.venue,
    competingTeam: latest1.competing_team,
    competingTeamLogo: latest1.competing_team_logo,
    firstInnings: latest1.first_innings,
    secondInnings: latest1.second_innings,
    matchStatus: latest1.match_status,
  })

  const getDetails = expandList(recentList)
  const {result, competingTeam, competingTeamLogo, matchStatus} = getDetails
  return (
    <li className="card-cont">
      <img
        src={competingTeamLogo}
        alt={`"competing team ${competingTeam}"`}
        className="image"
      />
      <p>{competingTeam}</p>
      <p>{result}</p>
      <p>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
