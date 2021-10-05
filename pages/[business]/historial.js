import Layout from "../../components/Layout"
import OrderHistory from "../../components/OrderHistory"

export default function History({ business, productsInOrders, orders }) {
    return ( 
        <Layout business={business}>
            <OrderHistory products={productsInOrders} orders={orders}/>
        </Layout>
    )
}

export async function getServerSideProps(context) {
    const user = "fco"
    const business = context.query.business

    const path = context.req.headers.host + "/products.json"
    let res
    try {
        res = await fetch("https://" + path)
    } catch (e) {
        res = await fetch("http://" + path)
    }
    const data = await res.json()
    const userOrders = data.order_history.filter(order => order.user === user && order.business === business)

    let productsIdInOrders = []
    userOrders.forEach(order => {
        order.order_products.forEach(product => productsIdInOrders.push(product.product_id))
    });

    const business_products = data.business_list.find(b => b.business = business).products
    const productsInOrders = business_products.filter(p => productsIdInOrders.includes(p.id))

    return {
        props: { business, productsInOrders, orders: userOrders } // will be passed to the page component as props
    }
}