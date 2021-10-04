import Image from 'next/image'
import Options from './Options'

export default function SingleProduct({ business, product }) {
    const imgUrl = `/${business}/${product.image}`
    const myLoader = ({ src, width, quality }) => `${src}?w=${width}&q=${quality || 75}`

    return (
        <div className="animate-fade flex flex-col p-3 border">

            <Image loader={myLoader} src={imgUrl} width={400} height={400} objectFit={'contain'} />

            <p className="text-2xl">{product.name}</p>
            <p className="text-md">{product.name}</p>
            <p className="text-md mt-auto mb-10">{`$${product.price}`}</p>

            {product.options && <Options options={product.options}/>}
        </div>
    )
}