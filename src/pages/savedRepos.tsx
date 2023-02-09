import { Component, createSignal, For } from 'solid-js';
import ReposCard from "../components/ReposCard"
import { Repo } from '../components/ReposCard';
const getReposFromLS = JSON.parse(localStorage.getItem('savedrepos') || '[]')
const [save, setSave] = createSignal(getReposFromLS as Repo[]);

const savedRepos: Component = () => {
    return (
        <div>

            <h2>savedRepos</h2>
            <For each={save()}>
                {
                    (repo: Repo) => <ReposCard repo={repo} />
                }
            </For>

        </div>
    )
}
export {save,setSave}
export default savedRepos;