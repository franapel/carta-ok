import Image from 'next/image'

export default function SingleProduct( {product} ) {
    const url = product.images[1]
    const myLoader = ({ src, width, quality }) => `${src}?w=${width}&q=${quality || 75}`

    return(
        <div className="flex flex-col p-3 border">
            <Image loader={myLoader} src={url} width={400} height={400} objectFit={'contain'}/>
            <p className="text-2xl">{product.menuname}</p>
            <p className="text-md">{product.description}</p>
            <p className="text-md mt-auto">$1000</p>
        </div>
    )
}