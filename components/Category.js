import Product from "./Product"

export default function Category({ business, products }) {
    const category = products[0].category
    return (
        <div className="px-3 mt-5 relative">

            <div className="absolute bottom-96 text-transparent" id={category}>
                toScroll
            </div>

            <div className="text-3xl my-3">
                {category}
            </div>

            {products.map(product => {
                return (<Product business={business} product={product} key={product.id} />)
            })}

        </div>
    )
}