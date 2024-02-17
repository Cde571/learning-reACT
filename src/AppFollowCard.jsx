import { useState } from "react";

export function AppFollowCard({username,name,description=""}){
    const [isFollowing,setIsFollowing]=useState(false)
    
    const text= isFollowing ? 'Siguiendo': 'Seguir'
    const buttonClassName= isFollowing ? 'post-follow is-following'
    :'post-follow ';
    const handleClick= () =>{
        setIsFollowing(!isFollowing)
    }
    return (
        <article className='post'>
         <header className='post-header'>
             <img   
                    className='post-avatar' 
                    alt="microlink.io" 
                    src={`https://unavatar.io/${username}`} />
                 <div className='post-info'>
                     <strong>
                         {name}
                     </strong>
                     {/*agregar a que se dedica la persona por medio de una busqueda en internet y añadir su ocupacion*/}
                     <span className='post-location'>
                         @{username}
                         
                         {description}

                     </span>
                 
                 </div>
 
             
         </header>
         <button className={buttonClassName} onClick={handleClick}><strong>{text}</strong></button>
        </article>
     )
}