import 'tailwindcss/tailwind.css'

function MyApp({ Component, pageProps }) {
  return (
    <div className="z-30">
      <Component {...pageProps}/>
    </div>
  )
}

export default MyApp
