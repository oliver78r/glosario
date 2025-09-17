 const concepts =  [
  {
    id: 1,
    title: "Base de Datos",
    description: "Colección organizada de datos relacionados entre sí, almacenados y accesibles electrónicamente.",
    category: "Concepto",
    example: "Sistema que almacena la información de clientes, productos y ventas de una tienda en línea.",
    references: [
      "Ricardo, C. M. (2022). Bases de datos (7.ª ed.). Pearson.",
      "Date, C. J. (2019). An introduction to database systems (8th ed.). Pearson.",
      "Silberschatz, A., Korth, H. F., & Sudarshan, S. (2020). Database system concepts (7th ed.). McGraw-Hill."
    ]
  },
  {
    id: 2,
    title: "Sistema de Gestión de Bases de Datos (SGBD)",
    description: "Software que permite la creación, gestión, manipulación y control de acceso a una base de datos.",
    category: "Concepto",
    example: "MySQL, Oracle Database o Microsoft SQL Server.",
    references: [
      "Ricardo, C. M. (2022). Bases de datos (7.ª ed.). Pearson.",
      "Date, C. J. (2019). An introduction to database systems (8th ed.). Pearson.",
      "Silberschatz, A., Korth, H. F., & Sudarshan, S. (2020). Database system concepts (7th ed.). McGraw-Hill."
    ]
  },
  {
    id: 3,
    title: "Modelo Relacional",
    description: "Modelo que organiza los datos en tablas (relaciones) compuestas por filas (tuplas) y columnas (atributos).",
    category: "Concepto",
    example: "Base de datos de biblioteca con tablas “Usuarios”, “Libros” y “Préstamos”.",
    references: [
      "Ricardo, C. M. (2022). Bases de datos (7.ª ed.). Pearson.",
      "Date, C. J. (2019). An introduction to database systems (8th ed.). Pearson.",
      "Silberschatz, A., Korth, H. F., & Sudarshan, S. (2020). Database system concepts (7th ed.). McGraw-Hill."
    ]
  },
  {
    id: 4,
    title: "SQL (Structured Query Language)",
    description: "Lenguaje estándar para gestionar y manipular bases de datos relacionales.",
    category: "Concepto",
    example: "Uso de la instrucción SELECT para recuperar registros de la tabla 'clientes'.",
    references: [
      "Ricardo, C. M. (2022). Bases de datos (7.ª ed.). Pearson.",
      "Date, C. J. (2019). An introduction to database systems (8th ed.). Pearson.",
      "Silberschatz, A., Korth, H. F., & Sudarshan, S. (2020). Database system concepts (7th ed.). McGraw-Hill."
    ]
  },
  {
    id: 5,
    title: "Normalización",
    description: "Proceso de organización de los datos en una base de datos para reducir la redundancia y mejorar la integridad.",
    category: "Diseño de bases de datos",
    example: "Dividir una tabla “Pedidos” en “Clientes” y “Órdenes” para evitar datos duplicados.",
    references: [
      "Ricardo, C. M. (2022). Bases de datos (7.ª ed.). Pearson.",
      "Date, C. J. (2019). An introduction to database systems (8th ed.). Pearson.",
      "Silberschatz, A., Korth, H. F., & Sudarshan, S. (2020). Database system concepts (7th ed.). McGraw-Hill."
    ]
  },
  {
    id: 6,
    title: "Entidad",
    description: "Objeto o concepto del mundo real que tiene una existencia independiente y es relevante para la base de datos.",
    category: "Modelado de datos",
    example: "Empleado, Producto, Alumno.",
    references: [
      "Ricardo, C. M. (2022). Bases de datos (7.ª ed.). Pearson.",
      "Date, C. J. (2019). An introduction to database systems (8th ed.). Pearson.",
      "Silberschatz, A., Korth, H. F., & Sudarshan, S. (2020). Database system concepts (7th ed.). McGraw-Hill."
    ]
  },
  {
    id: 7,
    title: "Atributo",
    description: "Propiedad o característica de una entidad.",
    category: "Modelado de datos",
    example: "“Nombre” y “Fecha de nacimiento” en la entidad Empleado.",
    references: [
      "Ricardo, C. M. (2022). Bases de datos (7.ª ed.). Pearson.",
      "Date, C. J. (2019). An introduction to database systems (8th ed.). Pearson.",
      "Silberschatz, A., Korth, H. F., & Sudarshan, S. (2020). Database system concepts (7th ed.). McGraw-Hill."
    ]
  },
  {
    id: 8,
    title: "Relación",
    description: "Asociación entre dos o más entidades en una base de datos.",
    category: "Modelado de datos",
    example: "La relación “Matrícula” entre la entidad Alumno y la entidad Curso.",
    references: [
      "Ricardo, C. M. (2022). Bases de datos (7.ª ed.). Pearson.",
      "Date, C. J. (2019). An introduction to database systems (8th ed.). Pearson.",
      "Silberschatz, A., Korth, H. F., & Sudarshan, S. (2020). Database system concepts (7th ed.). McGraw-Hill."
    ]
  },
  {
    id: 9,
    title: "Clave Primaria",
    description: "Atributo o conjunto de atributos que identifican de manera única a una tupla en una tabla.",
    category: "Integridad de datos",
    example: "El campo “ID_Cliente” en la tabla “Clientes”.",
    references: [
      "Ricardo, C. M. (2022). Bases de datos (7.ª ed.). Pearson.",
      "Date, C. J. (2019). An introduction to database systems (8th ed.). Pearson.",
      "Silberschatz, A., Korth, H. F., & Sudarshan, S. (2020). Database system concepts (7th ed.). McGraw-Hill."
    ]
  },
  {
    id: 10,
    title: "Clave Foránea",
    description: "Atributo en una tabla que establece una relación con la clave primaria de otra tabla.",
    category: "Integridad de datos",
    example: "El campo “ID_Cliente” en la tabla “Pedidos”, que referencia la clave primaria de “Clientes”.",
    references: [
      "Ricardo, C. M. (2022). Bases de datos (7.ª ed.). Pearson.",
      "Date, C. J. (2019). An introduction to database systems (8th ed.). Pearson.",
      "Silberschatz, A., Korth, H. F., & Sudarshan, S. (2020). Database system concepts (7th ed.). McGraw-Hill."
    ]
  },
  {
    id: 11,
    title: "Índice",
    description: "Estructura que mejora la velocidad de las operaciones de búsqueda en una base de datos.",
    category: "Optimización",
    example: "Índice en el campo “Apellido” para acelerar búsquedas en la tabla “Empleados”.",
    references: [
      "Ricardo, C. M. (2022). Bases de datos (7.ª ed.). Pearson.",
      "Date, C. J. (2019). An introduction to database systems (8th ed.). Pearson.",
      "Silberschatz, A., Korth, H. F., & Sudarshan, S. (2020). Database system concepts (7th ed.). McGraw-Hill."
    ]
  },
  {
    id: 12,
    title: "Vista",
    description: "Consulta almacenada que presenta datos de una o más tablas de forma específica.",
    category: "Consultas y seguridad",
    example: "Vista “VentasMensuales” que muestra las ventas filtradas por mes y año.",
    references: [
      "Ricardo, C. M. (2022). Bases de datos (7.ª ed.). Pearson.",
      "Date, C. J. (2019). An introduction to database systems (8th ed.). Pearson.",
      "Silberschatz, A., Korth, H. F., & Sudarshan, S. (2020). Database system concepts (7th ed.). McGraw-Hill."
    ]
  },
  {
    id: 13,
    title: "Procedimiento Almacenado",
    description: "Conjunto de instrucciones SQL predefinidas que se almacenan en la base de datos y se ejecutan de manera repetida.",
    category: "Automatización",
    example: "Procedimiento que actualiza el inventario tras registrar una venta.",
    references: [
      "Ricardo, C. M. (2022). Bases de datos (7.ª ed.). Pearson.",
      "Date, C. J. (2019). An introduction to database systems (8th ed.). Pearson.",
      "Silberschatz, A., Korth, H. F., & Sudarshan, S. (2020). Database system concepts (7th ed.). McGraw-Hill."
    ]
  },
  {
    id: 14,
    title: "Trigger (Disparador)",
    description: "Procedimiento que se ejecuta automáticamente en respuesta a ciertos eventos en una base de datos.",
    category: "Automatización",
    example: "Trigger que envía una notificación cuando se inserta un nuevo pedido.",
    references: [
      "Ricardo, C. M. (2022). Bases de datos (7.ª ed.). Pearson.",
      "Date, C. J. (2019). An introduction to database systems (8th ed.). Pearson.",
      "Silberschatz, A., Korth, H. F., & Sudarshan, S. (2020). Database system concepts (7th ed.). McGraw-Hill."
    ]
  },
  {
    id: 15,
    title: "Transacción",
    description: "Conjunto de operaciones que se ejecutan como una unidad indivisible, garantizando la integridad de la base de datos.",
    category: "Control de datos",
    example: "Transferencia bancaria que implica debitar una cuenta y acreditar otra.",
    references: [
      "Ricardo, C. M. (2022). Bases de datos (7.ª ed.). Pearson.",
      "Date, C. J. (2019). An introduction to database systems (8th ed.). Pearson.",
      "Silberschatz, A., Korth, H. F., & Sudarshan, S. (2020). Database system concepts (7th ed.). McGraw-Hill."
    ]
  },
  {
    id: 16,
    title: "Integridad Referencial",
    description: "Garantía de que las relaciones entre tablas se mantienen consistentes.",
    category: "Integridad de datos",
    example: "Impedir la eliminación de un cliente si tiene pedidos asociados.",
    references: [
      "Ricardo, C. M. (2022). Bases de datos (7.ª ed.). Pearson.",
      "Date, C. J. (2019). An introduction to database systems (8th ed.). Pearson.",
      "Silberschatz, A., Korth, H. F., & Sudars."
    ]
  },
    ];

    // Referencias DOM
    const searchInput = document.getElementById("searchInput");
    const searchButton = document.getElementById("searchButton");
    const resultsGrid = document.getElementById("resultsGrid");
    const resultsInfo = document.getElementById("resultsInfo");
    const footerMessage = document.getElementById("footerMessage");

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
    });
