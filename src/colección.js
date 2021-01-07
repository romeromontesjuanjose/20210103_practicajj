db.ventas.drop()

db.ventas.insertMany([
    {articulo:"lapiz", 
    precioUnidad:1.35, 
    numeroUnidades:56, 
    fechaVenta:new Date("2016-07-02"), 
    precioInversión:0.85, 
    cliente:"Eustaquio", 
    vendedor:"Pablo"
    },
    {articulo:"libreta", precioUnidad:3.50, numeroUnidades:23, fechaVenta:new Date("2016-03-23"), precioInversión:2.35, cliente:"Rafael", vendedor:"Marisa"},
    {articulo:"transportador de ángulos", precioUnidad:3.15, numeroUnidades:8, fechaVenta:new Date("2016-09-06"), precioInversión:1.75, cliente:"María", vendedor:"Marisa"},
    {articulo:"borrador", precioUnidad:1.35, numeroUnidades:53, fechaVenta:new Date("2016-07-02"), precioInversión:0.65, cliente:"Eustaquio", vendedor:"Pablo"},
    {articulo:"lapiz", precioUnidad:1.65, numeroUnidades:27, fechaVenta:new Date("2016-04-18"), precioInversión:0.85, cliente:"Diego", vendedor:"Marcos"},
    {articulo:"marcapáginas", precioUnidad:3.50, numeroUnidades:3, fechaVenta:new Date("2016-09-29"), precioInversión:1.50, cliente:"Ana", vendedor:"Marisa"},
    {articulo:"folios", precioUnidad:3.45, numeroUnidades:6, fechaVenta:new Date("2017-01-14"), precioInversión:2.35, cliente:"Angel", vendedor:"Marcos"},
    {articulo:"borrador", precioUnidad:1.65, numeroUnidades:18, fechaVenta:new Date("2016-11-20"), precioInversión:1.10, cliente:"Cristobal", vendedor:"Marcos"},
    {articulo:"mochila", precioUnidad:13.50, numeroUnidades:1, fechaVenta:new Date("2017-02-01"), precioInversión:10.50, cliente:"Cristina", vendedor:"Marcos"},
    {articulo:"lapiz", precioUnidad:1.50, numeroUnidades:24, fechaVenta:new Date("2016-01-24"), precioInversión:0.65, cliente:"Minerva", vendedor:"Pablo"}
])