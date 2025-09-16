   const concepts = [
      {
        id: 1,
        title: "Base de datos",
        description:
          "Colección organizada de datos relacionados entre sí, almacenados y accesibles electrónicamente.",
        category: "Concepto",
        example: "Supermercados Los supermercados utilizan bases de datos para registrar productos, precios, inventarios y compras de clientes. Esto facilita la gestión de inventarios y la implementación de programas de lealtad.",
        references: [
          "https://es.wikipedia.org/wiki/SQL",
          "https://www.w3schools.com/sql/"
        ]
      },
      {
        id: 2,
        title: "Sistema de Gestión de Bases de Datos (SGBD)",
        description:
          "Software que permite la creación, gestión y manipulación de bases de datos.",
        category: "concepto",
        example: "MySQL: Un SGBD relacional de código abierto, ideal para aplicaciones web y proyectos de pequeña a mediana escala.",
        references: [
          "https://www.geeksforgeeks.org/database-normalization/"
        ]
      },
      {
        id: 3,
        title: "Propiedades ACID",
        description:
          "Atomicidad, Consistencia, Aislamiento, Durabilidad - propiedades que garantizan transacciones confiables en bases de datos.",
        category: "Gestión de Transacciones",
        example: "Una transacción que transfiere dinero entre cuentas debe ser atómica.",
        references: [
          "https://es.wikipedia.org/wiki/ACID",
          "https://www.ibm.com/docs/en/db2/11.5?topic=transactions-acid-properties"
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