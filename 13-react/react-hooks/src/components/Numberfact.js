import React, {useState, useEffect} from 'react';
import axios from 'axios';

function Numberfact() {
  const [fact, setFact] = useState('');

  useEffect(() => {
    axios.get('http://numbersapi.com/random/trivia').then((result) => {
      setFact(result.data); // this should show a fact in the console.
    })
  }, []); // empty array means "run this function only once"

  return(
    <div>
      Numberfact coming soon
    </div>
  )
}

export default Numberfact
