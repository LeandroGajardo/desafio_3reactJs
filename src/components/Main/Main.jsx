import React from 'react'
import ItemListContainer from '../ItemListContainer/ItemListContainer'
import './Main.css'


export const Main = () => {
    return (
        <div className="myMain">
            <ItemListContainer saludoInicial="La Dulceria - Caramelos Artesanales"/>
        </div>
    )
}
