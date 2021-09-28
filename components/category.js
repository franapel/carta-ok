import Product from "./product"

export default function Category( {products, category} ) {
    return(
        <div className="px-3 mt-5" id={category}>
            <div className="text-3xl my-3">
                {category}
            </div>
            

            {products.map(product => {
                return(
                    <Product product={product} key={product._id}/>
                )
             })}
        </div>
    )
}