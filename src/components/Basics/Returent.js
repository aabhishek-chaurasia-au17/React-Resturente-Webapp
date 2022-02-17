import React,{useState} from 'react'
import './style.css'
import Menu from './MenuApi'
import MenuCard from './MenuCard'
import NavBar from './NavBar'

const uniqueList = [...new Set(Menu.map((curElem) => {
    const {category} = curElem || {}
    return category
})), "All"]

const Returent = () => {
    const [menudata, setMenuData] = useState(Menu)
    const [menuList, setMenuList] = useState(uniqueList)

    function filterItem(category) {

        if(category === "All"){
            setMenuData(Menu)
            return;
        }

        const updatedList = Menu.filter((element) => {
            return element.category === category
        })
        setMenuData(updatedList)
    }

  return <>
    <NavBar filterItem={filterItem} menuList={menuList}/>
    <MenuCard menudata={menudata}/>
  </>
  
}

export default Returent