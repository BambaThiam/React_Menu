import { useState } from 'react'
import menu from './data'
import Menu from './Menu'
import Title from './Title'
import Categories from './Categories'

// construire les catégories
const tempCategories = menu.map((item) => item.category)
// console.log(tempCategories)
const tempSet = new Set(tempCategories) // récupère valeur unique
// console.log(tempSet)
const allCategories = ['all', ...tempSet]
//console.log(tempItems)
//Solution groupée
//const allCategories = ['all', new set(menu.map((item) => item.category))]

const App = () => {
  const [menuItems, setMenuItems] = useState(menu)
  const [categories, setCategories] = useState(allCategories)
  //console.log(categories)
  const filterItems = (category) => {
    //console.log(category)
    if (category === 'all') {
      setMenuItems(menu)
      return
    }
    const newItems = menu.filter((item) => item.category === category)
    setMenuItems(newItems)
  }
  return (
    <main>
      <section className="menu">
        <Title text="our menu" />
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  )
}
export default App
