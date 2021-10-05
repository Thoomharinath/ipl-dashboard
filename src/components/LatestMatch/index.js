import './index.css'

const LatestMatch = props => {
  const {latest} = props

  const expandList = latest1 => ({
    umpires: latest1.umpires,
    result: latest1.result,
    manOfMatch: latest1.man_of_the_match,
    date: latest1.date,
    venue: latest1.venue,
    competingTeam: latest1.competing_team,
    competingTeamLogo: latest1.competing_team_logo,
    firstInnings: latest1.first_innings,
    secondInnings: latest1.second_innings,
    matchStatus: latest1.match_status,
  })

  const getDetails = expandList(latest)
  const {
    umpires,
    result,
    manOfMatch,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
  } = getDetails
  return (
    <div className="latest-card">
      <div>
        <p>{competingTeam}</p>
        <p>{date}</p>
        <p>{venue}</p>
        <p>{result}</p>
      </div>
      <div>
        <img src={competingTeamLogo} alt={`latest match ${competingTeam}`} />
      </div>
      <div>
        <p>First Innings</p>
        <p>{firstInnings}</p>
        <h1>Second Innings</h1>
        <p>{secondInnings}</p>
        <p>Man Of The Match</p>
        <p>{manOfMatch}</p>
        <h1>Umpires</h1>
        <p>{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
