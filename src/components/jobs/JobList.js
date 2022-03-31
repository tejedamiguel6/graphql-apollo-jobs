import Jobs from './Jobs'
import Spinner from '../Loading'
import { useQuery, gql } from '@apollo/client'

const JOBS_QUERY = gql`
  {
    jobs {
      id
      company {
        name
      }
      title
      description
      applyUrl
      slug
      commitment {
        title
      }
    }
  }
`

const JobList = () => {
  const { data, loading, error } = useQuery(JOBS_QUERY)
  if (loading) {
    return <Spinner />
  }
  if (error) {
    console.log(error, 'theres an error')
  }

  return (
    <div className='jobs'>
      {data.jobs.map((job) => (
        <Jobs key={job.id} job={job} {...job} />
      ))}
    </div>
  )
}

export default JobList
