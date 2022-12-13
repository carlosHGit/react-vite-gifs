import React, { useState } from 'react'
import {AddCategory, GifGrid} from './components/index'

const GiftExpertApp = () => {

  const [categories, setCategories] = useState(['One Punch', 'Dragon ball Z' ])

  const onAddCategory = (newCategory) => {
    if(categories.includes(newCategory))  return;
    setCategories([newCategory, ...categories, ])
  }

  return (
    <>
      <h1>GiftExpertApp</h1>
      <AddCategory onAddCategory={onAddCategory} /> 
      {
        categories.map(category => (
          <GifGrid key={category} category={category}/>
        ))
      }
    </>
  )
}

export default GiftExpertApp