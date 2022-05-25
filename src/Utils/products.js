const products = [
    {
        id:1,
        name: "Dundie Award The Office Premio Michael Scott Dundies",
        stock:5,
        cost:1800,
        description:"Replica del Premio Dundie Award de la serie The Office. 26 cm de alto. Incluye stickers de The Office de regalo. Altura: 21 cm. Profundidad: 12 cm. Ancho: 12 cm. Materiales: Plastico. No articulada. Coleccionable",
        image:["https://http2.mlstatic.com/D_NQ_NP_619384-MLA49388678410_032022-V.webp"]

    },
    {
        id:2,
        name:"Figura Dwight Schrute The Office",
        stock: 12,
        cost:1290,
        description:"Figura Dwight Schrute, the office. Hecho en impresion 3D. Se mueve la cabeza, incluye su plataforma de 7cm, No es juguete, coleccionable. Medida: Ancho: 4cm Largo: 17cm",
        image:["https://http2.mlstatic.com/D_NQ_NP_727976-MLA48357342664_112021-V.webp"]

    },
    {
        id:3,
        name: "Funko Pop The Office Michael Scott #869 Nuevo Original",
        stock:2,
        cost:8299,
        description:"Funko Pop The Office Michael Scott #869 Nuevo Original. El producto es original, viene en caja , nuevo. Altura: 10 cm. Profundidad: 5 cm. Ancho: 8 cm. Materiales: PVC. No articulado. Coleccionable. No incluye accesorios.Hay STOCK .",
        image:["https://http2.mlstatic.com/D_NQ_NP_832408-MLA48420606734_122021-V.webp"]

    },
    {
        id:4,
        name:"Felpudo Alfombra Pvc The Office Series",
        stock:3,
        cost:3590,
        description: "FELPUDO THE OFFICE. Marca Decor Interiores, Modelo Boucle. Medidas: 60x40cm. Apto para exterior e interior, Tránsito Medio. No utilizar lavandina, alcohol, etc. Lavar con agua y jabón.",
        image:["https://http2.mlstatic.com/D_NQ_NP_651467-MLA46899843534_072021-V.webp"]

    },
    {
        id:5,
        name: "Taza De Ceramica - The Office (that's What She Said)",
        stock:987,
        cost:1149,
        description:"Taza de cerámica The Office (that's What She Said). Incluye caja de regalo. Apta microondas y lavavajillas. Capacidad en volumen: 300 mL. Consulta por mas modelos disponibles",
        image:["https://http2.mlstatic.com/D_NQ_NP_754129-MLA48100472081_112021-V.webp"]

    },
    {
        id:6,
        name:"Remera The Office Dunder Mifflin Paper Company - Algodon",
        stock:98,
        cost:1999,
        description:"TIPO DE PRODUCTO: INDUMENTARIA. Características: Tacto suave. Algodón peinado. Logotipo de colores fuertes en vinilo. Excelente confección y terminación en cada prenda. Los productos se entregan perfumados y con tarjeta de presentación... LISTOS PARA REGALAR!!!! Consultanos por variantes de colores del diseño que elijas.",
        image:["https://http2.mlstatic.com/D_NQ_NP_946219-MLA48324182980_112021-V.webp"]

    },
    {
        id:7,
        name:"Cuadro Serie The Office 34x44 Cm",
        stock:424,
        cost:2439,
        description:"Embalamos nuestros productos de la mejor manera para que el producto llegue en óptimas condiciones. Cuadro Madera , incluye vidrio. Tamaño 34x44cm total del cuadro. 30x40cm tamaño de la fotografía y la mejor calidad de impresión. Marco Negro. Luego de la compra por el mensaje de la misma aclarar el modelo elegido. De lo contrario se envía el diseño de la primer foto. ¡Listos para colgar!",
        image:["https://http2.mlstatic.com/D_NQ_NP_802575-MLA46883384562_072021-V.webp"]

    },
    {
        id:8,
        name:"Taza De Ceramica - World Best Boss (the Office)",
        stock:849,
        cost:1149,
        description:"Taza de cerámica The Office (World Best Boss). Incluye caja de regalo. Apta microondas y lavavajillas. Capacidad en volumen: 300 mL. Consulta por mas modelos disponibles",
        image:["https://http2.mlstatic.com/D_NQ_NP_636697-MLA44457238510_122020-V.webp"]

    },
    {
        id:9,
        name:"Funko Pop! Michael Scott 1170 The Office Original",
        stock:2,
        cost:6960,
        description:"Funko Pop The Office Michael Scott #1170 Nuevo Original. El producto es original, viene en caja , nuevo. Altura: 10 cm. Profundidad: 5 cm. Ancho: 8 cm. Materiales: PVC. No articulado. Coleccionable. No incluye accesorios.Hay STOCK .",
        image:["https://http2.mlstatic.com/D_NQ_NP_897290-MLA49263882052_032022-V.webp"]

    },
    {
        id:10,
        name:"Remera The Office Michael Scott",
        stock:4,
        cost:2990,
        description:"TIPO DE PRODUCTO: INDUMENTARIA. Características: Tacto suave. Remera realizada 100% algodon estampa premium en serigrafia. Excelente confección y terminación en cada prenda. Los productos se entregan perfumados y con tarjeta de presentación... LISTOS PARA REGALAR!!!! Consultanos por variantes de colores del diseño que elijas.",
        image:["https://http2.mlstatic.com/D_NQ_NP_871346-MLA48935061547_012022-V.webp"]

    },
    {
        id:11,
        name:"Funko Pop The Office Dwight The Strangler 1045 Baloo Toys",
        stock:1,
        cost:6990,
        description:"Funko Pop The Office Dwight The Strangler #1045 Nuevo Original. El producto es original, viene en caja , nuevo. Altura: 10 cm. Profundidad: 5 cm. Ancho: 8 cm. Materiales: PVC. No articulado. Coleccionable. No incluye accesorios. Hay STOCK .",
        image:["https://http2.mlstatic.com/D_NQ_NP_919989-MLA47265182132_082021-V.webp"]

    },
    {
        id:12,
        name:"Funko Pop The Office Mini Moments Dwight Schrute",
        stock:1,
        cost:4899,
        description:"Funko Pop The Office Dwight Mini Moments. Nuevo Original. El producto es original, viene en caja , nuevo. Altura: 10 cm. Profundidad: 5 cm. Ancho: 8 cm. Materiales: PVC. No articulado. Coleccionable. No incluye accesorios. Hay STOCK .",
        image:["https://http2.mlstatic.com/D_NQ_NP_970657-MLA49556308520_042022-V.webp"]

    }
];
module.exports = {
    products,
    }