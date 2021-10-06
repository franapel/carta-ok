export default function OrderHistory({ orders, products }) {

    const handleDetailClick = (higlightId, detailId, e) => {
        //Ocultar detalles de todos los pedidos menos el seleccionado
        document.querySelectorAll(".highlight-container").forEach(hlc => {
            if (hlc.id != higlightId) {
                hlc.classList.remove("border-2")
                hlc.classList.remove("border-green-400")
                hlc.classList.add("border")
            }
        })        
        document.querySelectorAll(".detail-container").forEach(dc => dc.id != detailId && dc.classList.add("hidden"))
        document.querySelectorAll(".detail-button").forEach(dbtn => dbtn.id != e.target.id && (dbtn.innerHTML = "Detalle"))

        //Mostrar u ocultar detalles del pedido seleccionado
        if (document.getElementById(detailId).classList.toggle("hidden")) {
            e.target.innerText = "Detalle"
            document.getElementById(higlightId).classList.remove("border-2")
            document.getElementById(higlightId).classList.remove("border-green-400")
            document.getElementById(higlightId).classList.add("border")
        }
        else {
            e.target.innerText = "Ocultar detalle"
            document.getElementById(higlightId).classList.remove("border")
            document.getElementById(higlightId).classList.add("border-2")
            document.getElementById(higlightId).classList.add("border-green-400")            
        }
    }


    return (
        <div className="m-3 mt-6">
            <h1 className="font-bold mb-5">Historial de pedidos</h1>
            {orders.map(order => {
                return (
                    <div key={order.id} className="mb-1">
                        <div id={order.id + "highlight"} className="highlight-container flex px-3 py-2 border rounded-sm">
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
                                <button id={order.id + "btndetail"} onClick={(e) => handleDetailClick(order.id + "highlight", order.id + "detail", e)} className="detail-button w-full py-1 bg-gray-600 rounded-sm text-xs lg:text-base text-white">Detalle</button>
                            </div>
                        </div>


                        <div className="detail-container px-4 py-3 border border-t-0 bg-gray-100 hidden animate-grow origin-top" id={order.id + "detail"}>
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
