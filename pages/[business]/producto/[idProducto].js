import SingleProduct from "../../../components/single-product"

export default function Product( {product} ) {
    const categories = ["Rice", "Soup", "Others"]
    return (
        
        <>
            <SingleProduct product={product}/>
            
        </>
    )
}

export async function getServerSideProps(context) {
    const business = context.query.business
    const id = context.query.idProducto
    const res = await fetch(`https://foodbukka.herokuapp.com/api/v1/menu/${id}`)
    const data = await res.json()
    const product = data.Result
    return {
      props: { product } // will be passed to the page component as props
    }
  }