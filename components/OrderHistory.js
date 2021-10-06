export default function OrderHistory({ orders, products }) {

    const handleDetailsClick = (higlightId, detailId, e) => {
        if (document.getElementById(detailId).classList.toggle("hidden")) {
            e.target.innerText = "Detalle"
            document.getElementById(higlightId).classList.remove("bg-green-200")
        }
        else {
            e.target.innerText = "Ocultar detalle"
            document.getElementById(higlightId).classList.add("bg-green-200")
        }
        
    }


    return (
        <div className="m-3 mt-6">
            <h1 className="font-bold mb-5">Historial de pedidos</h1>
            {orders.map(order => {
                return (
                    <div key={order.id} className="mb-1">
                        <div className="p-1" id={order.id + "highlight"}>
                            <div className="flex px-3 py-2 border rounded-sm">
                                <div className="w-3/5">
                                    <h3 className="mb-1 text-xs lg:text-base">Pedido:</h3>
                                    {order.order_products.map(op =>
                                        <p key={op.product_id} className="text-sm lg:text-xl">
                                            {`${op.quantity}x ${products.find(p => p.id === op.product_id).name}`}
                                        </p>)
                                    }
                                </div>
                                <div className="w-2/5 pt-8 flex flex-col justify-end">
                                    <button className="w-full mb-3 py-1 bg-green-600 rounded-sm text-xs lg:text-base text-white">Agregar al carro</button>
                                    <button onClick={(e) => handleDetailsClick(order.id + "highlight", order.id + "detail", e)} className="w-full py-1 bg-gray-600 rounded-sm text-xs lg:text-base text-white">Detalle</button>
                                </div>
                            </div>
                        </div>


                        <div className="mx-1 px-4 py-3 border border-t-0 bg-gray-100 hidden animate-grow origin-top" id={order.id + "detail"}>
                            <p className="text-xs lg:text-base">Precio total: {order.total_price}</p>
                            <p className="text-xs lg:text-base">Método de pago: {order.payment_method}</p>
                            <p className="text-xs lg:text-base">Fecha de compra: {order.order_date}</p>
                        </div>

                    </div>
                )
            })}
        </div>
    )
}
