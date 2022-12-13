

const GrifItem = ({url, title, id}) => {
  return (
    <div key={id} className="card">
      <img src={url} alt={title} />
      <p>{ title }</p>
    </div>
  )
}

export default GrifItem;