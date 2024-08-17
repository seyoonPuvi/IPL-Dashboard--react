// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestMatchData} = props

  const {
    umpires,
    result,
    manOfTheMatch,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
  } = latestMatchData

  return (
    <div className="latest-match-cont">
      <div className="result-cont">
        <p className="competting-team">{competingTeam}</p>
        <p className="date">{date}</p>
        <p className="venue">{venue}</p>
        <p className="result">{result}</p>
      </div>
      <img
        src={competingTeamLogo}
        alt={`latest match ${competingTeam}`}
        className="competting-img"
      />
      <div className="latest-match-info">
        <div className="innings-cont">
          <p className="ininngs-info-heading">First Innings</p>
          <p className="data">{firstInnings}</p>
        </div>
        <div className="innings-cont">
          <p className="ininngs-info-heading">Second Innings</p>
          <p className="data">{secondInnings}</p>
        </div>

        <div className="innings-cont">
          <p className="ininngs-info-heading">Man Of The Match</p>
          <p className="data">{manOfTheMatch}</p>
        </div>
        <div className="innings-cont">
          <p className="ininngs-info-heading">Umpires</p>
          <p className="data">{umpires}</p>
        </div>
      </div>
    </div>
  )
}
export default LatestMatch
