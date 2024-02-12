import './App.css'
export function App() {
    return (
       <article className='post'>
        <header className='post-header'>
            <img className='post-avatar' alt="microlink.io" src="https://unavatar.io/microlink/microlink.io" />
                <div className='post-info'>
                    <strong>
                        microlink.io
                    </strong>
                    <span className='post-location'>
                        @microlink.io
                    </span>
                
                </div>

            
        </header>
        <button className='post-follow'>Follow</button>
       </article>
    )
}