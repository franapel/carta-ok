export default function NavBar({ categories }) {
    return (
        <nav className="border-b-2 px-8 relative">

            <button className="absolute left-0 inset-y-0" onClick={() => {
                document.querySelector("#nav-list").classList.add("translate-x-0")
                document.querySelector("#nav-list").classList.remove("-translate-x-full")
            }}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
            </button>
            <button className="absolute right-0 inset-y-0" onClick={() => {
                document.querySelector("#nav-list").classList.add("-translate-x-full")
                document.querySelector("#nav-list").classList.remove("translate-x-0")
            }}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
            </button>

            <div className="overflow-hidden max-w-max">
                <ul className="flex max-w-max" id="nav-list">

                    {categories.map(category => {
                        return (
                            <li key={category} className="flex flex-shrink-0" >
                                <button className="px-5 py-3" onClick={
                                    () => document.getElementById(category).scrollIntoView({behavior: "smooth"})
                                }>{category}</button>
                            </li>
                        )
                    })}

                    <li className="flex flex-shrink-0">
                        <a className="px-5 py-3">Item</a>
                    </li>
                    <li className="flex flex-shrink-0">
                        <a className="px-5 py-3">Menu Item</a>
                    </li>
                    <li className="flex flex-shrink-0">
                        <a className="px-5 py-3">Menu Item</a>
                    </li>
                    <li className="flex flex-shrink-0">
                        <a className="px-5 py-3">Menu Item</a>
                    </li>
                    <li className="flex flex-shrink-0">
                        <a className="px-5 py-3">Menu Item</a>
                    </li>
                    <li className="flex flex-shrink-0">
                        <a className="px-5 py-3">Menu Item</a>
                    </li>
                    <li className="flex flex-shrink-0">
                        <a className="px-5 py-3">Menu Item</a>
                    </li>
                    <li className="flex flex-shrink-0">
                        <a className="px-5 py-3">kie</a>
                    </li>
                    <li className="flex flex-shrink-0">
                        <a className="px-5 py-3">Menu Item</a>
                    </li>
                    <li className="flex flex-shrink-0">
                        <a className="px-5 py-3">Menu Item</a>
                    </li>
                    <li className="flex flex-shrink-0">
                        <a className="px-5 py-3">Menu Item</a>
                    </li>
                    <li className="flex flex-shrink-0">
                        <a className="px-5 py-3">Menu Item</a>
                    </li>
                    <li className="flex flex-shrink-0">
                        <a className="px-5 py-3">Last Item</a>
                    </li>

                </ul>
            </div>
        </nav>
    )
}

