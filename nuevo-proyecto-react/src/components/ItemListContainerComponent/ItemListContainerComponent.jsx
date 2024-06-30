const ItemListComponent = ({ greeting }) => {
const greetingStyle = {
    color: 'white',
    fontSize: '2rem',
    width: '100vw',
    height: '92vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
}
  return (
    <div style={greetingStyle}>{greeting}</div>
  )
}

export default ItemListComponent