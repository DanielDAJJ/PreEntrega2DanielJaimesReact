import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

const CartWidgetComponent = () => {
    const customStyles = {fontSize: "1.25rem"}
  return (
    <div>
        <FontAwesomeIcon icon={faCartPlus} style={customStyles}/>
        <span style={customStyles}>0</span>
    </div>
  )
}

export default CartWidgetComponent