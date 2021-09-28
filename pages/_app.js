import 'tailwindcss/tailwind.css'
import Header from "../components/header"

function MyApp({ Component, pageProps }) {
  return (<>
    <Header src="logo_1.webp"/>
    <Component {...pageProps} />
    
    </>)
}

export default MyApp
