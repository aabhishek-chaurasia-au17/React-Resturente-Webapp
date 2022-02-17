import React from 'react'

const NavBar = ({filterItem, menuList}) => {
  return (<>
    <nav className="navbar">
    <div className="btn-group" >
    {menuList.map((curElem, index) => {
         return <button className="btn-group__item" onClick={() => filterItem(`${curElem}`)} key={index}>{curElem}</button>
      })
    }
    </div>
    </nav>
    </>
  )
}

export default NavBar