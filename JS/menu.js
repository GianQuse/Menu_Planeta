const menu = {
    entrantes: [
        { nombre: "PAPAS FRITAS", descripcion: "PORCIÓN", precio: [6200], imagen: "" },
        { nombre: "PAPAS PLANETA", descripcion: "SALTEADO DE VERDEO, PANCETA Y CREMA", precio: [8000], imagen: "" },
        { nombre: "PAPAS CHEDAR", descripcion: "PAPAS FRITAS CON QUESO CHEDDAR Y PIMIENTA NEGRA", precio: [9500], imagen: "" },
        { nombre: "PAPAS QUESO AZUL", descripcion: "", precio: [9500], imagen: "" },
        { nombre: "RABAS", descripcion: "500GR", precio: [32200], imagen: "" },
        { nombre: "RABAS", descripcion: "250GR", precio: [16100], imagen: "" },
        { nombre: "BASTONCITOS DE MUZZARELLA", descripcion: "", precio: [7800], imagen: "" },
        { nombre: "MEJILLONES A LA PROVENZAL", descripcion: "", precio: [14200], imagen: "" },
        { nombre: "NUGGETS VEGANOS", descripcion: "", precio: [9000], imagen: "" },
    ],
    empanadas: [
        { nombre: "CARNE SALADA", descripcion: "", precio: [2000], imagen: "" },
        { nombre: "CARNE DULCE", descripcion: "", precio: [2000], imagen: "" },
        { nombre: "ÁRABES", descripcion: "", precio: [2000], imagen: "" },
        { nombre: "JAMÓN Y QUESO", descripcion: "", precio: [2000], imagen: "" },
        { nombre: "CAPRESSE", descripcion: "", precio: [2000], imagen: "" },
        { nombre: "ESPINACA", descripcion: "", precio: [2000], imagen: "" },
        { nombre: "CEBOLLA Y QUESO", descripcion: "", precio: [2000], imagen: "" },
        { nombre: "EMPANDA PESCADO", descripcion: "", precio: [2300], imagen: "" },
        { nombre: "HUMITA", descripcion: "", precio: [2000], imagen: "" },
        { nombre: "VEGETALES AL WOK", descripcion: "", precio: [2000], imagen: "" },
        { nombre: "POLLO A LAS FINAS HIERBAS", descripcion: "", precio: [2000], imagen: "" },
        { nombre: "SALTEÑAS", descripcion: "CORTADO A CUCHILLO", precio: [2000], imagen: "" },
        { nombre: "LOMO AL MALBEC", descripcion: "CORTADO A CUCHILLO", precio: [2300], imagen: "" },
    ],
    pizzas: [
        { nombre: "MUZZARELLA", descripcion: "SALSA DE TOMATE", precio: [14800, 10000, 7500], imagen: "" },
        { nombre: "MUZZARELLA CON JAMÓN", descripcion: "SALSA DE TOMATE Y ACEITUNAS", precio: [23700, 16000, 11900], imagen: "" },
        { nombre: "PANCETA", descripcion: "SALSA DE TOMATE, MUZZARELLA Y ACEITUNAS", precio: [22200, 15000, 11200], imagen: "" },
        { nombre: "ANCHOAS", descripcion: "MUZZARELLA Y SALSA DE TOMATE", precio: [22200, 15000, 11200], imagen: "" },
        { nombre: "POLLO A LA SALSA CREMA", descripcion: "SALSA DE TOMATE, MUZZARELLA Y JAMÓN", precio: [28800,19400,14500], imagen: "" },
        { nombre: "FUGAZZETA", descripcion: "CEBOLLA, MUZZARELLA Y SALSA DE TOMATE", precio: [18700,12600,9400], imagen: "" },
        { nombre: "PALMITOS CON JAMÓN", descripcion: "SALSA DE TOMATE Y MUZZARELLA", precio: [28800, 19400, 14500], imagen: "" },
        { nombre: "FUNGHI SPEZIALE", descripcion: "SALSA DE TOMATE, CHAMPIGNON, MUZZARELLA Y JAMÓN", precio: [23700,16000,11900], imagen: "" },
        { nombre: "NAPOLITANA", descripcion: "RODAJAS Y SALSA DE TOMATE, MUZZARELLA Y AJO", precio: [18700,12600,9400], imagen: "" },
        { nombre: "TRES QUESO", descripcion: "MUZZARELLA, SARDO Y ROQUEFORT", precio: [23700,16000,11900], imagen: "" },
        { nombre: "AGRIDILCE", descripcion: "MUZZARELLA, JAMÓN, ANANÁ Y UNAS CERECITAS", precio: [30000,20200,15100], imagen: "" },
        { nombre: "DESCONTROLADA", descripcion: "SALSA DE TOMATE, MUZZARELLA, PANCETA, PIMIENTOS ROJOS Y VERDES, CARNE TROZADA Y CHAMPIGNONES", precio: [28800,19400,14500], imagen: "" },
        { nombre: "PEPERONI", descripcion: "MUZZARELLA, SALSA DE TOMATE, PEPERONI Y PAPRIKA", precio: [23700,16000,11900], imagen: "" },
        { nombre: "VEGETAL PRIMAVERAL", descripcion: "TOMATE CONCASSE, CHAMPIGNONES FILETEADOS, ACEITUNAS VERDES Y NEGRAS, PALMITOS, MORRONES Y UN TOQUE DE OLIVA", precio: [28800,19400,14500], imagen: "" },
        { nombre: "CALABRESA", descripcion: "MUZZARELLA, SALSA DE TOMATE, SALAME MILÁN Y MORRONES", precio: [22200,15000,11200], imagen: "" },
        { nombre: "PLANETARIA", descripcion: "MUZZARELLA, ANANÁ, PALMITOS, JAMÓN, ACEITUNAS NEGRAS, CEREZAS Y SALSA DE TOMATE", precio: [30000,20200,15100], imagen: "" },
        { nombre: "ROQUEFORT SPEZIALE", descripcion: "MUZZARELLA, ROQUEFORT, JAMÓN Y SALSA DE TOMATE", precio: [22200,15000,11200], imagen: "" },
        { nombre: "PROVENZAL", descripcion: "MUZZARELLA, AJO, PEREJIL, SALSA DE TOMATE", precio: [18700,12600,9400], imagen: "" },
        { nombre: "PIMPUNI", descripcion: "MUZZARELLA, RODAJAS DE TOMATE, ROQUEFORT, NUECES Y SALSA DE TOMATE", precio: [22200,15000,11200], imagen: "" },
        { nombre: "SICILIANA", descripcion: "MUZZARELLA, TOMATE EN RODAJAS, ALBAHACA, ACEITUNAS NEGRAS, ACEITE DE OLIVA Y SALSA DE TOMATE", precio: [22200,15000,11200], imagen: "" },
        { nombre: "RÚCULA", descripcion: "MUZZARELLA, SALSA DE TOMATE, RÚCULA Y JAMON CRUDO", precio: [22200,15000,11200], imagen: "" },
        { nombre: "FUGAZZETA SPEZIALE", descripcion: "MUZZARELLA, CEBOLLA ASADA, JAMÓN, QUESO AZUL", precio: [23700,16000,11900], imagen: "" },
        { nombre: "TRES QUESO SPEZIALE", descripcion: "MUZZARELLA, SARDO, QUESO AZUL, PANCETA", precio: [28800,19400,14500], imagen: "" },
        { nombre: "SALCHICA", descripcion: "SALSA DE TOMATE, MUZZARELLA, SALCHICHA Y HUEVO DURO", precio: [22200,15000,11200], imagen: "" },
        { nombre: "PROVOLONE", descripcion: "SALSA DE TOMATE Y PAPRIKA", precio: [23700,16000,11900], imagen: "" },
        { nombre: "LOMITO", descripcion: "SALSA DE TOMATE, MUZZARELLA, LOMO DE CERDO A LAS FINAS HIERBAS Y SALSA BARBACOA", precio: [23700,16000,11900], imagen: "" },
        { nombre: "LA J-J", descripcion: "SALSA DE TOMATE, MUZZARELLA, CARNE, PANCETA, CEBOLLA Y CREMA", precio: [28800,19400,14500], imagen: "" },
        { nombre: "SUPERESPECIAL", descripcion: "SALSA DE TOMATE, MUZZARELLA, JAMÓN COCIDO, TOMATE, MORRÓN, HUEVO", precio: [28800,19400,14500], imagen: "" },
        { nombre: "LA CHETA", descripcion: "MUZZARELLA, RÚCULA, TOMATES DISECADOS Y QUESO SARDO", precio: [23700,16000,11900], imagen: "" },
        { nombre: "AMERICAN BACON", descripcion: "SALSA DE TOMATE, MUZZARELLA, PAPAS FRITAS, HUEVOS A LA PLANCHA, CRUJIENTE DE PANCETA Y BARBACOA", precio: [28800,19400,14500], imagen: "" },
    ],
    las_triples: [
        { nombre: "", descripcion: "", precio: , imagen: "" },
        { nombre: "", descripcion: "", precio: , imagen: "" },
        { nombre: "", descripcion: "", precio: , imagen: "" },
        { nombre: "", descripcion: "", precio: , imagen: "" },
        { nombre: "", descripcion: "", precio: , imagen: "" },
    ],
    sandwiches: [
        { nombre: "", descripcion: "", precio: , imagen: "" },
        { nombre: "", descripcion: "", precio: , imagen: "" },
        { nombre: "", descripcion: "", precio: , imagen: "" },
        { nombre: "", descripcion: "", precio: , imagen: "" },
        { nombre: "", descripcion: "", precio: , imagen: "" },
    ],
    milanesas: [
        { nombre: "Napolitana", descripcion: "Milanesa con salsa, queso y jamón.", precio: 4500, imagen: "milanesa-napo.jpg" },
        { nombre: "A caballo", descripcion: "Con huevo frito encima.", precio: 4200, imagen: "milanesa-caballo.jpg" },
        { nombre: "Milanesa simple", descripcion: "Clásica con papas fritas.", precio: 4000, imagen: "milanesa-simple.jpg" }
    ],
    pizzanesas: [
        { nombre: "Muzzarella", descripcion: "Milanesa con salsa y queso.", precio: 5000, imagen: "pizzanesa-muzzarella.jpg" },
        { nombre: "Fugazzeta", descripcion: "Milanesa con cebolla y queso.", precio: 5300, imagen: "pizzanesa-fugazzeta.jpg" },
        { nombre: "Especial", descripcion: "Milanesa con jamón y morrones.", precio: 5500, imagen: "pizzanesa-especial.jpg" }
    ],
    hamburguesas: [
        { nombre: "Clásica", descripcion: "Hamburguesa con lechuga y tomate.", precio: 3000, imagen: "hamburguesa-clasica.jpg" },
        { nombre: "Doble carne", descripcion: "Con queso cheddar y panceta.", precio: 4000, imagen: "hamburguesa-doble.jpg" },
        { nombre: "BBQ", descripcion: "Hamburguesa con barbacoa y cebolla.", precio: 3800, imagen: "hamburguesa-bbq.jpg" }
    ],
    lomitos: [
        { nombre: "Lomo completo", descripcion: "Lomo con jamón, queso y huevo.", precio: 4500, imagen: "lomo-completo.jpg" },
        { nombre: "Lomo BBQ", descripcion: "Lomo con salsa barbacoa.", precio: 4600, imagen: "lomo-bbq.jpg" },
        { nombre: "Lomo especial", descripcion: "Lomo con morrón y panceta.", precio: 4800, imagen: "lomo-especial.jpg" }
    ],
    pollos: [
        { nombre: "Pollo al horno", descripcion: "Acompañado con papas.", precio: 5000, imagen: "pollo-horno.jpg" },
        { nombre: "Milanesa de pollo", descripcion: "Con puré de papas.", precio: 4500, imagen: "milanesa-pollo.jpg" },
        { nombre: "Alitas BBQ", descripcion: "Alitas de pollo con salsa BBQ.", precio: 4000, imagen: "alitas-bbq.jpg" }
    ],
    vegetarianos_y_veganos: [
        { nombre: "Hamburguesa vegana", descripcion: "Con pan integral y vegetales.", precio: 3500, imagen: "hamburguesa-vegana.jpg" },
        { nombre: "Tarta de espinaca", descripcion: "Hecha con masa integral.", precio: 3000, imagen: "tarta-espinaca.jpg" },
        { nombre: "Ensalada César vegana", descripcion: "Con aderezo sin lácteos.", precio: 2800, imagen: "ensalada-vegana.jpg" }
    ],
    ensaladas: [
        { nombre: "César", descripcion: "Pollo, croutons y aderezo césar.", precio: 3200, imagen: "ensalada-cesar.jpg" },
        { nombre: "Caprese", descripcion: "Tomate, mozzarella y albahaca.", precio: 3000, imagen: "ensalada-caprese.jpg" },
        { nombre: "Mixta", descripcion: "Lechuga, tomate y cebolla.", precio: 2500, imagen: "ensalada-mixta.jpg" }
    ],
    tacos: [
        { nombre: "Taco de carne", descripcion: "Con salsa picante y guacamole.", precio: 4000, imagen: "taco-carne.jpg" },
        { nombre: "Taco de pollo", descripcion: "Pollo, lechuga y aderezo.", precio: 3800, imagen: "taco-pollo.jpg" },
        { nombre: "Taco vegetariano", descripcion: "Con frijoles y pimientos.", precio: 3500, imagen: "taco-veg.jpg" }
    ],
    tablas: [
        { nombre: "Picada clásica", descripcion: "Fiambres y quesos.", precio: 6000, imagen: "tabla-clasica.jpg" },
        { nombre: "Tabla de mariscos", descripcion: "Mix de mariscos frescos.", precio: 8000, imagen: "tabla-mariscos.jpg" },
        { nombre: "Tabla vegetariana", descripcion: "Verduras grilladas y hummus.", precio: 5500, imagen: "tabla-veg.jpg" }
    ],
    menu_infantil: [
        { nombre: "Hamburguesa kids", descripcion: "Con papas fritas.", precio: 2500, imagen: "menu-kids.jpg" },
        { nombre: "Milanesa kids", descripcion: "Milanesa con puré.", precio: 2400, imagen: "menu-mila-kids.jpg" },
        { nombre: "Nuggets", descripcion: "Con papas y aderezo.", precio: 2300, imagen: "nuggets.jpg" }
    ],
    sin_tacc: [
        { nombre: "Pizza sin TACC", descripcion: "Masa libre de gluten.", precio: 4500, imagen: "pizza-sintacc.jpg" },
        { nombre: "Pasta sin gluten", descripcion: "Hecha con harina de arroz.", precio: 5000, imagen: "pasta-sintacc.jpg" },
        { nombre: "Postre sin TACC", descripcion: "Brownie sin gluten.", precio: 2800, imagen: "postre-sintacc.jpg" }
    ],
    bebidas: [
        { nombre: "Gaseosa", descripcion: "Refresco en botella de 500ml.", precio: 1200, imagen: "gaseosa.jpg" },
        { nombre: "Agua mineral", descripcion: "Agua sin gas de 500ml.", precio: 1000, imagen: "agua.jpg" },
        { nombre: "Jugo natural", descripcion: "Jugo exprimido de naranja.", precio: 1500, imagen: "jugo.jpg" }
    ],
    postres: [
        { nombre: "Flan casero", descripcion: "Con dulce de leche y crema.", precio: 2500, imagen: "flan.jpg" },
        { nombre: "Tiramisú", descripcion: "Postre italiano con café y cacao.", precio: 2800, imagen: "tiramisu.jpg" },
        { nombre: "Brownie", descripcion: "Brownie con nueces y helado.", precio: 3000, imagen: "brownie.jpg" }
    ],
    cafeteria: [
        { nombre: "Café espresso", descripcion: "Café corto y concentrado.", precio: 1000, imagen: "cafe.jpg" },
        { nombre: "Cappuccino", descripcion: "Café con leche espumosa.", precio: 1500, imagen: "cappuccino.jpg" },
        { nombre: "Té en hebras", descripcion: "Infusión de hierbas naturales.", precio: 1200, imagen: "te.jpg" }
    ],
};