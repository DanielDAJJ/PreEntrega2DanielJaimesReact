import NavBarComponent from './components/NavBarComponent/NavBarComponent';
import ItemListComponent from './components/ItemListComponent/ItemListComponent';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <NavBarComponent/>
      <ItemListComponent greeting={"Hola que hace"}/>
    </>
  )
}

export default App
