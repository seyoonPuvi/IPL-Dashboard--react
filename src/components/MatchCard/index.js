// Write your code here
import './index.css'

const MatchCard = props => {
  const {recentMatchData} = props
  const {
    result,

    competingTeam,
    competingTeamLogo,

    matchStatus,
  } = recentMatchData

  const statusClassName = matchStatus === 'Won' ? 'wonStatus' : 'loseStatus'

  return (
    <li className="recent-match-info-card">
      <img
        src={competingTeamLogo}
        className="team-logo"
        alt={`competing team ${competingTeam}`}
      />
      <p className="competing-team">{competingTeam}</p>
      <p className="recent-result">{result}</p>
      <p className={statusClassName}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
