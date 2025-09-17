import React, {memo} from 'react' 
// It save components from re-rendering 
// Navbar.jsx and MemoMethod both are same for the memo.

const Navbar = ({Navlink}) => {
    console.log("i am re-rendering from Navbar new");
    
  return (
    <div>I am a {Navlink} of navbar</div>
  )
}

export default memo (Navbar);