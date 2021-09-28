import { useEffect, useState } from "react"

export default function NavBar({ categories }) {
    // const {navPosition, setNavPosition} = useState(0)

    // useEffect(() =>{

    // }, [])
    return (
        <nav className="border-b-2 px-8 w-max relative" id="nav-bar">
            <button className="absolute left-0 inset-y-0" onClick={() => {document.querySelector("#nav-bar").classList.add("-translate-x-3/4"); document.querySelector("#nav-bar").classList.remove("translate-x-0")}}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
            </button>
            <button className="absolute right-0 inset-y-0" onClick={() => {document.querySelector("#nav-bar").classList.add("translate-x-0"); document.querySelector("#nav-bar").classList.remove("-translate-x-3/4")}}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
            </button>
            <ul className="flex overflow-hidden">
                {categories.map(category => {
                    return (
                        <li className="flex flex-shrink-0">
                            <a className="px-5 py-3">{category}</a>
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
        </nav>
    )
}

