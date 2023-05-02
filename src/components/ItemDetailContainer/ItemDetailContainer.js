import './ItemDetailContainer.css'
import React, { useEffect, useState } from 'react'
import { getProductById } from '../Data/Data'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'


const ItemDetailContainer = () => {
  const [ product, setProduct ] = useState(null)

  const { itemId } = useParams()  
  
  useEffect (() => {
        getProductById(itemId)
        .then ( response => {
            setProduct(response)
        })
        .catch(error => {
            console.error(error)
        })
    }, [itemId])

    return (
        <div className='ItemDetailContainer'>
            < ItemDetail { ...product } />
        </div>
  )
}

export default ItemDetailContainer
