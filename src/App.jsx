import { AppFollowCard } from './AppFollowCard'
import './index.css'
export function App() {
    return (
        <section className="App">
        <AppFollowCard isFollowing={true} username="mark" name="microlink.io" />
        <AppFollowCard isFollowing={true} username="michaeljacson" name="Michael Jacson" />
        <AppFollowCard isFollowing={false} username="elonmusk" name="Elon Muak" />
        <AppFollowCard isFollowing={true} username="cde57" name="Cde57" />
        <AppFollowCard isFollowing={false} username="esperanzagomez" name="Esperanza Gomez" />
        </section>
    )
}