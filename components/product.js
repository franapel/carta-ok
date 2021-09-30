import Image from 'next/image'
import Link from "next/link"

export default function Product({ business, product }) {
    const imgUrl = `/${business}/${product.image}`
    const myLoader = ({ src, width, quality }) => `${src}?w=${width}&q=${quality || 75}`

    return (
        <Link href={`/${business}/producto/${product.id}`}>
            <a className="flex p-3 border">
                <Image loader={myLoader} src={imgUrl} width={160} height={160} objectFit={'contain'} />
                <div className="w-1/3 ml-5 flex flex-col">
                    <p className="text-2xl">{product.name}</p>
                    <p className="text-md">{product.name}</p>
                    <p className="text-md mt-auto">{`$${product.price}`}</p>
                </div>
            </a>
        </Link>

    )
}