const Item =( { name, img } ) => {
    return(
        <li>
            <img src={img} alt={name}/>
            {name}
        </li>
    )        
}

export default Item