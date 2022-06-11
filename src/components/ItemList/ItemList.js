import Item from "../Item/item"

const ItemList = ({ products }) => {
    return(
        <ul>

           {products.map(prod => <Item key={prod.id} {...prod}  />)}

        </ul>

    )
}

export default ItemList