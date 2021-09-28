import Header from "../../components/header"
import NavBar from "../../components/navbar"
import Products from "../../components/products"
export default function BusinessMenu({ business, menu }) {
    const categories = ["Rice", "Soup", "Others"]
    return (
        
        <>
            <NavBar categories={categories}/>
            <h1>{business}</h1>
            <Products categories={categories} products={menu}/>
            
        </>
    )
}

export async function getServerSideProps(context) {
    const business = context.query.business
    const res = await fetch("https://foodbukka.herokuapp.com/api/v1/menu")
    const data = await res.json()
    const menu = data.Result
    return {
      props: { business, menu } // will be passed to the page component as props
    }
  }