import React from 'react';

function Info() {
      return (
            <div className='infoComponent'>
                  <img src="https://avatars.githubusercontent.com/u/55272383?s=400&u=c6f90621ba4c1b834c87ac14530097df91fc9e08&v=4" alt='profile' />
                  <div className="profileInfo">
                        <h1>David Cioato</h1>
                        <h3>Frontend Developer</h3>
                        <a href="https://github.com/cioatodavid"><h6>davidcioato.website</h6></a>
                        <button><i class="ri-mail-fill"></i> Email</button>
                  </div>
            </div>
      );
}

export default Info