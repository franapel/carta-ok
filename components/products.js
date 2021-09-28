import Category from "./category"

export default function Products( {categories, products} ) {
    let remainProducts = []
    return(
        
        <div>
            {categories.map(category => {
                const productsByCategory =[]
                for (const product of products) {
                    if (product.menuname.toLowerCase().includes(category.toLowerCase())) {
                        productsByCategory.push(product)
                    } else {
                        remainProducts.push(product)
                    }
                }
                products = [...remainProducts]
                remainProducts = []
                return(
                    category!="Others" ? <Category products={productsByCategory} category={category} key={category}/> 
                        : <Category products={products} category={category} key={category}/>
                )
                
            })}
        </div>
    )
}