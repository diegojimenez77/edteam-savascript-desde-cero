const usuario = {
    nombre: "Beto",
    edad: "30",
    deuda: 0
}

let pedido = []
let costoPedido = 0
let ventasTotales = 0

const mostrarMenu = () => {
    console.log(`CODIGO - NOMBRE PRODUCTO - COSTO`)
    // productos.forEach(producto => console.log(`${producto.codigo} - ${producto.nombre} - $${producto.costo}`))

    for(let producto of productos){
        console.log(`${producto.codigo} - ${producto.nombre} - $${producto.costo}`)
    }// Este for hace lo mismo que el forEach, cualquiera de los dos se puede utilizar.
    }

const pedirProducto = cod => {
    if(!cod) return "Ingrese un codigo valido"

    const productoEncontrado = productos.find(producto => producto.codigo === cod)
    if(!productoEncontrado) return "El producto no existe"

    pedido.push(productoEncontrado)
    console.log("El producto ha sido agregado a su pedido. Su pedido es:")
    return verPedido()
}

const verPedido = () => pedido

const calcularCosto = () => {
    if(usuario.deuda === 0){
        let costo = 0;
        for(producto of pedido){
            costo += producto.costo
        }
        costoPedido = costo
        return costoPedido
    }
}

const finalizarPedido = () => {
    calcularCosto()
    usuario.deuda = costoPedido
    pedido = []
    // costoPedido = 0 
    return `${usuario.nombre}, debes pagar $${usuario.deuda} dolares`
}

const pagarPedido = (montoEntregado) => {
    if(usuario.deuda != 0){
        if(montoEntregado < usuario.deuda) {
            return `No te alcanza para pagar tu pedido.`
        }else if (montoEntregado === usuario.deuda) {
            usuario.deuda=0
            ventasTotales += montoEntregado
            return `Tu pedido ha sido pagado`
        }else if (montoEntregado > usuario.deuda){
            console.log(`Tu pedido ha sido pagado y tu cambio es de ${montoEntregado - usuario.deuda}`)
            ventasTotales += usuario.deuda
            usuario.deuda=0
        }
    } else return ` Debes finalizar el pedido anterior o No tienes pedidos por pagar`
    
} 