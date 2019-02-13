import React from 'react';

const NavBar = ( {onClick , url } )=>{
    return(
        <div className="flex justify-end" >
            { url==='home' 
              ? <div className="f4 link  ba ph3 pv2 ma2 mr4 hover-bg-light-blue black " onClick={()=>onClick('signin')} >Sign Out</div>
              : (<div className="flex" > 
                    <div className="f4 link  ba ph3 pv2 ma2 mr4 hover-bg-light-blue black " onClick={()=>onClick('signin')} >Sign In</div>
                    <div className="f4 link  ba ph3 pv2 ma2 mr4 hover-bg-light-blue black " onClick={()=>onClick('createuser')} >Register</div>
                 </div>)
            }
        </div>
    )
}

export default NavBar;