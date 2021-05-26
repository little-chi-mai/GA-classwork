import axios from 'axios';

const Github = {
  getUserInfo: function (username) {
    // return the Promise so that <Profile /> can attach the .then it needs.
    return axios.get(`https://api.github.com/users/${username}?client_id=4ec1b8f9c149f7c46ffd&client_secret=a05ec287c29ebd9633131b5a08298530709130e9`)
  },

  getUserRepos: function (username) {
    return axios.get(`https://api.github.com/users/${username}/repos?client_id=4ec1b8f9c149f7c46ffd&client_secret=a05ec287c29ebd9633131b5a08298530709130e9`)
  },
}

export default Github;
