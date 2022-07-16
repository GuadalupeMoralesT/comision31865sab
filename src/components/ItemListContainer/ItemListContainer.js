//import { useState, useEffect } from 'react'
//import { getProducts, getProductsByCategory } from '../../asyncmock'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'

//import { getDocs, collection, query, where } from 'firebase/firestore'
//import { db } from '../../services/firebase'import { getProducts } from '../../services/firebase/firestore'
import { useAsync } from '../../hooks/useAsync'


const ItemListContainer = (props) => {
    const { categoryId } = useParams()
    const { isLoading, data, error } = useAsync(() => getProducts(categoryId), [categoryId])


    useEffect(() => {
        setLoading(true)

        const collectionRef = categoryId ? ( 
            query(collection(db, 'products'), where('category', '==', categoryId))
        ) : ( collection(db, 'products') )

        getDocs(collectionRef).then(response => {
            const productsFormatted = response.docs.map(doc => {
                return { id: doc.id, ...doc.data() }
            })
            setProducts(productsFormatted)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })
     

    }, [categoryId])

    useEffect(() => {
        setTimeout(() => {
            setTitle('Estos son nuestro productos')
        }, 3000)
    }, [])

    
    if(isLoading) {
        return <h1>Cargando...</h1>
    }

    if(error) {
        return <h1>Hubo un error</h1>
    }

    return(
        <div>

            <h1>{props.greeting}</h1>
            { data.length > 0 
                ? <ItemList products={data}/>
                : <h1>No hay productos</h1>
            }
        </div>
    )
}
export default ItemListContainer
