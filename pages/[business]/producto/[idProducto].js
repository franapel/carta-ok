import Layout from "../../../components/Layout"
import SingleProduct from "../../../components/SingleProducts"

export default function Product({ business, product }) {
    const categories = ["Rice", "Soup", "Others"]
    return (
        <>
            <Layout business={business}>
                <SingleProduct business={business} product={product} />
            </Layout>
        </>
    )
}

export async function getServerSideProps(context) {
    const business = context.query.business
    const id = context.query.idProducto
    const path = context.req.headers.host
    let res
    try {
        res = await fetch("https://" + path + "/products.json")
    } catch (e) {
        res = await fetch("http://" + path + "/products.json")
    }

    const data = await res.json()
    const products = data.business_list.find(b => b.business === business).products
    const product = products.find(p => p.id === id)
    return {
        props: { business, product } // will be passed to the page component as props
    }
}