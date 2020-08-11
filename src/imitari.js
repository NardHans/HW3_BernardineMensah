import React from 'react'
import './css/sample-imitari.css'

function Imitari(props) {
    return (
        <article class="wallpaper">
            <img src={props.pic} alt="wallpaper #1" class="wallpaper" />
        </article>
    )
}

export default Imitari;