import React, {Component} from 'react'
import axios from 'axios'

// const SERVER_URL = 'http://localhost:3000/secrets.json'
const SERVER_URL = 'http://d598fe4eaead.ngrok.io/secrets.json'

class Secrets extends Component {
  constructor() {
    super();
    this.state = {
      secrets: []
    }
    this.saveSecret = this.saveSecret.bind(this);

    
    
  }

  componentDidMount() {
    // Polling for "live" update:
    const fetchSecrets = () => {
      axios.get(SERVER_URL).then((response) => {
        this.setState({secrets: response.data});
        setTimeout(fetchSecrets, 4000); // recursive alternative to setInterval
      })
    };
    fetchSecrets();
  }

  saveSecret(content) {
    axios.post(SERVER_URL, {content: content}).then((response) => {
      // Add the new secret to the existing collection of secrets in `state`
      this.setState({secrets: [...this.state.secrets, response.data]})
      // spread operator, `...` flat() out the array
    })
  }

  render() {
    return(
      <div>
        <h1>Tell me all your secrets</h1>
        <SecretForm onSubmit={this.saveSecret}/>
        <SecretsList secrets={this.state.secrets}/>
      </div>
    )
  }
}

// Class is good when you have states
class SecretForm extends Component {
  constructor() {
    super();
    this.state = {content: ''};
    this._handleChange = this._handleChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleChange(event) {
    this.setState({content: event.target.value});
  }

  _handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(this.state.content);
    this.setState({content: ''});
  }

  render() {
    return (
      <form onSubmit={this._handleSubmit}>
        <textarea onChange={this._handleChange} value={this.state.content}/>
        <input type="submit" value="Tell"/>
      </form>
    )
  }
}

const SecretsList = (props) => {
  return (
    <div>
      {props.secrets.map((s) => <p key={s.id}>{s.content}</p>)}
    </div>
  )
}

export default Secrets
