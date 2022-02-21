import './InsultPage.css'
import React from 'react'
import axios from 'axios'

const InsultPage = () => {

  const [insult, setInsult] = React.useState([])

  const url = "https://evilinsult.com/generate_insult.php?lang=en&type=json"

  React.useEffect(() => {
      axios.get(url)
      .then((res) => {
          setInsult(res.data.insult)
          console.log(res.data.insult)
      })
  },[])

  const getInsult = () => {
    axios.get(url)
    .then((res) => {
        setInsult(res.data.insult)
    })
  }

  return (
    <div className='insult_container'>
        <div className='insult__block'>
            {insult}
        </div>
        <button className='insult__btn'
            onClick={getInsult}
        >
          GENERATE INSULT
        </button>
    </div>
  )
}

export default InsultPage