const products = [
    {
        id:1,
        name: "Dundie Award The Office Premio Michael Scott Dundies",
        stock:5,
        cost:1800,
        category: 6,
        description:"Replica del Premio Dundie Award de la serie The Office. 26 cm de alto. Incluye stickers de The Office de regalo. Altura: 21 cm. Profundidad: 12 cm. Ancho: 12 cm. Materiales: Plastico. No articulada. Coleccionable",
        image:["https://http2.mlstatic.com/D_NQ_NP_619384-MLA49388678410_032022-V.webp"]

    },
    {
        id:2,
        name:"Figura Dwight Schrute The Office",
        stock: 12,
        cost:1290,
        category: 6,
        description:"Figura Dwight Schrute, the office. Hecho en impresion 3D. Se mueve la cabeza, incluye su plataforma de 7cm, No es juguete, coleccionable. Medida: Ancho: 4cm Largo: 17cm",
        image:["https://http2.mlstatic.com/D_NQ_NP_727976-MLA48357342664_112021-V.webp"]

    },
    {
        id:3,
        name: "Funko Pop The Office Michael Scott #869 Nuevo Original",
        stock:2,
        cost:8299,
        category: 1,
        description:"Funko Pop The Office Michael Scott #869 Nuevo Original. El producto es original, viene en caja , nuevo. Altura: 10 cm. Profundidad: 5 cm. Ancho: 8 cm. Materiales: PVC. No articulado. Coleccionable. No incluye accesorios.Hay STOCK .",
        image:["https://http2.mlstatic.com/D_NQ_NP_832408-MLA48420606734_122021-V.webp"]

    },
    {
        id:4,
        name:"Felpudo Alfombra Pvc The Office Series",
        stock:3,
        cost:3590,
        category: 6,
        description: "FELPUDO THE OFFICE. Marca Decor Interiores, Modelo Boucle. Medidas: 60x40cm. Apto para exterior e interior, Tránsito Medio. No utilizar lavandina, alcohol, etc. Lavar con agua y jabón.",
        image:["https://http2.mlstatic.com/D_NQ_NP_651467-MLA46899843534_072021-V.webp"]

    },
    {
        id:5,
        name: "Taza De Ceramica - The Office (that's What She Said)",
        stock:987,
        cost:1149,
        category: 4,
        description:"Taza de cerámica The Office (that's What She Said). Incluye caja de regalo. Apta microondas y lavavajillas. Capacidad en volumen: 300 mL. Consulta por mas modelos disponibles",
        image:["https://http2.mlstatic.com/D_NQ_NP_754129-MLA48100472081_112021-V.webp"]

    },
    {
        id:6,
        name:"Remera The Office Dunder Mifflin Paper Company - Algodon",
        stock:98,
        cost:1999,
        category: 2,
        description:"TIPO DE PRODUCTO: INDUMENTARIA. Características: Tacto suave. Algodón peinado. Logotipo de colores fuertes en vinilo. Excelente confección y terminación en cada prenda. Los productos se entregan perfumados y con tarjeta de presentación... LISTOS PARA REGALAR!!!! Consultanos por variantes de colores del diseño que elijas.",
        image:["https://http2.mlstatic.com/D_NQ_NP_946219-MLA48324182980_112021-V.webp"]

    },
    {
        id:7,
        name:"Cuadro Serie The Office 34x44 Cm",
        stock:424,
        cost:2439,
        category: 5,
        description:"Embalamos nuestros productos de la mejor manera para que el producto llegue en óptimas condiciones. Cuadro Madera , incluye vidrio. Tamaño 34x44cm total del cuadro. 30x40cm tamaño de la fotografía y la mejor calidad de impresión. Marco Negro. Luego de la compra por el mensaje de la misma aclarar el modelo elegido. De lo contrario se envía el diseño de la primer foto. ¡Listos para colgar!",
        image:["https://http2.mlstatic.com/D_NQ_NP_802575-MLA46883384562_072021-V.webp"]

    },
    {
        id:8,
        name:"Taza De Ceramica - World Best Boss (the Office)",
        stock:849,
        cost:1149,
        category: 4,
        description:"Taza de cerámica The Office (World Best Boss). Incluye caja de regalo. Apta microondas y lavavajillas. Capacidad en volumen: 300 mL. Consulta por mas modelos disponibles",
        image:["https://http2.mlstatic.com/D_NQ_NP_636697-MLA44457238510_122020-V.webp"]

    },
    {
        id:9,
        name:"Funko Pop! Michael Scott 1170 The Office Original",
        stock:2,
        cost:6960,
        category: 1,
        description:"Funko Pop The Office Michael Scott #1170 Nuevo Original. El producto es original, viene en caja , nuevo. Altura: 10 cm. Profundidad: 5 cm. Ancho: 8 cm. Materiales: PVC. No articulado. Coleccionable. No incluye accesorios.Hay STOCK .",
        image:["https://http2.mlstatic.com/D_NQ_NP_897290-MLA49263882052_032022-V.webp"]

    },
    {
        id:10,
        name:"Remera The Office Michael Scott",
        stock:4,
        cost:2990,
        category: 2,
        description:"TIPO DE PRODUCTO: INDUMENTARIA. Características: Tacto suave. Remera realizada 100% algodon estampa premium en serigrafia. Excelente confección y terminación en cada prenda. Los productos se entregan perfumados y con tarjeta de presentación... LISTOS PARA REGALAR!!!! Consultanos por variantes de colores del diseño que elijas.",
        image:["https://http2.mlstatic.com/D_NQ_NP_871346-MLA48935061547_012022-V.webp"]

    },
    {
        id:11,
        name:"Funko Pop The Office Dwight The Strangler 1045 Baloo Toys",
        stock:1,
        cost:6990,
        category: 1,
        description:"Funko Pop The Office Dwight The Strangler #1045 Nuevo Original. El producto es original, viene en caja , nuevo. Altura: 10 cm. Profundidad: 5 cm. Ancho: 8 cm. Materiales: PVC. No articulado. Coleccionable. No incluye accesorios. Hay STOCK .",
        image:["https://http2.mlstatic.com/D_NQ_NP_919989-MLA47265182132_082021-V.webp"]

    },
    {
        id:12,
        name:"Funko Pop The Office Mini Moments Dwight Schrute",
        stock:1,
        cost:4899,
        category: 1,
        description:"Funko Pop The Office Dwight Mini Moments. Nuevo Original. El producto es original, viene en caja , nuevo. Altura: 10 cm. Profundidad: 5 cm. Ancho: 8 cm. Materiales: PVC. No articulado. Coleccionable. No incluye accesorios. Hay STOCK .",
        image:["https://http2.mlstatic.com/D_NQ_NP_970657-MLA49556308520_042022-V.webp"]

    },
    {
        id:13,
        name:"Cuadro The Office - Michael Jordan - Mundo Absurdo [cod23]",
        stock:87,
        cost:2100,
        category: 5,
        description:"Desde MUNDO ABSURDO te ofrecemos cuadros únicos y hechos a mano. Bastidores de madera de excelente calidad y duración diseñados para nuestro trabajo. Cuadros de tela montada en bastidores de madera confeccionados para la ocasión. Eso garantiza una alta definición en la imagen y una gran durabilidad para su cuadro. Las medidas son las indicadas en detalle de cada publicación. Puede consultar por otras.",
        image:["https://http2.mlstatic.com/D_NQ_NP_948980-MLA42906398449_072020-V.webp"]

    },
    {
        id:14,
        name:"Taza Dwight - Cumpleaños - The Office - Cerámica Importada",
        stock:31,
        cost:1190,
        category: 4,
        description:"Taza de cerámica The Office (Dwight - Cumpleaños). Incluye caja de regalo. Apta microondas y lavavajillas. Capacidad en volumen: 300 mL. Consulta por mas modelos disponibles",
        image:["https://http2.mlstatic.com/D_NQ_NP_792449-MLA47920897619_102021-V.webp"]

    },
    {
        id:15,
        name:"Funko Pop Michael Scott 1044 The Office Nuevo Original",
        stock:1,
        cost:6299,
        category: 1,
        description:"Funko Pop The Office Michael Scott 1044 Moments. Nuevo Original. El producto es original, viene en caja , nuevo. Altura: 10 cm. Profundidad: 5 cm. Ancho: 8 cm. Materiales: PVC. No articulado. Coleccionable. No incluye accesorios. Hay STOCK .",
        image:["https://http2.mlstatic.com/D_NQ_NP_978638-MLA46467774026_062021-V.webp"]

    },
    {
        id:16,
        name:"The Office Cuadro Conmemorativo Fotos Autografiadas",
        stock:5,
        cost:3990,
        category: 5,
        description:"PARA FANS. CUADRO CONMEMORATIVO 'THE OFFICE' UNA PIEZA DE LUJO PARA FANATICOS Y COLECCIONISTAS PRODUCIDA AL NIVEL DE LAS TIENDAS DE MEMORABILIA DE USA E INGLATERRA Display case está montado sobre un cuadro vidriado de 53,5x43,5cm listo para colgar. Todo presentado de un modo impecable sobre passpartout negro. Incluye: Reproducción de una foto firmada por Steve Carell - Michael Scott - (cuyo original fue subastado). Reproducción de una foto firmada porRainn Wilson -Dwight Schrute- (cuyo original fue subastado). Reproducción de una foto firmada por John Krasinsky -Jim Halpert.- (cuyo original fue subastado). Reproducción de una foto firmada por Jenna Fischer -Pam Beesly- (cuyo original fue subastado). Reproducción de una foto firmada por Ed Helms -Andy Bernard- (cuyo original fue subastado). Reproducción poster promocional de la Serie (impreso en papel alto gramaje) UN SOUVENIR PREMIUM, DE CALIDAD Y BUEN GUSTO, PARA ENALTECER O EMBELLECER LA PARED DE TU CUARTO, TU ESTUDIO, TU QUINCHO, TU COMERCIO O TU OFICINA. DEAL PARA REGALAR O REGALARTE.", 
        image:["https://http2.mlstatic.com/D_NQ_NP_798317-MLA45032288954_022021-V.webp"]

    },
    {
        id:17,
        name:"Remera The Office Hombre | De Hoy No Pasa | 06",
        stock:139,
        cost:2500,
        category: 2,
        description:"Las remeras se estampan a pedido, por lo tanto, NO hacemos cambio por talle, es por eso que recomendamos medir una remera antes de hacer el pedido. Se miden de axila a axila por largo total sobre una superficie plana- CALIDAD: Calidad de confección superior. Tapacostura de cuello y hombro. Fabricación propia. 100% algodón peinado 24/1. Las remeras blancas son de SPUN",
        image:["https://http2.mlstatic.com/D_NQ_NP_967716-MLA46849980302_072021-V.webp"]

    },
    {
        id:18,
        name:"Funko Pop The Office Stanley Hudson Limited Ed 1145 Vdgmrs",
        stock:1,
        cost:7499,
        category: 1,
        description:"Funko Pop The Office Stanley Hudson 1145. Nuevo Original. El producto es original, viene en caja , nuevo. Altura: 10 cm. Profundidad: 5 cm. Ancho: 8 cm. Materiales: PVC. No articulado. Coleccionable. No incluye accesorios. Hay STOCK .",
        image:["https://http2.mlstatic.com/D_NQ_NP_888054-MLA47985782083_102021-V.webp"]

    }

];
module.exports = {
    products,
    }