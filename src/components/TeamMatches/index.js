// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

class TeamMatches extends Component {
  state = {teamMatchData: [], isLoading: true}

  componentDidMount() {
    this.getTeamMatchesData()
  }

  getLatestMatchDetails = data => ({
    umpires: data.umpires,
    result: data.result,
    manOfTheMatch: data.man_of_the_match,
    id: data.id,
    date: data.date,
    venue: data.venue,
    competingTeam: data.competing_team,
    competingTeamLogo: data.competing_team_logo,
    firstInnings: data.first_innings,
    secondInnings: data.second_innings,
    matchStatus: data.match_status,
  })

  getRecentMatchDetails = data => {
    const formattedRecentMatchDetails = data.map(each => ({
      umpires: each.umpires,
      result: each.result,
      manOfTheMatch: each.man_of_the_match,
      id: each.id,
      date: each.date,
      venue: each.venue,
      competingTeam: each.competing_team,
      competingTeamLogo: each.competing_team_logo,
      firstInnings: each.first_innings,
      secondInnings: each.second_innings,
      matchStatus: each.match_status,
    }))

    return formattedRecentMatchDetails
  }

  getTeamMatchesData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()

    const updatedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: this.getLatestMatchDetails(data.latest_match_details),
      recentMatchesDetails: this.getRecentMatchDetails(data.recent_matches),
    }

    this.setState({teamMatchData: updatedData, isLoading: false})
  }

  render() {
    const {teamMatchData, isLoading} = this.state
    const {
      teamBannerUrl,
      latestMatchDetails,
      recentMatchesDetails,
    } = teamMatchData

    return (
      <div className="team-matches-app-cont">
        {isLoading ? (
          <div>
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div className="team-matches-main-cont">
            <img src={teamBannerUrl} alt="team banner" className="banner-img" />
            <p className="sub-heading">Latest Matches</p>
            <LatestMatch latestMatchData={latestMatchDetails} />
            <ul className="recent-match-cont">
              {recentMatchesDetails.map(each => (
                <MatchCard recentMatchData={each} key={each.id} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default TeamMatches
