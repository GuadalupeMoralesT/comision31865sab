const products =[
    {
        id: '001',
        name: 'dracula',
        price: 600,
        category: 'Novela',
        img: '/img/dracula.jpg',
        stock: 15,
        description: 'El escritor irlandés Bram Stoker.'
    },
    { id: '002', name: 'la Ladrona de Libros', prace: 500, category:'Novela', img:'img/lie.jpg', stock: 10, description: 'Una novela'},
    { id: '003', name: 'el Lector', prace: 400, category:'Novela', img:'img/lector.jpg', stock: 15, description:'La guerra ha terminado.'},
    { id: '004', name: 'el Honor del silencio', precio: 350, category:'Novela', img: 'img/elhonor.jpg', stock: 16, descripcion: 'Una vibarenta.'}
    
    ]

export const getProducts = () => {
    return new Promise ((resolve, rejet) => {
        setTimeout(() => {
            resolve(products)

        }, 2000)
        
        
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise ((resolve, rejet) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))

        }, 500)
        
        
    })
}

export const getProductById = (id) => {
    return new Promise ((resolve, rejet) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
    
        }, 500)
            
            
        })
    
}