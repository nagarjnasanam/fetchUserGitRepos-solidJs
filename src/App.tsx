import { Component, createEffect,createSignal } from 'solid-js';
import { Routes, Route } from 'solid-app-router';
import Nav from './components/Nav';
import Home from './pages/Home';
import Fav from './pages/savedRepos';
const [username,setUsername] = createSignal('nagarjnasanam')
  const [repos,setRepos] =createSignal([])
const App: Component = () => {
  
  createEffect(async()=>{
    const res = await fetch(`https://api.github.com/users/${username()}/repos?sort=created`)
    // const data = await res.json()
    setRepos(await res.json())
    // console.log(repos())
  })
  return (
    <div class='container'>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/fav' element={<Fav />} />
      </Routes>
    </div>
  );
};
export {username,setUsername,repos}

export default App;
