/*En esta consulta comprobaremos el número de pedidos en total que ha realizado Eustaquio*/
db.ventas.aggregate([
    { $match: {cliente:"Eustaquio"}},
    { $group: {_id:"$cliente", númeroPedidos: {$max:"$numeroUnidades"}}}
])

/*En esta consulta comprobaremos la media de importes totales que lleva a cabo cada vendedor*/
db.ventas.aggregate([
    { $group: {_id:"$vendedor", importe_total: {$avg: {$multiply:["$precioUnidad","$numeroUnidades"]}}}},
])

/*En esta consulta comprobaremos los beneficios*/
db.ventas.aggregate([
    { $group: {_id:"$articulo", beneficios_totales: {$sum: {$multiply:["$precioUnidad","$numeroUnidades"]}}}},
])
/*En esta consulta comprobaremos los mejores clientes*/
db.ventas.aggregate([
    { $group: {_id:"$cliente", beneficios_totales: {$max: {$multiply:["$precioUnidad","$numeroUnidades"]}}}},
])
/*En esta consulta comprobaremos los mejores vendedores*/
db.ventas.aggregate([
    { $group: {_id:"$vendedor", beneficios_totales: {$max: {$multiply:["$precioUnidad","$numeroUnidades"]}}}},
])
/*En esta consulta comprobaremos los mejores artículos*/
db.ventas.aggregate([
    { $group: {_id:"$articulo", beneficios_totales: {$max: {$multiply:["$precioUnidad","$numeroUnidades"]}}}},
])
/*En esta consulta comprobaremos los mejores meses*/
db.ventas.aggregate([
    { $group: {_id:"$fechaVenta", beneficios_totales: {$max: {$multiply:["$precioUnidad","$numeroUnidades"]}}}},
])

/*En esta consulta dividiremos el precio de unidad entre el precio de inversión divide*/
db.ventas.aggregate([
    { $group: {_id:"$articulo", Rentabilidad: {$avg: {$divide:["$precioUnidad","$precioInversión"]}}}},
])