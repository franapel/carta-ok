import Category from "./Category"

export default function Products({ business, categories, products }) {
    let remainProducts = []
    return (
        <div>
            {categories.map(category => {
                const productsByCategory = []
                for (const product of products) {
                    if (product.category.toLowerCase().includes(category.toLowerCase())) {
                        productsByCategory.push(product)
                    } else {
                        remainProducts.push(product)
                    }
                }
                products = [...remainProducts]
                remainProducts = []
                return (
                    category != "Others" ? <Category business={business} products={productsByCategory} key={category} />
                        : <Category business={business} products={products} key={category} />
                )
            })}
        </div>
    )
}