import Layout from "../../components/Layout"
import Link from "next/link"

export default function Business({ business }) {
    return (
        <Layout business={business}>
            <h1>{business} Index</h1>
            <Link href={`/${business}/carta`}>
                <button>Carta</button>
            </Link>
        </Layout>
    )
}

export async function getServerSideProps(context) {
    const business = context.query.business
    return {
        props: { business } // will be passed to the page component as props
    }
}
