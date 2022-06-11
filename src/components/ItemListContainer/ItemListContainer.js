import './ItemListContainer.css'
import { useState, useEffect } from 'react'
import { getProducts } from '../../asyncmock'
import { getProducts, getProductsByCategory } from '../../asyncmock'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'

const ItemListContainer = (props) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()


    useEffect(() => {
        getProducts().then(response => {
            setProducts(response)
        })
    }, [])

    // const productsComponets = products.map(product => {
    //     return (
    //         <li key={product.id}>
    //             {product.name}
    //         </li>
    //     )
    // })

    return (
        setLoading(true)

        if(!categoryId) {
            getProducts().then(prods => {
                setProducts(prods)
            }).catch(error => {
                console.log(error)
            }).finally(() => {
                setLoading(false)
            })
        } else {
            getProductsByCategory(categoryId).then(prods => {
                setProducts(prods)
            }).catch(error => {
                console.log(error)
            }).finally(() => {
                setLoading(false)
            })
        }

    }, [categoryId])

    if(loading) {
        return <h1>Cargando...</h1>
    }

    return(
        <div>
            <h1 className='Titulo'>{props.greeting}</h1>
            <ItemList products={products}/>
            <h1>{props.greeting}</h1>
            {products.length > 0 
                ? <ItemList products={products}/>
                : <h1>No hay productos</h1>
            }
        </div>
    )
}
export default ItemListContainer