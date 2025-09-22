
const concepts = [
  {
    id: 1,
    title: "Base de Datos",
    description: "Colección organizada de datos relacionados entre sí, almacenados y accesibles electrónicamente.",
    category: "Conceptos Generales",
    example: "Una base de datos de clientes con nombres, direcciones y pedidos.",
    references: [
      "Ricardo, C. M. (2009). Bases de datos (V. Campos Olguín & J. Enríquez Brito, Trad.). McGraw-Hill. ISBN: 9701072758.",
      "López Montalbán, I. (2ª ed.). Gestión de bases de datos. Editorial. ISBN: 9788415452942."
    ]
},
{
    id: 2,
    title: "Sistema de Gestión de Bases de Datos (SGBD)",
    description: "Software que permite la creación, gestión y manipulación de bases de datos.",
    category: "Conceptos Generales",
    example: "MySQL, SQL Server o Oracle permiten crear y administrar bases de datos.",
    references: [
      "Ricardo, C. M. (2009). Bases de datos (V. Campos Olguín & J. Enríquez Brito, Trad.). McGraw-Hill. ISBN: 9701072758.",
      "López Montalbán, I. (2ª ed.). Gestión de bases de datos. Editorial. ISBN: 9788415452942."
    ]
},
{
    id: 3,
    title: "Modelo Relacional",
    description: "Modelo de base de datos que organiza los datos en tablas (relaciones) compuestas por filas (tuplas) y columnas (atributos).",
    category: "Modelos de Datos",
    example: "Tabla de clientes con columnas: ID, Nombre, Dirección y Teléfono.",
    references: [
      "Ricardo, C. M. (2009). Bases de datos (V. Campos Olguín & J. Enríquez Brito, Trad.). McGraw-Hill. ISBN: 9701072758.",
      "López Montalbán, I. (2ª ed.). Gestión de bases de datos. Editorial. ISBN: 9788415452942."
    ]
},
{
    id: 4,
    title: "SQL (Structured Query Language)",
    description: "Lenguaje estándar para gestionar y manipular bases de datos relacionales.",
    category: "Lenguajes SQL",
    example: "SELECT * FROM Clientes WHERE Ciudad='Ciudad de México';",
    references: [
      "Ricardo, C. M. (2009). Bases de datos (V. Campos Olguín & J. Enríquez Brito, Trad.). McGraw-Hill. ISBN: 9701072758.",
      "López Montalbán, I. (2ª ed.). Gestión de bases de datos. Editorial. ISBN: 9788415452942."
    ]
},
{
    id: 5,
    title: "Normalización",
    description: "Proceso de organización de los datos en una base de datos para reducir la redundancia y mejorar la integridad.",
    category: "Modelo de Datos",
    example: "Dividir una tabla de clientes con datos de pedidos en dos tablas separadas: Clientes y Pedidos.",
    references: [
      "Ricardo, C. M. (2009). Bases de datos (V. Campos Olguín & J. Enríquez Brito, Trad.). McGraw-Hill. ISBN: 9701072758.",
      "López Montalbán, I. (2ª ed.). Gestión de bases de datos. Editorial. ISBN: 9788415452942."
    ]
},
{
    id: 6,
    title: "Entidad",
    description: "Objeto o concepto del mundo real que tiene una existencia independiente y es relevante para la base de datos.",
    category: "Modelos de Datos",
    example: "Un Cliente o un Producto son entidades en una base de datos de ventas.",
    references: [
      "Ricardo, C. M. (2009). Bases de datos (V. Campos Olguín & J. Enríquez Brito, Trad.). McGraw-Hill. ISBN: 9701072758.",
      "López Montalbán, I. (2ª ed.). Gestión de bases de datos. Editorial. ISBN: 9788415452942."
    ]
},
{
    id: 7,
    title: "Atributo",
    description: "Propiedad o característica de una entidad.",
    category: "Modelos de Datos",
    example: "El nombre, dirección y teléfono son atributos de la entidad Cliente.",
    references: [
      "Ricardo, C. M. (2009). Bases de datos (V. Campos Olguín & J. Enríquez Brito, Trad.). McGraw-Hill. ISBN: 9701072758.",
      "López Montalbán, I. (2ª ed.). Gestión de bases de datos. Editorial. ISBN: 9788415452942."
    ]
},
{
    id: 8,
    title: "Relación",
    description: "Asociación entre dos o más entidades en una base de datos.",
    category: "Modelos de Datos",
    example: "Un Cliente realiza un Pedido en la base de datos de ventas.",
    references: [
      "Ricardo, C. M. (2009). Bases de datos (V. Campos Olguín & J. Enríquez Brito, Trad.). McGraw-Hill. ISBN: 9701072758.",
      "López Montalbán, I. (2ª ed.). Gestión de bases de datos. Editorial. ISBN: 9788415452942."
    ]
},
{
    id: 9,
    title: "Clave Primaria",
    description: "Atributo o conjunto de atributos que identifican de manera única a una tupla en una tabla.",
    category: "Modelos de Datos",
    example: "El ID del Cliente identifica de forma única cada cliente.",
    references: [
      "Ricardo, C. M. (2009). Bases de datos (V. Campos Olguín & J. Enríquez Brito, Trad.). McGraw-Hill. ISBN: 9701072758.",
      "López Montalbán, I. (2ª ed.). Gestión de bases de datos. Editorial. ISBN: 9788415452942."
    ]
},
{
    id: 10,
    title: "Clave Foránea",
    description: "Atributo en una tabla que establece una relación con la clave primaria de otra tabla.",
    category: "Modelos de Datos",
    example: "El ID del Cliente en la tabla Pedidos es una clave foránea que apunta a la tabla Clientes.",
    references: [
      "Ricardo, C. M. (2009). Bases de datos (V. Campos Olguín & J. Enríquez Brito, Trad.). McGraw-Hill. ISBN: 9701072758.",
      "López Montalbán, I. (2ª ed.). Gestión de bases de datos. Editorial. ISBN: 9788415452942."
    ]
},
{
    id: 11,
    title: "Índice",
    description: "Estructura de datos que mejora la velocidad de las operaciones de búsqueda en una base de datos.",
    category: "Optimización",
    example: "Crear un índice en la columna 'Nombre' para acelerar las consultas de búsqueda.",
    references: [
      "Ricardo, C. M. (2009). Bases de datos (V. Campos Olguín & J. Enríquez Brito, Trad.). McGraw-Hill. ISBN: 9701072758.",
      "López Montalbán, I. (2ª ed.). Gestión de bases de datos. Editorial. ISBN: 9788415452942."
    ]
},
{
    id: 12,
    title: "Vista",
    description: "Consulta almacenada que presenta datos de una o más tablas de forma específica.",
    category: "Optimización",
    example: "Crear una vista de clientes con pedidos mayores a $1000.",
    references: [
      "Ricardo, C. M. (2009). Bases de datos (V. Campos Olguín & J. Enríquez Brito, Trad.). McGraw-Hill. ISBN: 9701072758.",
      "López Montalbán, I. (2ª ed.). Gestión de bases de datos. Editorial. ISBN: 9788415452942."
    ]
},
{
    id: 13,
    title: "Procedimiento Almacenado",
    description: "Conjunto de instrucciones SQL predefinidas que se almacenan en la base de datos y pueden ejecutarse de manera repetida.",
    category: "Optimización",
    example: "Procedimiento para calcular automáticamente el total de un pedido.",
    references: [
      "Ricardo, C. M. (2009). Bases de datos (V. Campos Olguín & J. Enríquez Brito, Trad.). McGraw-Hill. ISBN: 9701072758.",
      "López Montalbán, I. (2ª ed.). Gestión de bases de datos. Editorial. ISBN: 9788415452942."
    ]
},
{
    id: 14,
    title: "Trigger (Disparador)",
    description: "Procedimiento que se ejecuta automáticamente en respuesta a ciertos eventos en una base de datos.",
    category: "Optimización",
    example: "Actualizar la fecha de modificación de un registro al modificarlo.",
    references: [
      "Ricardo, C. M. (2009). Bases de datos (V. Campos Olguín & J. Enríquez Brito, Trad.). McGraw-Hill. ISBN: 9701072758.",
      "López Montalbán, I. (2ª ed.). Gestión de bases de datos. Editorial. ISBN: 9788415452942."
    ]
},
{
    id: 15,
    title: "Transacción",
    description: "Conjunto de operaciones que se ejecutan como una unidad indivisible, garantizando la integridad de la base de datos.",
    category: "Control de Concurrencia",
    example: "Transferencia bancaria que debita y acredita cuentas de forma segura.",
    references: [
      "Ricardo, C. M. (2009). Bases de datos (V. Campos Olguín & J. Enríquez Brito, Trad.). McGraw-Hill. ISBN: 9701072758.",
      "López Montalbán, I. (2ª ed.). Gestión de bases de datos. Editorial. ISBN: 9788415452942."
    ]
},
{
    id: 16,
    title: "Integridad Referencial",
    description: "Garantía de que las relaciones entre tablas se mantienen consistentes.",
    category: "Control de Concurrencia",
    example: "No se puede eliminar un cliente si existen pedidos asociados.",
    references: [
      "Ricardo, C. M. (2009). Bases de datos (V. Campos Olguín & J. Enríquez Brito, Trad.). McGraw-Hill. ISBN: 9701072758.",
      "López Montalbán, I. (2ª ed.). Gestión de bases de datos. Editorial. ISBN: 9788415452942."
    ]
},
{
    id: 17,
    title: "Concurrencia",
    description: "Capacidad de un SGBD para permitir que múltiples usuarios accedan y modifiquen la base de datos simultáneamente sin comprometer la integridad.",
    category: "Control de Concurrencia",
    example: "Varios cajeros pueden actualizar el inventario de forma simultánea.",
    references: [
      "Ricardo, C. M. (2009). Bases de datos (V. Campos Olguín & J. Enríquez Brito, Trad.). McGraw-Hill. ISBN: 9701072758.",
      "López Montalbán, I. (2ª ed.). Gestión de bases de datos. Editorial. ISBN: 9788415452942."
    ]
},
{
    id: 18,
    title: "Backup (Copia de Seguridad)",
    description: "Copia de los datos de la base de datos para proteger contra pérdida de información.",
    category: "Seguridad y Mantenimiento",
    example: "Realizar backup diario de la base de datos de clientes.",
    references: [
      "Ricardo, C. M. (2009). Bases de datos (V. Campos Olguín & J. Enríquez Brito, Trad.). McGraw-Hill. ISBN: 9701072758.",
      "López Montalbán, I. (2ª ed.). Gestión de bases de datos. Editorial. ISBN: 9788415452942."
    ]
},
{
    id: 19,
    title: "Recuperación",
    description: "Proceso de restaurar los datos de la base de datos a su estado original después de un fallo.",
    category: "Seguridad y Mantenimiento",
    example: "Recuperar la base de datos después de un fallo del servidor.",
    references: [
      "Ricardo, C. M. (2009). Bases de datos (V. Campos Olguín & J. Enríquez Brito, Trad.). McGraw-Hill. ISBN: 9701072758.",
      "López Montalbán, I. (2ª ed.). Gestión de bases de datos. Editorial. ISBN: 9788415452942."
    ]
},
{
    id: 20,
    title: "Escalabilidad",
    description: "Capacidad de una base de datos para manejar un aumento en la carga de trabajo sin afectar su rendimiento.",
    category: "Seguridad y Mantenimiento",
    example: "Ampliar servidores de base de datos para soportar más usuarios simultáneos.",
    references: [
      "Ricardo, C. M. (2009). Bases de datos (V. Campos Olguín & J. Enríquez Brito, Trad.). McGraw-Hill. ISBN: 9701072758.",
      "López Montalbán, I. (2ª ed.). Gestión de bases de datos. Editorial. ISBN: 9788415452942."
    ]
},
{
    id: 21,
    title: "Base de Datos Distribuida",
    description: "Conjunto de bases de datos que están distribuidas en diferentes ubicaciones pero que funcionan como una sola.",
    category: "Modelos de Datos",
    example: "Varias sucursales de una empresa con bases de datos conectadas que funcionan como una sola.",
    references: [
      "Ricardo, C. M. (2009). Bases de datos (V. Campos Olguín & J. Enríquez Brito, Trad.). McGraw-Hill. ISBN: 9701072758.",
      "López Montalbán, I. (2ª ed.). Gestión de bases de datos. Editorial. ISBN: 9788415452942."
    ]
},
{
    id: 22,
    title: "Base de Datos No Relacional (NoSQL)",
    description: "Tipo de base de datos que no utiliza el modelo relacional y es adecuada para manejar grandes volúmenes de datos no estructurados.",
    category: "Modelos de Datos",
    example: "MongoDB almacena documentos JSON para manejar datos no estructurados.",
    references: [
      "Ricardo, C. M. (2009). Bases de datos (V. Campos Olguín & J. Enríquez Brito, Trad.). McGraw-Hill. ISBN: 9701072758.",
      "López Montalbán, I. (2ª ed.). Gestión de bases de datos. Editorial. ISBN: 9788415452942."
    ]
},
{
    id: 23,
    title: "Modelo Entidad-Relación (ER)",
    description: "Modelo de datos que representa las entidades de un dominio y las relaciones entre ellas.",
    category: "Modelos de Datos",
    example: "Diagrama ER que muestra Clientes, Pedidos y la relación entre ellos.",
    references: [
      "Ricardo, C. M. (2009). Bases de datos (V. Campos Olguín & J. Enríquez Brito, Trad.). McGraw-Hill. ISBN: 9701072758.",
      "López Montalbán, I. (2ª ed.). Gestión de bases de datos. Editorial. ISBN: 9788415452942."
    ]
},
{
    id: 24,
    title: "Diagrama Entidad-Relación (ERD)",
    description: "Representación gráfica del modelo ER, que muestra las entidades, atributos y relaciones.",
    category: "Modelos de Datos",
    example: "Diagrama que visualiza la relación entre las tablas Clientes y Pedidos.",
    references: [
      "Ricardo, C. M. (2009). Bases de datos (V. Campos Olguín & J. Enríquez Brito, Trad.). McGraw-Hill. ISBN: 9701072758.",
      "López Montalbán, I. (2ª ed.). Gestión de bases de datos. Editorial. ISBN: 9788415452942."
    ]
},
{
    id: 25,
    title: "Dependencia Funcional",
    description: "Relación entre dos conjuntos de atributos en una base de datos, donde un conjunto determina al otro.",
    category: "Integridad de Datos",
    example: "El número de empleado determina el nombre y puesto del empleado.",
    references: [
      "Ricardo, C. M. (2009). Bases de datos (V. Campos Olguín & J. Enríquez Brito, Trad.). McGraw-Hill. ISBN: 9701072758.",
      "López Montalbán, I. (2ª ed.). Gestión de bases de datos. Editorial. ISBN: 9788415452942."
    ]
},
{
    id: 26,
    title: "Primera Forma Normal (1NF)",
    description: "Condición en la que los dominios de los atributos contienen solo valores atómicos y cada valor en una columna es único.",
    category: "Normalización",
    example: "Dividir un campo de dirección en calle, ciudad y código postal.",
    references: [
      "Ricardo, C. M. (2009). Bases de datos (V. Campos Olguín & J. Enríquez Brito, Trad.). McGraw-Hill. ISBN: 9701072758.",
      "López Montalbán, I. (2ª ed.). Gestión de bases de datos. Editorial. ISBN: 9788415452942."
    ]
},
{
    id: 27,
    title: "Segunda Forma Normal (2NF)",
    description: "Condición en la que una base de datos está en 1NF y cada atributo no clave depende completamente de la clave primaria.",
    category: "Normalización",
    example: "Separar información de pedidos de la información del cliente para eliminar dependencias parciales.",
    references: [
      "Ricardo, C. M. (2009). Bases de datos (V. Campos Olguín & J. Enríquez Brito, Trad.). McGraw-Hill. ISBN: 9701072758.",
      "López Montalbán, I. (2ª ed.). Gestión de bases de datos. Editorial. ISBN: 9788415452942."
    ]
},
{
    id: 28,
    title: "Tercera Forma Normal (3NF)",
    description: "Condición en la que una base de datos está en 2NF y no existen dependencias transitivas entre atributos no clave.",
    category: "Normalización",
    example: "Mover el campo 'Ciudad del cliente' a otra tabla si depende de un atributo distinto al ID del cliente.",
    references: [
      "Ricardo, C. M. (2009). Bases de datos (V. Campos Olguín & J. Enríquez Brito, Trad.). McGraw-Hill. ISBN: 9701072758.",
      "López Montalbán, I. (2ª ed.). Gestión de bases de datos. Editorial. ISBN: 9788415452942."
    ]
},
{
    id: 29,
    title: "Dependencia Transitiva",
    description: "Situación en la que un atributo A determina a un atributo B, y B determina a C, lo que implica que A determina a C indirectamente.",
    category: "Normalización",
    example: "Si ID_Empleado determina Departamento y Departamento determina Ubicación, entonces ID_Empleado determina Ubicación.",
    references: [
      "Ricardo, C. M. (2009). Bases de datos (V. Campos Olguín & J. Enríquez Brito, Trad.). McGraw-Hill. ISBN: 9701072758.",
      "López Montalbán, I. (2ª ed.). Gestión de bases de datos. Editorial. ISBN: 9788415452942."
    ]
},
{
    id: 30,
    title: "Clave Candidata",
    description: "Conjunto mínimo de atributos que puede identificar de manera única una tupla en una relación.",
    category: "Modelos de Datos",
    example: "En la tabla de empleados, tanto el ID como el correo electrónico podrían ser claves candidatas.",
    references: [
      "Ricardo, C. M. (2009). Bases de datos (V. Campos Olguín & J. Enríquez Brito, Trad.). McGraw-Hill. ISBN: 9701072758.",
      "López Montalbán, I. (2ª ed.). Gestión de bases de datos. Editorial. ISBN: 9788415452942."
    ]
},
{
    id: 31,
    title: "Esquema de Base de Datos",
    description: "Estructura que define la organización de los datos, incluyendo tablas, vistas, índices y relaciones.",
    category: "Modelos de Datos",
    example: "Diseño de tablas, relaciones y restricciones antes de llenar datos reales.",
    references: [
      "Ricardo, C. M. (2009). Bases de datos (V. Campos Olguín & J. Enríquez Brito, Trad.). McGraw-Hill. ISBN: 9701072758.",
      "López Montalbán, I. (2ª ed.). Gestión de bases de datos. Editorial. ISBN: 9788415452942."
    ]
},
{
    id: 32,
    title: "Diccionario de Datos",
    description: "Repositorio que almacena información sobre los objetos de la base de datos, como tablas, vistas, índices y restricciones.",
    category: "Modelos de Datos",
    example: "Tabla que describe cada columna de la base de datos, sus tipos de datos y restricciones.",
    references: [
      "Ricardo, C. M. (2009). Bases de datos (V. Campos Olguín & J. Enríquez Brito, Trad.). McGraw-Hill. ISBN: 9701072758.",
      "López Montalbán, I. (2ª ed.). Gestión de bases de datos. Editorial. ISBN: 9788415452942."
    ]
},
{
    id: 33,
    title: "Valor Atómico",
    description: "Valor indivisible que no puede ser descompuesto en componentes más pequeños.",
    category: "Normalización",
    example: "El nombre completo de un cliente debería dividirse en 'Nombre' y 'Apellido' para cumplir 1NF.",
    references: [
      "Ricardo, C. M. (2009). Bases de datos (V. Campos Olguín & J. Enríquez Brito, Trad.). McGraw-Hill. ISBN: 9701072758.",
      "López Montalbán, I. (2ª ed.). Gestión de bases de datos. Editorial. ISBN: 9788415452942."
    ]
},
{
    id: 34,
    title: "Dependencia Multivaluada",
    description: "Situación en la que un atributo determina un conjunto de valores independientes de otros atributos.",
    category: "Normalización",
    example: "Un profesor puede enseñar varios cursos y tener múltiples direcciones de correo, independientes entre sí.",
    references: [
      "Ricardo, C. M. (2009). Bases de datos (V. Campos Olguín & J. Enríquez Brito, Trad.). McGraw-Hill. ISBN: 9701072758.",
      "López Montalbán, I. (2ª ed.). Gestión de bases de datos. Editorial. ISBN: 9788415452942."
    ]
},
{
    id: 35,
    title: "Cuarta Forma Normal (4NF)",
    description: "Condición en la que una base de datos está en 3NF y no existen dependencias multivaluadas.",
    category: "Normalización",
    example: "Separar tablas para que cada tabla trate un solo conjunto de dependencias multivaluadas.",
    references: [
      "Ricardo, C. M. (2009). Bases de datos (V. Campos Olguín & J. Enríquez Brito, Trad.). McGraw-Hill. ISBN: 9701072758.",
      "López Montalbán, I. (2ª ed.). Gestión de bases de datos. Editorial. ISBN: 9788415452942."
    ]
},
{
    id: 36,
    title: "Quinta Forma Normal (5NF)",
    description: "Condición en la que una base de datos está en 4NF y no existen dependencias de unión.",
    category: "Normalización",
    example: "Dividir tablas para evitar pérdidas de información al combinar relaciones.",
    references: [
      "Ricardo, C. M. (2009). Bases de datos (V. Campos Olguín & J. Enríquez Brito, Trad.). McGraw-Hill. ISBN: 9701072758.",
      "López Montalbán, I. (2ª ed.). Gestión de bases de datos. Editorial. ISBN: 9788415452942."
    ]
},
{
    id: 37,
    title: "Dependencia de Unión",
    description: "Situación en la que una relación puede ser descompuesta en varias relaciones sin pérdida de información.",
    category: "Normalización",
    example: "Separar información de pedidos y productos sin perder detalles de la venta.",
    references: [
      "Ricardo, C. M. (2009). Bases de datos (V. Campos Olguín & J. Enríquez Brito, Trad.). McGraw-Hill. ISBN: 9701072758.",
      "López Montalbán, I. (2ª ed.). Gestión de bases de datos. Editorial. ISBN: 9788415452942."
    ]
},
{
    id: 38,
    title: "Desnormalización",
    description: "Proceso de introducir redundancia en una base de datos para mejorar el rendimiento de las consultas.",
    category: "Optimización",
    example: "Combinar tablas que normalmente estarían separadas para acelerar consultas frecuentes.",
    references: [
      "Ricardo, C. M. (2009). Bases de datos (V. Campos Olguín & J. Enríquez Brito, Trad.). McGraw-Hill. ISBN: 9701072758.",
      "López Montalbán, I. (2ª ed.). Gestión de bases de datos. Editorial. ISBN: 9788415452942."
    ]
},
{
    id: 39,
    title: "Integridad de los Datos",
    description: "Conjunto de reglas y restricciones que aseguran la precisión y consistencia de los datos en una base de datos.",
    category: "Control de Concurrencia",
    example: "Evitar duplicados de ID de clientes y asegurar formatos válidos para emails.",
    references: [
      "Ricardo, C. M. (2009). Bases de datos (V. Campos Olguín & J. Enríquez Brito, Trad.). McGraw-Hill. ISBN: 9701072758.",
      "López Montalbán, I. (2ª ed.). Gestión de bases de datos. Editorial. ISBN: 9788415452942."
    ]
},
{
    id: 40,
    title: "Propiedades ACID",
    description: "Conjunto de propiedades que garantizan que las transacciones se procesen de manera fiable: Atomicidad, Consistencia, Aislamiento y Durabilidad.",
    category: "Control de Concurrencia",
    example: "En una transferencia bancaria, el dinero se debita y acredita correctamente sin pérdida ni duplicación.",
    references: [
      "Ricardo, C. M. (2009). Bases de datos (V. Campos Olguín & J. Enríquez Brito, Trad.). McGraw-Hill. ISBN: 9701072758.",
      "López Montalbán, I. (2ª ed.). Gestión de bases de datos. Editorial. ISBN: 9788415452942."
    ]
},
{
    id: 41,
    title: "Transacción",
    description: "Conjunto de operaciones que se ejecutan como una unidad indivisible, garantizando la consistencia de la base de datos.",
    category: "Control de Concurrencia",
    example: "Transferencia de fondos de una cuenta a otra, que se completa completamente o no se realiza.",
    references: [
      "Ricardo, C. M. (2009). Bases de datos (V. Campos Olguín & J. Enríquez Brito, Trad.). McGraw-Hill. ISBN: 9701072758.",
      "López Montalbán, I. (2ª ed.). Gestión de bases de datos. Editorial. ISBN: 9788415452942."
    ]
},
{
    id: 42,
    title: "Control de Concurrencia",
    description: "Mecanismo que asegura que las transacciones concurrentes no interfieran entre sí, manteniendo la integridad de la base de datos.",
    category: "Control de Concurrencia",
    example: "Dos usuarios actualizan el mismo registro al mismo tiempo sin generar inconsistencias.",
    references: [
      "Ricardo, C. M. (2009). Bases de datos (V. Campos Olguín & J. Enríquez Brito, Trad.). McGraw-Hill. ISBN: 9701072758.",
      "López Montalbán, I. (2ª ed.). Gestión de bases de datos. Editorial. ISBN: 9788415452942."
    ]
},
{
    id: 43,
    title: "Bloqueo (Locking)",
    description: "Mecanismo que impide que otras transacciones accedan a los mismos datos simultáneamente, evitando conflictos.",
    category: "Control de Concurrencia",
    example: "Bloquear un registro mientras se actualiza para que nadie más lo modifique hasta finalizar la transacción.",
    references: [
      "Ricardo, C. M. (2009). Bases de datos (V. Campos Olguín & J. Enríquez Brito, Trad.). McGraw-Hill. ISBN: 9701072758.",
      "López Montalbán, I. (2ª ed.). Gestión de bases de datos. Editorial. ISBN: 9788415452942."
    ]
},
{
    id: 44,
    title: "Deadlock (Interbloqueo)",
    description: "Situación en la que dos o más transacciones están esperando indefinidamente por recursos que están siendo utilizados por otras transacciones.",
    category: "Control de Concurrencia",
    example: "Transacción A espera que B libere un recurso mientras B espera que A libere otro.",
    references: [
      "Ricardo, C. M. (2009). Bases de datos (V. Campos Olguín & J. Enríquez Brito, Trad.). McGraw-Hill. ISBN: 9701072758.",
      "López Montalbán, I. (2ª ed.). Gestión de bases de datos. Editorial. ISBN: 9788415452942."
    ]
},
{
    id: 45,
    title: "Rollback",
    description: "Operación que revierte los cambios realizados por una transacción, restaurando el estado anterior de la base de datos.",
    category: "Control de Concurrencia",
    example: "Cancelar una actualización de registros de inventario si ocurre un error durante la transacción.",
    references: [
      "Ricardo, C. M. (2009). Bases de datos (V. Campos Olguín & J. Enríquez Brito, Trad.). McGraw-Hill. ISBN: 9701072758.",
      "López Montalbán, I. (2ª ed.). Gestión de bases de datos. Editorial. ISBN: 9788415452942."
    ]
},
{
    id: 46,
    title: "Commit",
    description: "Operación que confirma los cambios realizados por una transacción, haciendo permanentes los cambios en la base de datos.",
    category: "Control de Concurrencia",
    example: "Confirmar la actualización de saldo en una transferencia bancaria.",
    references: [
      "Ricardo, C. M. (2009). Bases de datos (V. Campos Olguín & J. Enríquez Brito, Trad.). McGraw-Hill. ISBN: 9701072758.",
      "López Montalbán, I. (2ª ed.). Gestión de bases de datos. Editorial. ISBN: 9788415452942."
    ]
},
{
    id: 47,
    title: "Modelo de Datos Jerárquico",
    description: "Modelo de datos que organiza los datos en una estructura de árbol, donde cada registro tiene un único padre.",
    category: "Modelos de Datos",
    example: "Base de datos de empleados con departamentos organizados en un árbol jerárquico.",
    references: [
      "Ricardo, C. M. (2009). Bases de datos (V. Campos Olguín & J. Enríquez Brito, Trad.). McGraw-Hill. ISBN: 9701072758.",
      "López Montalbán, I. (2ª ed.). Gestión de bases de datos. Editorial. ISBN: 9788415452942."
    ]
},
{
    id: 48,
    title: "Modelo de Datos en Red",
    description: "Modelo de datos que organiza los datos en una estructura de grafos, permitiendo que un registro tenga múltiples padres.",
    category: "Modelos de Datos",
    example: "Sistema de gestión de bibliotecas donde un libro puede pertenecer a múltiples categorías.",
    references: [
      "Ricardo, C. M. (2009). Bases de datos (V. Campos Olguín & J. Enríquez Brito, Trad.). McGraw-Hill. ISBN: 9701072758.",
      "López Montalbán, I. (2ª ed.). Gestión de bases de datos. Editorial. ISBN: 9788415452942."
    ]
},
{
    id: 49,
    title: "Modelo de Datos Orientado a Objetos",
    description: "Modelo de datos que utiliza conceptos de la programación orientada a objetos, como clases y objetos, para representar datos.",
    category: "Modelos de Datos",
    example: "Un objeto 'Empleado' con atributos y métodos asociados en la base de datos.",
    references: [
      "Ricardo, C. M. (2009). Bases de datos (V. Campos Olguín & J. Enríquez Brito, Trad.). McGraw-Hill. ISBN: 9701072758.",
      "López Montalbán, I. (2ª ed.). Gestión de bases de datos. Editorial. ISBN: 9788415452942."
    ]
},
{
    id: 50,
    title: "Modelo de Datos Objeto-Relacional",
    description: "Modelo de datos que combina características de los modelos relacional y orientado a objetos.",
    category: "Modelos de Datos",
    example: "Tabla de empleados con columnas que almacenan objetos complejos, como direcciones.",
    references: [
      "Ricardo, C. M. (2009). Bases de datos (V. Campos Olguín & J. Enríquez Brito, Trad.). McGraw-Hill. ISBN: 9701072758.",
      "López Montalbán, I. (2ª ed.). Gestión de bases de datos. Editorial. ISBN: 9788415452942."
    ]
},
{
    id: 51,
    title: "Lenguaje de Definición de Datos (DDL)",
    description: "Lenguaje que permite definir la estructura de la base de datos, como la creación de tablas y relaciones.",
    category: "Lenguajes SQL",
    example: "Comando CREATE TABLE para definir la estructura de una nueva tabla.",
    references: [
      "Ricardo, C. M. (2009). Bases de datos (V. Campos Olguín & J. Enríquez Brito, Trad.). McGraw-Hill. ISBN: 9701072758.",
      "López Montalbán, I. (2ª ed.). Gestión de bases de datos. Editorial. ISBN: 9788415452942."
    ]
},
{
    id: 52,
    title: "Lenguaje de Manipulación de Datos (DML)",
    description: "Lenguaje que permite insertar, actualizar, eliminar y consultar datos en la base de datos.",
    category: "Lenguajes SQL",
    example: "Comando INSERT INTO para agregar un nuevo registro en una tabla.",
    references: [
      "Ricardo, C. M. (2009). Bases de datos (V. Campos Olguín & J. Enríquez Brito, Trad.). McGraw-Hill. ISBN: 9701072758.",
      "López Montalbán, I. (2ª ed.). Gestión de bases de datos. Editorial. ISBN: 9788415452942."
    ]
},
{
    id: 53,
    title: "Lenguaje de Control de Datos (DCL)",
    description: "Lenguaje que permite controlar el acceso a los datos, como la concesión y revocación de privilegios.",
    category: "Lenguajes SQL",
    example: "Comando GRANT para otorgar permisos a un usuario.",
    references: [
      "Ricardo, C. M. (2009). Bases de datos (V. Campos Olguín & J. Enríquez Brito, Trad.). McGraw-Hill. ISBN: 9701072758.",
      "López Montalbán, I. (2ª ed.). Gestión de bases de datos. Editorial. ISBN: 9788415452942."
    ]
},
{
    id: 54,
    title: "Lenguaje de Control de Transacciones (TCL)",
    description: "Lenguaje que permite controlar las transacciones, como la confirmación (commit) y reversión (rollback) de transacciones.",
    category: "Lenguajes SQL",
    example: "Comando COMMIT para hacer permanentes los cambios de una transacción.",
    references: [
      "Ricardo, C. M. (2009). Bases de datos (V. Campos Olguín & J. Enríquez Brito, Trad.). McGraw-Hill. ISBN: 9701072758.",
      "López Montalbán, I. (2ª ed.). Gestión de bases de datos. Editorial. ISBN: 9788415452942."
    ]
},
{
    id: 55,
    title: "Sistema de Base de Datos Distribuida",
    description: "Sistema de base de datos en el que los datos están distribuidos en múltiples ubicaciones físicas.",
    category: "Modelos de Datos",
    example: "Varios servidores de bases de datos geográficamente distribuidos que se gestionan como uno solo.",
    references: [
      "Ricardo, C. M. (2009). Bases de datos (V. Campos Olguín & J. Enríquez Brito, Trad.). McGraw-Hill. ISBN: 9701072758.",
      "López Montalbán, I. (2ª ed.). Gestión de bases de datos. Editorial. ISBN: 9788415452942."
    ]
},
{
    id: 56,
    title: "Replicación de Datos",
    description: "Proceso de duplicar datos en múltiples ubicaciones para mejorar la disponibilidad y fiabilidad.",
    category: "Optimización",
    example: "Copiar la base de datos principal a servidores secundarios para evitar pérdida de información.",
    references: [
      "Ricardo, C. M. (2009). Bases de datos (V. Campos Olguín & J. Enríquez Brito, Trad.). McGraw-Hill. ISBN: 9701072758.",
      "López Montalbán, I. (2ª ed.). Gestión de bases de datos. Editorial. ISBN: 9788415452942."
    ]
},
{
    id: 57,
    title: "Fragmentación de Datos",
    description: "Proceso de dividir una base de datos en fragmentos más pequeños, que pueden ser almacenados en diferentes ubicaciones.",
    category: "Optimización",
    example: "Separar la tabla de pedidos por regiones geográficas para mejorar el rendimiento.",
    references: [
      "Ricardo, C. M. (2009). Bases de datos (V. Campos Olguín & J. Enríquez Brito, Trad.). McGraw-Hill. ISBN: 9701072758.",
      "López Montalbán, I. (2ª ed.). Gestión de bases de datos. Editorial. ISBN: 9788415452942."
    ]
},
{
    id: 58,
    title: "Base de Datos en la Nube",
    description: "Servicio de base de datos que se ofrece a través de la nube, permitiendo el acceso remoto y escalabilidad.",
    category: "Modelos de Datos",
    example: "Amazon RDS o Google Cloud SQL para almacenar y gestionar bases de datos en la nube.",
    references: [
      "Ricardo, C. M. (2009). Bases de datos (V. Campos Olguín & J. Enríquez Brito, Trad.). McGraw-Hill. ISBN: 9701072758.",
      "López Montalbán, I. (2ª ed.). Gestión de bases de datos. Editorial. ISBN: 9788415452942."
    ]
},
{
    id: 59,
    title: "Big Data",
    description: "Conjunto de datos que es tan grande y complejo que las aplicaciones tradicionales de procesamiento de datos no son suficientes para manejarlos.",
    category: "Gestión de Datos",
    example: "Analizar millones de registros de redes sociales para identificar tendencias de mercado.",
    references: [
      "Ricardo, C. M. (2009). Bases de datos (V. Campos Olguín & J. Enríquez Brito, Trad.). McGraw-Hill. ISBN: 9701072758.",
      "López Montalbán, I. (2ª ed.). Gestión de bases de datos. Editorial. ISBN: 9788415452942."
    ]
},
{
    id: 60,
    title: "Data Warehouse (Almacén de Datos)",
    description: "Sistema utilizado para almacenar grandes volúmenes de datos históricos, facilitando el análisis y la toma de decisiones.",
    category: "Gestión de Datos",
    example: "Almacenar datos de ventas de los últimos 5 años para generar reportes de tendencias.",
    references: [
      "Ricardo, C. M. (2009). Bases de datos (V. Campos Olguín & J. Enríquez Brito, Trad.). McGraw-Hill. ISBN: 9701072758.",
      "López Montalbán, I. (2ª ed.). Gestión de bases de datos. Editorial. ISBN: 9788415452942."
    ]
},
{
    id: 79,
    title: "Data Mining",
    description: "Proceso de descubrir patrones y relaciones en grandes volúmenes de datos mediante técnicas estadísticas o de aprendizaje automático.",
    category: "Data Warehouse / BI",
    example: "Analizar el comportamiento de clientes para predecir compras futuras.",
    references: [
      "Ricardo, C. M. (2009). Bases de datos (V. Campos Olguín & J. Enríquez Brito, Trad.). McGraw-Hill.",
      "López Montalbán, I. (2ª ed.). Gestión de bases de datos. Editorial."
    ]
  },
{
    id: 80,
    title: "Business Intelligence",
    description: "Conjunto de tecnologías y prácticas para recolectar, integrar, analizar y presentar información empresarial para la toma de decisiones.",
    category: "Data Warehouse / BI",
    example: "Dashboards con indicadores clave de rendimiento (KPI) de ventas y finanzas.",
    references: [
      "Ricardo, C. M. (2009). Bases de datos (V. Campos Olguín & J. Enríquez Brito, Trad.). McGraw-Hill.",
      "López Montalbán, I. (2ª ed.). Gestión de bases de datos. Editorial."
    ]
  },
{
    id: 81,
    title: "ETL",
    description: "Proceso de extracción de datos de diversas fuentes, transformación de los mismos y carga en un almacén de datos.",
    category: "Data Warehouse / BI",
    example: "Extraer datos de ventas, transformarlos a un formato estándar y cargarlos en un Data Warehouse.",
    references: [
      "Ricardo, C. M. (2009). Bases de datos (V. Campos Olguín & J. Enríquez Brito, Trad.). McGraw-Hill.",
      "López Montalbán, I. (2ª ed.). Gestión de bases de datos. Editorial."
    ]
  },
{
    id: 82,
    title: "Modelo Entidad-Relación (ER)",
    description: "Modelo de datos que representa las entidades de un dominio y las relaciones entre ellas.",
    category: "Modelo de Datos",
    example: "Diagrama ER mostrando Clientes, Pedidos y la relación entre ellos.",
    references: [
      "Ricardo, C. M. (2009). Bases de datos (V. Campos Olguín & J. Enríquez Brito, Trad.). McGraw-Hill.",
      "López Montalbán, I. (2ª ed.). Gestión de bases de datos. Editorial."
    ]
  },
{
    id: 83,
    title: "Diagrama ER",
    description: "Representación visual del modelo Entidad-Relación que facilita la comprensión del diseño de la base de datos.",
    category: "Modelo de Datos",
    example: "Diagrama con rectángulos para entidades y rombos para relaciones.",
    references: [
      "Ricardo, C. M. (2009). Bases de datos (V. Campos Olguín & J. Enríquez Brito, Trad.). McGraw-Hill.",
      "López Montalbán, I. (2ª ed.). Gestión de bases de datos. Editorial."
    ]
  },
{
    id: 84,
    title: "Cardinalidad",
    description: "Número de instancias de una entidad que pueden estar asociadas a una instancia de otra entidad en una relación.",
    category: "Modelo de Datos",
    example: "Un cliente puede tener múltiples pedidos, pero un pedido pertenece a un solo cliente.",
    references: [
      "Ricardo, C. M. (2009). Bases de datos (V. Campos Olguín & J. Enríquez Brito, Trad.). McGraw-Hill.",
      "López Montalbán, I. (2ª ed.). Gestión de bases de datos. Editorial."
    ]
  },
{
    id: 85,
    title: "Participación",
    description: "Indica si todas las instancias de una entidad deben participar en una relación.",
    category: "Modelo de Datos",
    example: "Todos los empleados deben tener un departamento asignado (participación total).",
    references: [
      "Ricardo, C. M. (2009). Bases de datos (V. Campos Olguín & J. Enríquez Brito, Trad.). McGraw-Hill.",
      "López Montalbán, I. (2ª ed.). Gestión de bases de datos. Editorial."
    ]
  },
{
    id: 86,
    title: "Atributo Compuesto",
    description: "Atributo que puede descomponerse en subatributos más simples.",
    category: "Modelo de Datos",
    example: "Dirección dividida en Calle, Número, Ciudad y Código Postal.",
    references: [
      "Ricardo, C. M. (2009). Bases de datos (V. Campos Olguín & J. Enríquez Brito, Trad.). McGraw-Hill.",
      "López Montalbán, I. (2ª ed.). Gestión de bases de datos. Editorial."
    ]
  },
{
    id: 87,
    title: "Atributo Derivado",
    description: "Atributo cuyo valor puede calcularse a partir de otros atributos.",
    category: "Modelo de Datos",
    example: "Edad calculada a partir de la fecha de nacimiento.",
    references: [
      "Ricardo, C. M. (2009). Bases de datos (V. Campos Olguín & J. Enríquez Brito, Trad.). McGraw-Hill.",
      "López Montalbán, I. (2ª ed.). Gestión de bases de datos. Editorial."
    ]
  },
{
    id: 88,
    title: "Entidad Débil",
    description: "Entidad que no puede identificarse de manera única sin depender de otra entidad fuerte.",
    category: "Modelo de Datos",
    example: "Detalle de pedido que depende de la entidad Pedido.",
    references: [
      "Ricardo, C. M. (2009). Bases de datos (V. Campos Olguín & J. Enríquez Brito, Trad.). McGraw-Hill.",
      "López Montalbán, I. (2ª ed.). Gestión de bases de datos. Editorial."
    ]
  },
{
    id: 89,
    title: "Relación Identificadora",
    description: "Relación que conecta una entidad débil con su entidad fuerte asociada.",
    category: "Modelo de Datos",
    example: "Detalle de pedido relacionado con la tabla Pedido mediante su clave primaria.",
    references: [
      "Ricardo, C. M. (2009). Bases de datos (V. Campos Olguín & J. Enríquez Brito, Trad.). McGraw-Hill.",
      "López Montalbán, I. (2ª ed.). Gestión de bases de datos. Editorial."
    ]
  },
{
    id: 90,
    title: "Relación No Identificadora",
    description: "Relación entre entidades que no implica dependencia de identificación.",
    category: "Modelo de Datos",
    example: "Asignación de proyectos a empleados sin necesidad de que el proyecto dependa de la existencia del empleado.",
    references: [
      "Ricardo, C. M. (2009). Bases de datos (V. Campos Olguín & J. Enríquez Brito, Trad.). McGraw-Hill.",
      "López Montalbán, I. (2ª ed.). Gestión de bases de datos. Editorial."
    ]
  },
{
    id: 91,
    title: "Generalización",
    description: "Proceso de abstraer entidades comunes en una entidad superior.",
    category: "Modelo de Datos",
    example: "Combinar las entidades 'Empleado' y 'Cliente' en una entidad superior 'Persona'.",
    references: [
      "Ricardo, C. M. (2009). Bases de datos (V. Campos Olguín & J. Enríquez Brito, Trad.). McGraw-Hill.",
      "López Montalbán, I. (2ª ed.). Gestión de bases de datos. Editorial."
    ]
  },
{
    id: 92,
    title: "Especialización",
    description: "Proceso de dividir una entidad en subentidades más específicas.",
    category: "Modelo de Datos",
    example: "Dividir la entidad 'Empleado' en 'Empleado Administrativo' y 'Empleado de Producción'.",
    references: [
      "Ricardo, C. M. (2009). Bases de datos (V. Campos Olguín & J. Enríquez Brito, Trad.). McGraw-Hill.",
      "López Montalbán, I. (2ª ed.). Gestión de bases de datos. Editorial."
    ]
  },
{
    id: 93,
    title: "Herencia",
    description: "Propiedad que permite a una entidad adquirir atributos y relaciones de una entidad superior.",
    category: "Modelo de Datos",
    example: "Un 'Empleado Administrativo' hereda atributos de la entidad 'Empleado'.",
    references: [
      "Ricardo, C. M. (2009). Bases de datos (V. Campos Olguín & J. Enríquez Brito, Trad.). McGraw-Hill.",
      "López Montalbán, I. (2ª ed.). Gestión de bases de datos. Editorial."
    ]
  },
{
    id: 94,
    title: "Generalización-Especialización",
    description: "Combinación de los procesos de generalización y especialización en un solo diagrama.",
    category: "Modelo de Datos",
    example: "Un diagrama ER que muestre la entidad 'Persona' generalizada y las subentidades 'Cliente' y 'Empleado'.",
    references: [
      "Ricardo, C. M. (2009). Bases de datos (V. Campos Olguín & J. Enríquez Brito, Trad.). McGraw-Hill.",
      "López Montalbán, I. (2ª ed.). Gestión de bases de datos. Editorial."
    ]
  },
{
    id: 95,
    title: "ACID",
    description: "Conjunto de propiedades (Atomicidad, Consistencia, Aislamiento y Durabilidad) que garantizan la confiabilidad de las transacciones.",
    category: "Transacciones",
    example: "Una transacción bancaria donde el retiro y depósito se completan correctamente o se revierten totalmente.",
    references: [
      "Ricardo, C. M. (2009). Bases de datos (V. Campos Olguín & J. Enríquez Brito, Trad.). McGraw-Hill.",
      "López Montalbán, I. (2ª ed.). Gestión de bases de datos. Editorial."
    ]
  },
{
    id: 96,
    title: "Álgebra Relacional",
    description: "Conjunto de operaciones matemáticas que permiten manipular y consultar datos en bases de datos relacionales.",
    category: "Modelo Relacional",
    example: "Operaciones de selección, proyección y unión sobre tablas de una base de datos.",
    references: [
      "Ricardo, C. M. (2009). Bases de datos (V. Campos Olguín & J. Enríquez Brito, Trad.). McGraw-Hill.",
      "López Montalbán, I. (2ª ed.). Gestión de bases de datos. Editorial."
    ]
  },
{
    id: 97,
    title: "Backup (Copia de Seguridad)",
    description: "Respaldo de los datos de una base para evitar pérdidas en caso de fallos.",
    category: "Administración de Bases de Datos",
    example: "Hacer una copia diaria de la base de datos de ventas en un servidor externo.",
    references: [
      "Ricardo, C. M. (2009). Bases de datos (V. Campos Olguín & J. Enríquez Brito, Trad.). McGraw-Hill.",
      "López Montalbán, I. (2ª ed.). Gestión de bases de datos. Editorial."
    ]
  },
{
    id: 98,
    title: "Cliente-Servidor",
    description: "Arquitectura en la que un cliente solicita servicios o datos a un servidor de base de datos.",
    category: "Arquitectura de Bases de Datos",
    example: "Aplicación de ventas que solicita información de clientes a un servidor central.",
    references: [
      "Ricardo, C. M. (2009). Bases de datos (V. Campos Olguín & J. Enríquez Brito, Trad.). McGraw-Hill.",
      "López Montalbán, I. (2ª ed.). Gestión de bases de datos. Editorial."
    ]
  },
{
    id: 99,
    title: "Consulta (Query)",
    description: "Instrucción en SQL u otro lenguaje para obtener, modificar o gestionar información en la base de datos.",
    category: "Lenguaje SQL",
    example: "SELECT * FROM Clientes WHERE Ciudad = 'Ciudad de México';",
    references: [
      "Ricardo, C. M. (2009). Bases de datos (V. Campos Olguín & J. Enríquez Brito, Trad.). McGraw-Hill.",
      "López Montalbán, I. (2ª ed.). Gestión de bases de datos. Editorial."
    ]
  },
{
    id: 100,
    title: "Consistencia",
    description: "Propiedad ACID que asegura que la base de datos pase de un estado válido a otro válido después de una transacción.",
    category: "Transacciones",
    example: "Las transacciones llevan a la base de datos de un estado válido a otro también válido.",
    references: [
      "Ricardo, C. M. (2009). Bases de datos (V. Campos Olguín & J. Enríquez Brito, Trad.). McGraw-Hill.",
      "López Montalbán, I. (2ª ed.). Gestión de bases de datos. Editorial."
    ]
  },
  {
    id: 101,
    title: "Dato",
    description: "Representación simbólica de un hecho o valor.",
    category: "Conceptos Básicos",
    example: "El número 25 representa la edad de una persona.",
    references: [
      "Ricardo, C. M. (2009). Bases de datos (V. Campos Olguín & J. Enríquez Brito, Trad.). McGraw-Hill.",
      "López Montalbán, I. (2ª ed.). Gestión de bases de datos. Editorial."
    ]
  },
{
    id: 102,
    title: "DBMS (Database Management System)",
    description: "Sistema de gestión de bases de datos, software que permite administrar, consultar y manipular datos.",
    category: "Sistema de Bases de Datos",
    example: "MySQL, Oracle, SQL Server y PostgreSQL son ejemplos de DBMS.",
    references: [
      "Ricardo, C. M. (2009). Bases de datos (V. Campos Olguín & J. Enríquez Brito, Trad.). McGraw-Hill.",
      "López Montalbán, I. (2ª ed.). Gestión de bases de datos. Editorial."
    ]
  },
{
    id: 103,
    title: "DDL (Data Definition Language)",
    description: "Subconjunto de SQL usado para definir la estructura de la base de datos, como CREATE, ALTER y DROP.",
    category: "Lenguaje SQL",
    example: "CREATE TABLE Clientes (ID INT, Nombre VARCHAR(50));",
    references: [
      "Ricardo, C. M. (2009). Bases de datos (V. Campos Olguín & J. Enríquez Brito, Trad.). McGraw-Hill.",
      "López Montalbán, I. (2ª ed.). Gestión de bases de datos. Editorial."
    ]
  },
{
    id: 104,
    title: "DML (Data Manipulation Language)",
    description: "Subconjunto de SQL usado para manipular datos, incluyendo INSERT, UPDATE, DELETE y SELECT.",
    category: "Lenguaje SQL",
    example: "INSERT INTO Clientes (ID, Nombre) VALUES (1, 'Juan');",
    references: [
      "Ricardo, C. M. (2009). Bases de datos (V. Campos Olguín & J. Enríquez Brito, Trad.). McGraw-Hill.",
      "López Montalbán, I. (2ª ed.). Gestión de bases de datos. Editorial."
    ]
  },
{
    id: 105,
    title: "Dominio",
    description: "Conjunto de valores permitidos para un atributo.",
    category: "Modelo de Datos",
    example: "El atributo 'Edad' puede tener un dominio de 0 a 120.",
    references: [
      "Ricardo, C. M. (2009). Bases de datos (V. Campos Olguín & J. Enríquez Brito, Trad.). McGraw-Hill.",
      "López Montalbán, I. (2ª ed.). Gestión de bases de datos. Editorial."
    ]
  },
{
    id: 106,
    title: "Durabilidad",
    description: "Propiedad ACID que garantiza que una vez confirmada una transacción, los cambios persisten incluso ante fallos.",
    category: "Transacciones",
    example: "Una vez que una transacción se confirma (commit), los cambios persisten incluso ante fallos del sistema.",
    references: [
      "Ricardo, C. M. (2009). Bases de datos (V. Campos Olguín & J. Enríquez Brito, Trad.). McGraw-Hill.",
      "López Montalbán, I. (2ª ed.). Gestión de bases de datos. Editorial."
    ]
  },
{
    id: 107,
    title: "Esquema",
    description: "Estructura que describe cómo están organizados los datos en una base de datos.",
    category: "Modelo de Datos",
    example: "Definir tablas, relaciones, vistas e índices en una base de datos de ventas.",
    references: [
      "Ricardo, C. M. (2009). Bases de datos (V. Campos Olguín & J. Enríquez Brito, Trad.). McGraw-Hill.",
      "López Montalbán, I. (2ª ed.). Gestión de bases de datos. Editorial."
    ]
  },
{
    id: 108,
    title: "Entidad",
    description: "Objeto o cosa real o abstracta de la que se desea almacenar información.",
    category: "Modelo de Datos",
    example: "Cliente, Producto o Empleado son ejemplos de entidades.",
    references: [
      "Ricardo, C. M. (2009). Bases de datos (V. Campos Olguín & J. Enríquez Brito, Trad.). McGraw-Hill.",
      "López Montalbán, I. (2ª ed.). Gestión de bases de datos. Editorial."
    ]
  },
{
    id: 109,
    title: "Forma Normal",
    description: "Reglas que organizan datos en tablas para reducir redundancias y mejorar la integridad.",
    category: "Normalización",
    example: "Una tabla en 3NF no tiene dependencias transitivas entre atributos no clave.",
    references: [
      "Ricardo, C. M. (2009). Bases de datos (V. Campos Olguín & J. Enríquez Brito, Trad.). McGraw-Hill.",
      "López Montalbán, I. (2ª ed.). Gestión de bases de datos. Editorial."
    ]
  },
{
    id: 110,
    title: "Fragmentación",
    description: "División lógica de una base de datos distribuida en partes más pequeñas.",
    category: "Bases de Datos Distribuidas",
    example: "Almacenar datos de clientes de diferentes regiones en servidores separados.",
    references: [
      "Ricardo, C. M. (2009). Bases de datos (V. Campos Olguín & J. Enríquez Brito, Trad.). McGraw-Hill.",
      "López Montalbán, I. (2ª ed.). Gestión de bases de datos. Editorial."
    ]
  },
  {
    id: 111,
    title: "Índice",
    description: "Estructura que mejora la velocidad de acceso a los registros de una tabla.",
    category: "Optimización",
    example: "Crear un índice sobre la columna 'Nombre' para acelerar las búsquedas.",
    references: [
      "Ricardo, C. M. (2009). Bases de datos (V. Campos Olguín & J. Enríquez Brito, Trad.). McGraw-Hill.",
      "López Montalbán, I. (2ª ed.). Gestión de bases de datos. Editorial."
    ]
  },
{
    id: 112,
    title: "Integridad Referencial",
    description: "Restricción que asegura la validez de las relaciones entre tablas.",
    category: "Modelo de Datos",
    example: "No permitir que un pedido haga referencia a un cliente inexistente.",
    references: [
      "Ricardo, C. M. (2009). Bases de datos (V. Campos Olguín & J. Enríquez Brito, Trad.). McGraw-Hill.",
      "López Montalbán, I. (2ª ed.). Gestión de bases de datos. Editorial."
    ]
  },
{
    id: 113,
    title: "Instancia",
    description: "Conjunto de datos almacenados en un momento dado en una base de datos.",
    category: "Modelo de Datos",
    example: "Los registros actuales de la tabla Clientes representan la instancia de hoy.",
    references: [
      "Ricardo, C. M. (2009). Bases de datos (V. Campos Olguín & J. Enríquez Brito, Trad.). McGraw-Hill.",
      "López Montalbán, I. (2ª ed.). Gestión de bases de datos. Editorial."
    ]
  },
{
    id: 114,
    title: "Jerarquía",
    description: "Modelo de base de datos donde los datos se organizan en forma de árbol.",
    category: "Modelo de Datos",
    example: "La estructura de una empresa con director general > gerentes > empleados.",
    references: [
      "Ricardo, C. M. (2009). Bases de datos (V. Campos Olguín & J. Enríquez Brito, Trad.). McGraw-Hill.",
      "López Montalbán, I. (2ª ed.). Gestión de bases de datos. Editorial."
    ]
  },
{
    id: 115,
    title: "JSON",
    description: "Formato de intercambio de datos ligero, común en bases de datos NoSQL.",
    category: "Bases de Datos No Relacionales",
    example: "{ 'nombre': 'Juan', 'edad': 25 }",
    references: [
      "Ricardo, C. M. (2009). Bases de datos (V. Campos Olguín & J. Enríquez Brito, Trad.). McGraw-Hill.",
      "López Montalbán, I. (2ª ed.). Gestión de bases de datos. Editorial."
    ]
  },
  {
    id: 116,
    title: "JOIN",
    description: "Operación en SQL que combina filas de dos o más tablas basadas en una relación.",
    category: "SQL",
    example: "SELECT * FROM Clientes INNER JOIN Pedidos ON Clientes.ID = Pedidos.ClienteID;",
    references: [
      "Ricardo, C. M. (2009). Bases de datos (V. Campos Olguín & J. Enríquez Brito, Trad.). McGraw-Hill.",
      "López Montalbán, I. (2ª ed.). Gestión de bases de datos. Editorial."
    ]
  },
{
    id: 117,
    title: "Llave Candidata",
    description: "Atributo o conjunto de atributos que pueden identificar de forma única cada registro.",
    category: "Modelo de Datos",
    example: "El correo electrónico de un cliente puede ser una llave candidata.",
    references: [
      "Ricardo, C. M. (2009). Bases de datos (V. Campos Olguín & J. Enríquez Brito, Trad.). McGraw-Hill.",
      "López Montalbán, I. (2ª ed.). Gestión de bases de datos. Editorial."
    ]
  },
{
    id: 118,
    title: "Llave Compuesta",
    description: "Clave primaria formada por más de un atributo.",
    category: "Modelo de Datos",
    example: "En una tabla DetallePedido, la clave puede ser (ID_Pedido, ID_Producto).",
    references: [
      "Ricardo, C. M. (2009). Bases de datos (V. Campos Olguín & J. Enríquez Brito, Trad.). McGraw-Hill.",
      "López Montalbán, I. (2ª ed.). Gestión de bases de datos. Editorial."
    ]
  },
{
    id: 119,
    title: "Modelo Conceptual",
    description: "Representación abstracta de los datos, como un diagrama entidad-relación.",
    category: "Modelado de Datos",
    example: "Diagrama ER de clientes, pedidos y productos mostrando sus relaciones.",
    references: [
      "Ricardo, C. M. (2009). Bases de datos (V. Campos Olguín & J. Enríquez Brito, Trad.). McGraw-Hill.",
      "López Montalbán, I. (2ª ed.). Gestión de bases de datos. Editorial."
    ]
  },
{
    id: 120,
    title: "Modelo Lógico",
    description: "Representación de los datos ajustada a un modelo específico (relacional, jerárquico, etc.).",
    category: "Modelado de Datos",
    example: "Definir tablas, atributos y claves primarias y foráneas en un modelo relacional.",
    references: [
      "Ricardo, C. M. (2009). Bases de datos (V. Campos Olguín & J. Enríquez Brito, Trad.). McGraw-Hill.",
      "López Montalbán, I. (2ª ed.). Gestión de bases de datos. Editorial."
    ]
  },
{
    id: 121,
    title: "NoSQL",
    description: "Tipo de bases de datos no relacionales, diseñadas para trabajar con grandes volúmenes de datos no estructurados.",
    category: "Base de Datos",
    example: "MongoDB es un sistema de base de datos NoSQL.",
    references: [
      "Ricardo, C. M. (2009). Bases de datos (V. Campos Olguín & J. Enríquez Brito, Trad.). McGraw-Hill.",
      "López Montalbán, I. (2ª ed.). Gestión de bases de datos. Editorial."
    ]
  },
{
    id: 122,
    title: "Normalización",
    description: "Proceso de organización de los datos en tablas para minimizar redundancia y mejorar la integridad.",
    category: "Modelo de Datos",
    example: "Dividir una tabla de clientes con datos de pedidos en dos tablas separadas: Clientes y Pedidos.",
    references: [
      "Ricardo, C. M. (2009). Bases de datos (V. Campos Olguín & J. Enríquez Brito, Trad.). McGraw-Hill.",
      "López Montalbán, I. (2ª ed.). Gestión de bases de datos. Editorial."
    ]
  },
  {
    id: 123,
    title: "Procedimientos Almacenados",
    description: "Conjunto de instrucciones SQL guardadas en la base de datos y que pueden ejecutarse repetidamente.",
    category: "SQL",
    example: "CREATE PROCEDURE ObtenerClientes AS SELECT * FROM Clientes;",
    references: [
      "Ricardo, C. M. (2009). Bases de datos (V. Campos Olguín & J. Enríquez Brito, Trad.). McGraw-Hill.",
      "López Montalbán, I. (2ª ed.). Gestión de bases de datos. Editorial."
    ]
  },
{
    id: 124,
    title: "Query Optimizer",
    description: "Módulo de un DBMS que determina la mejor estrategia para ejecutar una consulta.",
    category: "DBMS",
    example: "El optimizador decide si usar un índice o un escaneo completo de tabla.",
    references: [
      "Ricardo, C. M. (2009). Bases de datos (V. Campos Olguín & J. Enríquez Brito, Trad.). McGraw-Hill.",
      "López Montalbán, I. (2ª ed.). Gestión de bases de datos. Editorial."
    ]
  },
{
    id: 125,
    title: "Redundancia",
    description: "Repetición innecesaria de datos en una base de datos.",
    category: "Modelo de Datos",
    example: "Almacenar la dirección del cliente en dos tablas diferentes sin necesidad.",
    references: [
      "Ricardo, C. M. (2009). Bases de datos (V. Campos Olguín & J. Enríquez Brito, Trad.). McGraw-Hill.",
      "López Montalbán, I. (2ª ed.). Gestión de bases de datos. Editorial."
    ]
  },
{
    id: 126,
    title: "Relación",
    description: "Asociación entre dos entidades.",
    category: "Modelo de Datos",
    example: "Un cliente puede tener varios pedidos: relación Cliente-Pedido.",
    references: [
      "Ricardo, C. M. (2009). Bases de datos (V. Campos Olguín & J. Enríquez Brito, Trad.). McGraw-Hill.",
      "López Montalbán, I. (2ª ed.). Gestión de bases de datos. Editorial."
    ]
  },
{
    id: 127,
    title: "Registro (Tupla)",
    description: "Conjunto de valores que representan una fila en una tabla.",
    category: "Modelo Relacional",
    example: "Fila de la tabla Clientes: (ID: 1, Nombre: 'Ana', Email: 'ana@mail.com').",
    references: [
      "Ricardo, C. M. (2009). Bases de datos (V. Campos Olguín & J. Enríquez Brito, Trad.). McGraw-Hill.",
      "López Montalbán, I. (2ª ed.). Gestión de bases de datos. Editorial."
    ]
  },
{
    id: 128,
    title: "Restricciones",
    description: "Reglas que limitan los valores que pueden almacenarse en una base de datos.",
    category: "Modelo de Datos",
    example: "Una columna Edad no puede aceptar valores negativos.",
    references: [
      "Ricardo, C. M. (2009). Bases de datos (V. Campos Olguín & J. Enríquez Brito, Trad.). McGraw-Hill.",
      "López Montalbán, I. (2ª ed.). Gestión de bases de datos. Editorial."
    ]
  },
{
    id: 129,
    title: "SQL (Structured Query Language)",
    description: "Lenguaje estándar para manipular y gestionar bases de datos relacionales.",
    category: "SQL",
    example: "SELECT Nombre FROM Clientes WHERE Ciudad='México';",
    references: [
      "Ricardo, C. M. (2009). Bases de datos (V. Campos Olguín & J. Enríquez Brito, Trad.). McGraw-Hill.",
      "López Montalbán, I. (2ª ed.). Gestión de bases de datos. Editorial."
    ]
  },
{
    id: 130,
    title: "Subconsulta",
    description: "Consulta anidada dentro de otra consulta.",
    category: "SQL",
    example: "SELECT Nombre FROM Clientes WHERE ID IN (SELECT ClienteID FROM Pedidos);",
    references: [
      "Ricardo, C. M. (2009). Bases de datos (V. Campos Olguín & J. Enríquez Brito, Trad.). McGraw-Hill.",
      "López Montalbán, I. (2ª ed.). Gestión de bases de datos. Editorial."
    ]
  },
{
    id: 131,
    title: "Sistema de Base de Datos",
    description: "Conjunto de datos, software DBMS, hardware y usuarios que trabajan con la base.",
    category: "Base de Datos",
    example: "Un sistema que combina MySQL, servidores y usuarios para gestionar información empresarial.",
    references: [
      "Ricardo, C. M. (2009). Bases de datos (V. Campos Olguín & J. Enríquez Brito, Trad.). McGraw-Hill.",
      "López Montalbán, I. (2ª ed.). Gestión de bases de datos. Editorial."
    ]
  },
  {
    id: 132,
    title: "Tabla",
    description: "Estructura básica de almacenamiento en bases de datos relacionales, formada por filas y columnas.",
    category: "Modelo Relacional",
    example: "Tabla Clientes con columnas: ID, Nombre, Email, Ciudad.",
    references: [
      "Ricardo, C. M. (2009). Bases de datos (V. Campos Olguín & J. Enríquez Brito, Trad.). McGraw-Hill.",
      "López Montalbán, I. (2ª ed.). Gestión de bases de datos. Editorial."
    ]
  },
{
    id: 133,
    title: "Transacción",
    description: "Conjunto de operaciones que se ejecutan como una sola unidad lógica de trabajo.",
    category: "DBMS",
    example: "Insertar un pedido y actualizar el stock como una transacción única.",
    references: [
      "Ricardo, C. M. (2009). Bases de datos (V. Campos Olguín & J. Enríquez Brito, Trad.). McGraw-Hill.",
      "López Montalbán, I. (2ª ed.). Gestión de bases de datos. Editorial."
    ]
  },
{
    id: 134,
    title: "Trigger (Disparador)",
    description: "Programa asociado a una tabla que se ejecuta automáticamente cuando ocurre un evento específico.",
    category: "DBMS",
    example: "Trigger que actualiza la fecha de modificación al actualizar un registro.",
    references: [
      "Ricardo, C. M. (2009). Bases de datos (V. Campos Olguín & J. Enríquez Brito, Trad.). McGraw-Hill.",
      "López Montalbán, I. (2ª ed.). Gestión de bases de datos. Editorial."
    ]
  },
{
    id: 135,
    title: "Tupla",
    description: "Fila individual en una tabla de base de datos.",
    category: "Modelo Relacional",
    example: "Fila en la tabla Clientes: (ID: 1, Nombre: 'Ana', Email: 'ana@mail.com').",
    references: [
      "Ricardo, C. M. (2009). Bases de datos (V. Campos Olguín & J. Enríquez Brito, Trad.). McGraw-Hill.",
      "López Montalbán, I. (2ª ed.). Gestión de bases de datos. Editorial."
    ]
  },
{
    id: 136,
    title: "Vista",
    description: "Tabla virtual que muestra datos derivados de una o más tablas.",
    category: "DBMS",
    example: "Vista que muestra todos los clientes con pedidos pendientes.",
    references: [
      "Ricardo, C. M. (2009). Bases de datos (V. Campos Olguín & J. Enríquez Brito, Trad.). McGraw-Hill.",
      "López Montalbán, I. (2ª ed.). Gestión de bases de datos. Editorial."
    ]
  },
{
    id: 137,
    title: "XML",
    description: "Lenguaje usado para representar y transportar datos estructurados.",
    category: "NoSQL / Formatos de Datos",
    example: "<cliente><nombre>Ana</nombre><email>ana@mail.com</email></cliente>",
    references: [
      "Ricardo, C. M. (2009). Bases de datos (V. Campos Olguín & J. Enríquez Brito, Trad.). McGraw-Hill.",
      "López Montalbán, I. (2ª ed.). Gestión de bases de datos. Editorial."
    ]
  },
{
    id: 138,
    title: "Atomicidad",
    description: "Propiedad ACID que garantiza que todas las operaciones de una transacción se completan o ninguna se realiza, evitando estados intermedios inconsistentes.",
    category: "Transacciones",
    example: "Todas las operaciones de una transacción se completan o ninguna se realiza.",
    references: [
      "Ricardo, C. M. (2009). Bases de datos (V. Campos Olguín & J. Enríquez Brito, Trad.). McGraw-Hill.",
      "López Montalbán, I. (2ª ed.). Gestión de bases de datos. Editorial."
    ]
  },
{
    id: 2,
    title: "Aislamiento",
    description: "Propiedad ACID que garantiza que las transacciones concurrentes se ejecutan como si fueran secuenciales, evitando interferencias entre ellas.",
    category: "Transacciones",
    example: "Las transacciones concurrentes se ejecutan como si fueran secuenciales, evitando interferencias.",
    references: [
      "Ricardo, C. M. (2009). Bases de datos (V. Campos Olguín & J. Enríquez Brito, Trad.). McGraw-Hill.",
      "López Montalbán, I. (2ª ed.). Gestión de bases de datos. Editorial."
    ]
  }
  ];
// Eliminar conceptos con IDs duplicados, manteniendo el primero que aparece
const uniqueConcepts = Array.from(
  new Map(concepts.map(concept => [concept.id, concept])).values()
);
// uniqueConcepts es el arreglo sin duplicados
console.log("Total conceptos únicos:", uniqueConcepts.length);
    // Referencias DOM
    const searchInput = document.getElementById("searchInput");
    const searchButton = document.getElementById("searchButton");
    const resultsGrid = document.getElementById("resultsGrid");
    const resultsInfo = document.getElementById("resultsInfo");
    const footerMessage = document.getElementById("footerMessage");

    // Referencias extra
    const filterButton = document.getElementById("filterButton");

    // Sacar categorías únicas del array
    const categories = [...new Set(concepts.map(c => c.category).filter(Boolean))];

    // Crear el dropdown dinámico
    const dropdown = document.createElement("div");
    dropdown.className = "filter-dropdown";
    dropdown.style.display = "none"; // oculto al inicio
    dropdown.innerHTML = `
      <button data-category="all">Todos</button>
      ${categories.map(cat => `<button data-category="${cat}">${cat}</button>`).join("")}
    `;

    // Insertar el dropdown después del botón
    filterButton.insertAdjacentElement("afterend", dropdown);

    // Mostrar/ocultar menú al dar clic en el botón
    filterButton.addEventListener("click", () => {
      dropdown.style.display = dropdown.style.display === "none" ? "block" : "none";
    });

    // Manejar clic en categorías
    dropdown.addEventListener("click", (e) => {
      if (e.target.tagName === "BUTTON") {
        const selectedCategory = e.target.dataset.category;

        if (selectedCategory === "all") {
          displayResults(concepts);
        } else {
          const filtered = concepts.filter(c => c.category === selectedCategory);
          displayResults(filtered, selectedCategory);
        }

        dropdown.style.display = "none"; // cerrar menú
      }
    });

    // Función para mostrar resultados
    function displayResults(results, searchTerm = "") {
      resultsGrid.innerHTML = "";

      if (results.length === 0) {
        resultsInfo.textContent = `No se encontraron resultados para "${searchTerm}". Intenta con otros términos.`;
        footerMessage.textContent = "";
        return;
      }

      resultsInfo.textContent = `${results.length} concepto${results.length !== 1 ? "s" : ""} encontrado${results.length !== 1 ? "s" : ""}`;
      footerMessage.textContent =
        searchTerm && results.length > 0
          ? "¿No encuentras lo que buscas? Intenta con términos más específicos o amplía tu búsqueda."
          : "";

      results.forEach(({ id, title, description, category, example, references }) => {
        const card = document.createElement("article");
        card.className = "card";
        card.setAttribute("tabindex", "0");

        let referencesHTML = "";
        if (references && references.length > 0) {
          referencesHTML = `
            <div class="card-references">
              <strong>Referencias:</strong>
              <ul>
                ${references.map(ref => `<li><a href="${ref}" target="_blank" rel="noopener noreferrer">${ref}</a></li>`).join('')}
              </ul>
            </div>
          `;
        }

        card.innerHTML = `
          <header class="card-header">
            <h2 class="card-title">${title}</h2>
            <span class="card-category">${category || ""}</span>
          </header>
          <p class="card-description">${description}</p>
          ${example ? `<pre class="card-example"><strong>Ejemplo:</strong><br><code>${example}</code></pre>` : ""}
          ${referencesHTML}
        `;

        resultsGrid.appendChild(card);
      });
    }

    // Función para buscar conceptos
    function searchConcepts() {
      const term = searchInput.value.trim();
      if (!term) {
        displayResults(concepts);
        return;
      }

      const normalize = str => str.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      const termNormalized = normalize(term);

      const filtered = concepts.filter(({ title, description, category, example, references }) => {
        const inTitle = title && normalize(title).includes(termNormalized);
        const inDescription = description && normalize(description).includes(termNormalized);
        const inCategory = category && normalize(category).includes(termNormalized);
        const inExample = example && normalize(example).includes(termNormalized);
        const inReferences = references && references.some(ref => normalize(ref).includes(termNormalized));

        return inTitle || inDescription || inCategory || inExample || inReferences;
      });

      displayResults(filtered, term);
    }

    // Eventos
    searchButton.addEventListener("click", searchConcepts);

    searchInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        searchConcepts();
      }
    });

    // Mostrar todos los conceptos al cargar la página
    window.addEventListener("DOMContentLoaded", () => {
      displayResults(concepts);
      document.getElementById("footerFixed").textContent = "© 2025 Equipo II – Todos los derechos reservados \nIntegrantes: Oliver Joel Villamonte Vargas \nDiego Antonio Chac Ramírez \nJose Enrique Hernandez Lira \nNeil Emmanuel Che Trejo \nLeonardo Madrigal May \nRoberto  J. Ramirez Damian";
    });
