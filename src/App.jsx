// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { Route,Routes,Link } from 'react-router-dom'
import './App.css'
import USA_Map from './pages/USA_Map'

function Home(){
  return <h1>Home Page</h1>
}

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
   <Routes>
        <Route
          path="/"
          element={
            <>
              <h1 className='title'>Predicting Medicare Payment</h1>
              <ul className='authors'>
                <li>Daniel Figueroa</li>
                <li>Zak Holt</li>
                <li>Ayaam Choudhary</li>
              </ul>

              <Link to="/about">
                <button>Visualize US Map</button>
              </Link>
            </>
          }
        />

        <Route path="/about" element={<USA_Map />} />
    </Routes>
       
    </>
  )
}

export default App
