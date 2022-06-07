const products =[
    {
        id: '001',
        name: 'Dracula',
        price: 600,
        category: 'Novela',
        img: '/img/dracula.jpg',
        stock: 15,
        description: 'El escritor irlandés Bram Stoker.'
    },
    { id: '002', name: 'La Ladrona de Libros', prace: 500, category:'Novela', img:'img/liesel.jpg', stock: 10, description: 'Una novela'},
    { id: '003', name: 'El Lector', prace: 400, category:'Novela', img:'img/lector.jpg', stock: 15, description:'La guerra ha terminado.'},
    { id: '004', name: 'El Honor del silencio', precio: 350, category:'Novela', img: 'img/elhonor.jpg', stock: 16, descripcion: 'Una vibarenta.'}
    
    ]

export const getProducts = () => {
    return new Promise ((resolve, rejet) => {
        setTimeout(() => {
            resolve(products)

        }, 2000)
        
        
    })
    
}