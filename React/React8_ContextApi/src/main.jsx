
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ShopeContext from './context/ShopeContext.jsx'

createRoot(document.getElementById('root')).render(

   <ShopeContext>
     <App />
   </ShopeContext>
   

)
