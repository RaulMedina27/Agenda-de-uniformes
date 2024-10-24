function mostrarFormulario(producto, tipo, talla) {
    document.getElementById('formulario-pedido').style.display = 'block';
    document.getElementById('producto').value = `${producto} - ${tipo} (Tallas ${talla})`;
}

document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const producto = document.getElementById('producto').value;
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const telefono = document.getElementById('telefono').value;
    const direccion = document.getElementById('direccion').value;
    const tarjeta = document.getElementById('tarjeta').value;
    
    const listaPedidos = document.getElementById('lista-pedidos');
    
    // Crear un nuevo elemento de lista con los datos del pedido
    const nuevoPedido = document.createElement('li');
    nuevoPedido.textContent = `Producto: ${producto}, Nombre: ${nombre}, Email: ${email}, Teléfono: ${telefono}, Dirección: ${direccion}, Tarjeta: ${tarjeta}`;
    
    // Agregar el nuevo pedido a la lista
    listaPedidos.appendChild(nuevoPedido);
    
    // Limpiar el formulario y ocultarlo
    document.getElementById('formulario').reset();
    document.getElementById('formulario-pedido').style.display = 'none';
});