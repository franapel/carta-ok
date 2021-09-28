import Image from "next/image"

export default function Header( {src} ) {
    return (
        <header>
            <div className="flex justify-between pl-5 pr-10 shadow-xl" >
                <Image src={`/${src}`} width="100" height="100" objectFit="contain"></Image>
                <div className="flex w-12 justify-between items-center mr-10">
                    <svg className="fill-current h-4 w-4" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-blue-800" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
                    </svg>
                </div>
            </div>

            
        </header>
    )
}