import { useState } from 'react'

const Jobs = ({ job, title, applyUrl, description }) => {
  const [readMore, setReadMore] = useState(false)

  const companyName = job.company.name
  const commitment = job.commitment.title

  return (
    <article className='single-job'>
      <div>
        <h1 className='center-title'>{companyName}</h1>
        <div className='underline'></div>
      </div>

      <h3>{title}</h3>

      {readMore ? description : `${description.substring(0, 300)}...`}
      <button className='btn' onClick={() => setReadMore(!readMore)}>
        {readMore ? 'Show less' : 'Read more'}
      </button>
      <div className='flex-thing'>
        <p>
          Please apply within:{' '}
          <a href={applyUrl} target='__blank'>
            {applyUrl}
          </a>
          <p>{commitment}</p>
        </p>
      </div>
    </article>
  )
}

export default Jobs
