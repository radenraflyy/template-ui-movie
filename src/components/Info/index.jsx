// eslint-disable-next-line react/prop-types
const Info = ({ movies }) => {
  return (
    <p className="num-results">
      Found <strong>{movies.length}</strong> results
    </p>
  )
}

export default Info
