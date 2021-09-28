import { useRouter } from 'next/dist/client/router'
import Image from 'next/image'
import Link from "next/link"

export default function Product({ product }) {
    const imgUrl = product.images[1]
    const myLoader = ({ src, width, quality }) => `${src}?w=${width}&q=${quality || 75}`

    const router = useRouter();
    const url = router.query

    return (
        <Link href={`/${url.business}/producto/${product._id}`}>
            <a className="flex p-3 border">
                <Image loader={myLoader} src={imgUrl} width={160} height={160} objectFit={'contain'}/>
                <div className="w-1/3 ml-5 flex flex-col">
                    <p className="text-2xl">{product.menuname}</p>
                    <p className="text-md">{product.description}</p>
                    <p className="text-md mt-auto">$1000</p>
                </div>
            </a>
        </Link>

    )
}