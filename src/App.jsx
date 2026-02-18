import React from 'react'
import './App.css'
import Routing from './Components/Routing.jsx'
import { ToastContainer } from 'react-toastify'



function App() {

return (
<>


<Routing />
<ToastContainer 
autoClose={1000}
closeOnClick
theme="light"
pauseOnHover
/>





</>
)
}

export default App
