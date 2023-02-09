import { Component, onMount, For,createEffect } from 'solid-js';
import { repos } from '../App';
import { Repo } from '../components/ReposCard';
import { username, setUsername } from '../App';
import ReposCard from '../components/ReposCard';
const Home: Component = () => {
    const fetchUserRepos = (event: Event) => {
        event.preventDefault()
        const getUserName = document.querySelector('#getUserName') as HTMLInputElement
        console.log('getUserName', getUserName.value)
        setUsername(getUserName.value)
        // console.log('repos',repos())

    }
    onMount(() => {
        // console.log(repos())
    })
    createEffect(() => {
        console.log(repos())
    })
    return (
        <div>
            <form class='mb-3' ></form>
            <input type='text' class='p-1 align-middle' id='getUserName' name='getUserName' placeholder='enter username' onChange={(event) => fetchUserRepos(event)} />
            <button onClick={fetchUserRepos} class='btn btn-dark ms-3 w-auto'>Submit</button>
            <p>{username()}</p>
            {/* <button onClick={fetchUserRepos} class='btn btn-primary ms-3 '>click</button> */}
            <For each={repos()}>
                {
                    (repo: Repo) => <ReposCard repo={repo} />
                }
            </For>
        </div>
    )
}

export default Home;