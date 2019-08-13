import React from 'react'
import Header from './Header'
import Gêneros from './Gêneros'
import NovoGênero from './NovoGênero'
import EditarGênero from './EditarGênero'
import Séries from './Séries'
import NovaSérie from './NovaSérie'
// import InfoSérie from './InfoSérie'

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import InfoSérie from './InfoSérie';

const Home = () => {
  return <h1>Home</h1>
}

function App() {
  return (
    <Router>
    	<div>
    	  <Header />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/gêneros' exact component={Gêneros} />
          <Route path='/gêneros/novo' exact component={NovoGênero} />
          <Route path='/gêneros/:id' exact component={EditarGênero} />
          <Route path='/séries' exact component={Séries} />
          <Route path='/séries/novo' exact component={NovaSérie} />
          <Route path='/séries/:id' exact component={InfoSérie} />
        </Switch>
    	</div>
    </Router>
  )
}
export default App
