class Product{
    title='DEFAULT';
    imageUrl;
    price;
    description;

    constructor (title,image,pric,decr){
        this.title=title;
        this.imageUrl=image;
        this.price=pric;
        this.description=decr;
    }
}
const productList ={
    products:[
        new Product('A pillow','./img/forest-balcony.webp',20,'A soft pillow'),
        {
            title:'A pillow',
            imageUrl:'./img/forest-balcony.webp',
            price:20,
            description:'A soft Pillow'
        },
        {
            title:'a Love story',
            imageUrl:'./img/2.jpg',
            price:'200',
            description:'best thisnggs in this world',
        },
        {
            title:'Famouse Persons',
            imageUrl:'./img/1.jpg',
            price:'1000',
            description:'the best Software Engeneer in the world ,He is the  one of rich man in our world',
        }
    ],
    render(){
        const renderHook=document.getElementById('app');
        const prodList =document.createElement('ul');
        prodList.className='product-list';
        for(const prod of this.products){
            const prodEl=document.createElement('li');
            prodEl.className='product-item';
            prodEl.innerHTML=`
            <div>
            <img src="${prod.imageUrl}" alt="${prod.title}>
            <div class="product-item_content">
            <h2>${prod.title}</h2>
            <h3>\$${prod.price}</h3>
            <p>${prod.description}</p>
            <button>add to card</button>
            </div>
            </div>
            `;
            prodList.append(prodEl);
        }
        renderHook.append(prodList);
    }
};
productList.render();