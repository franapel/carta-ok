import Header from "./Header";
import NavBar from "./NavBar";

export default function Layout({ business, children, categories }) {
    return (
        <>
            <div className="sticky top-0 z-40 bg-white">
                <Header business={business} />
                {categories && <NavBar categories={categories}/>}
            </div>
            {children}
        </>
    )
}