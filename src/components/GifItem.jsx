import PropTypes from 'prop-types'

const GrifItem = ({url, title, id}) => {
  return (
    <div key={id} className="card">
      <img src={url} alt={title} />
      <p>{ title }</p>
    </div>
  )
}

export default GrifItem;

GrifItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}