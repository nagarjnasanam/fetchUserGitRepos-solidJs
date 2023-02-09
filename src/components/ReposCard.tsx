import { Component, createSignal } from "solid-js";
import savedRepos, { setSave, save } from "../pages/savedRepos"

export type Repo = {
    id: string,
    html_url: string,
    name: string,
    description: string
    stargazers_count: string,
    owner: {
        login: string,

    }
}
const saveRepo = (repo: Repo) => {
    setSave([repo, ...save()])

    window.localStorage.setItem('savedrepos', JSON.stringify(save()))
}
const UnSaveRepo = (repoId: string) => {
    const nextState = save()?.filter(item => item.id !== repoId)
    setSave(nextState)
}
interface Props {
    repo: Repo
}
const [flag, setFlag] = createSignal(true)
const repoIsSaved = (repoId: string) => {
    const repo = save()?.filter(item => item.id === repoId)
    return repo?.length > 0
}
const ReposCard: Component<Props> = ({ repo }) => {
    return (
        <div class="card">
            <div class="card-header"> &#11088; stars:{repo.stargazers_count} </div>
            <div class="card-body">
                <a href={repo.html_url} class="h4 card-title text-decoration-none" target="_blank" rel="noreferrer">
                    <strong> {repo.owner?.login}</strong>/{repo.name}
                </a>
                <p class="card-text">{repo.description}</p>

                {repoIsSaved(repo.id) ? (
                    <button class="btn btn-danger" onClick={() => UnSaveRepo(repo.id)}>Un Save</button>

                ) : (
                    <button class="btn btn-primary" onClick={() => saveRepo(repo)}>Save</button>

                )
                }

            </div>
        </div>
    )
}

export default ReposCard