import React, {Component} from 'react';
import Github from '../github' // library

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      user: {},
      repos: []
    }
  }

  // React lifecycle method
  componentDidMount() {
    const {username} = this.props.match.params; // destructuring
    Github.getUserInfo(username).then((result) => {
      this.setState({user: result.data})
    });
    Github.getUserRepos(username).then((result) => {
      this.setState({repos: result.data});
    });
  }

  render() {
    return (
      <div>
        <h1>Profile for {this.props.match.params.username}</h1>
        <UserInfo user={this.state.user}/>
        <Repositories repos={this.state.repos}/>
      </div>

    )
  }
}

const UserInfo = (props) => {
  console.log('props for user', props.user);
  if (props.user === null) {
    return (<div>Loading..</div>)
  }

  const {login, bio, followers, followings, public_repos, public_gists} = props.user

  return(
    <div>
      <h3>Stats for {login}</h3>
      <p>Bio: {bio}</p>
      <p>Followers: {followers}</p>
      <p>Followings: {followings}</p>
      <p>Public repos: {public_repos}</p>
      <p>Public gists: {public_gists}</p>
    </div>
  )
}

const Repositories = (props) => {
  if (props.repos === null) {
    return (<div>Loading..</div>)
  }

  const userRepos = props.repos.map((r) => (
    <li key={r.id}>
      <a href={r.html_url} target="_blank">{ r.name }</a>
    </li>
  )) // () explicit return, not {}

  return(
    <div>
      <p>{userRepos}</p>
    </div>
  )
}

export default Profile;
