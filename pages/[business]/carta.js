import Layout from "../../components/Layout"
import NavBar from "../../components/NavBar"
import Products from "../../components/Products"

export default function BusinessMenu({ business, products, categories }) {
    return ( 
        <Layout business={business} categories={categories}>
            {/* <NavBar categories={categories} /> */}
            <Products business={business} categories={categories} products={products} />
        </Layout>
    )
}

export async function getServerSideProps(context) {
    const business = context.query.business
    const path = context.req.headers.host
    let res
    try {
        res = await fetch("https://" + path + "/products.json")
    } catch (e) {
        res = await fetch("http://" + path + "/products.json")
    }
    const data = await res.json()
    const businessJSON = data.business_list.find(b => b.business === business)
    const categories = businessJSON.product_categories
    const products = businessJSON.products
    return {
        props: { business, products, categories } // will be passed to the page component as props
    }
}