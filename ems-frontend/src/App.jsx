import './App.css'
import EmployeeComponent from './component/EmployeeComponent'
import FooterComponent from './component/FooterComponent'
import HeaderComponent from './component/HeaderComponent'
import ListEmployeeComponent from './component/ListEmployeeComponent'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
function App() {
  
  return (
    <>
    <BrowserRouter>
     <HeaderComponent/>
     <Routes>
      
      {/* // http:localost:3000 */}
        <Route path='/' element = { <ListEmployeeComponent/>}></Route>
     {/* // http:localhost:3030/employees */}
     <Route path='/employees' element = {<ListEmployeeComponent/> } ></Route>
      
      {/* // http:localhost:3030/add-employees */}
     <Route path='/add-employee' element = {<EmployeeComponent/> } ></Route>
    
    {/* // http:localhost:3030/edit-employee/1 */}
     <Route path='/edit-employee/:id' element={<EmployeeComponent/>}></Route>
    
     </Routes>
      <FooterComponent/>
      </BrowserRouter>
    </>
  )
}

export default App
