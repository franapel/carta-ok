import Image from 'next/image'

export default function SingleProduct({ business, product }) {
    const imgUrl = `/${business}/${product.image}`
    const myLoader = ({ src, width, quality }) => `${src}?w=${width}&q=${quality || 75}`

    return (
        <div className="flex flex-col p-3 border">
            
            <Image className="animate-fade" loader={myLoader} src={imgUrl} width={400} height={400} objectFit={'contain'} />

            <p className="text-2xl">{product.name}</p>
            <p className="text-md">{product.name}</p>
            <p className="text-md mt-auto">{`$${product.price}`}</p>
        </div>
    )
}