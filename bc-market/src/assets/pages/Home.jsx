import Navbar from "../components/Navbar"

function Home({ language, setLanguage }) {
  const content = {
    GB: {
      heroTitle: "Welcome to BC Market",
      heroText: "Your Swiss Online Marketplace for Quality Products",
      heroButton: "Shop Now",
      whyLabel: "Why BC Market",
      whyTitle: "Modern products with a clean shopping experience",
      whyText:
        "Discover carefully selected products for everyday life, lifestyle, home and more — all in one modern marketplace.",
      categoriesLabel: "Categories",
      categoriesTitle: "Shop by Category",
      categoriesText: "Explore our diverse range of product categories",
      categories: [
        {
          title: "Home & Living",
          text: "Transform your living space with curated pieces for comfort and style.",
          icon: "⌂",
        },
        {
          title: "Gadgets",
          text: "Discover smart and modern devices designed for everyday convenience.",
          icon: "⌘",
        },
        {
          title: "Pets",
          text: "Everything your furry friends need for a happy and healthy life.",
          icon: "◌",
        },
        {
          title: "Fitness",
          text: "Premium essentials to support your training and healthy habits.",
          icon: "✦",
        },
        {
          title: "Lifestyle",
          text: "Products that elevate your daily routine with function and design.",
          icon: "♡",
        },
        {
          title: "Latin Products",
          text: "Authentic products and flavours that bring culture to your doorstep.",
          icon: "◍",
        },
      ],
      ctaTitle: "Experience Swiss Quality",
      ctaText:
        "At BC Market, we bring you carefully curated products that meet the highest standards of quality and authenticity. Shop with confidence knowing every item is selected with care.",
      ctaPrimary: "Start Shopping",
      ctaSecondary: "Learn More About Us",
      footerTitle: "BC Market",
      footerText1:
        "Your trusted Swiss online marketplace, connecting quality products with discerning customers since 2024.",
      footerText2:
        "Committed to excellence, authenticity, and customer satisfaction.",
      quickLinks: "Quick Links",
      contactUs: "Contact Us",
      nav: ["Home", "Shop", "Categories", "About", "Contact"],
      copyright: "© 2026 BC Market. All rights reserved.",
    },

    DE: {
      heroTitle: "Willkommen bei BC Market",
      heroText: "Ihr Schweizer Online-Marktplatz für Qualitätsprodukte",
      heroButton: "Jetzt einkaufen",
      whyLabel: "Warum BC Market",
      whyTitle: "Moderne Produkte mit einem klaren Einkaufserlebnis",
      whyText:
        "Entdecken Sie sorgfältig ausgewählte Produkte für Alltag, Lifestyle, Wohnen und mehr — alles in einem modernen Marktplatz.",
      categoriesLabel: "Kategorien",
      categoriesTitle: "Nach Kategorie einkaufen",
      categoriesText: "Entdecken Sie unsere vielfältigen Produktkategorien",
      categories: [
        {
          title: "Wohnen & Leben",
          text: "Verwandeln Sie Ihr Zuhause mit ausgewählten Produkten für Komfort und Stil.",
          icon: "⌂",
        },
        {
          title: "Gadgets",
          text: "Entdecken Sie smarte und moderne Geräte für den Alltag.",
          icon: "⌘",
        },
        {
          title: "Haustiere",
          text: "Alles, was Ihre tierischen Freunde für ein gesundes und glückliches Leben brauchen.",
          icon: "◌",
        },
        {
          title: "Fitness",
          text: "Hochwertige Essentials für Training und gesunde Gewohnheiten.",
          icon: "✦",
        },
        {
          title: "Lifestyle",
          text: "Produkte, die Ihren Alltag mit Funktion und Design bereichern.",
          icon: "♡",
        },
        {
          title: "Lateinische Produkte",
          text: "Authentische Produkte und Aromen, die Kultur direkt zu Ihnen bringen.",
          icon: "◍",
        },
      ],
      ctaTitle: "Erleben Sie Schweizer Qualität",
      ctaText:
        "Bei BC Market bieten wir sorgfältig ausgewählte Produkte, die höchsten Ansprüchen an Qualität und Authentizität entsprechen. Kaufen Sie mit Vertrauen ein.",
      ctaPrimary: "Jetzt einkaufen",
      ctaSecondary: "Mehr über uns",
      footerTitle: "BC Market",
      footerText1:
        "Ihr vertrauenswürdiger Schweizer Online-Marktplatz für hochwertige Produkte seit 2024.",
      footerText2:
        "Verpflichtet zu Exzellenz, Authentizität und Kundenzufriedenheit.",
      quickLinks: "Schnellzugriffe",
      contactUs: "Kontakt",
      nav: ["Home", "Shop", "Kategorien", "Über uns", "Kontakt"],
      copyright: "© 2026 BC Market. Alle Rechte vorbehalten.",
    },

    FR: {
      heroTitle: "Bienvenue chez BC Market",
      heroText: "Votre place de marché suisse pour des produits de qualité",
      heroButton: "Acheter maintenant",
      whyLabel: "Pourquoi BC Market",
      whyTitle: "Des produits modernes avec une expérience d'achat claire",
      whyText:
        "Découvrez des produits soigneusement sélectionnés pour le quotidien, le lifestyle, la maison et plus encore.",
      categoriesLabel: "Catégories",
      categoriesTitle: "Acheter par catégorie",
      categoriesText: "Découvrez notre large gamme de catégories de produits",
      categories: [
        {
          title: "Maison & Vie",
          text: "Transformez votre espace de vie avec des produits choisis pour le confort et le style.",
          icon: "⌂",
        },
        {
          title: "Gadgets",
          text: "Découvrez des appareils modernes et intelligents pour le quotidien.",
          icon: "⌘",
        },
        {
          title: "Animaux",
          text: "Tout ce dont vos compagnons ont besoin pour une vie heureuse et saine.",
          icon: "◌",
        },
        {
          title: "Fitness",
          text: "Des essentiels premium pour soutenir votre entraînement et vos habitudes saines.",
          icon: "✦",
        },
        {
          title: "Lifestyle",
          text: "Des produits qui améliorent votre quotidien avec design et fonctionnalité.",
          icon: "♡",
        },
        {
          title: "Produits latins",
          text: "Des produits et saveurs authentiques qui apportent la culture chez vous.",
          icon: "◍",
        },
      ],
      ctaTitle: "Découvrez la qualité suisse",
      ctaText:
        "Chez BC Market, nous proposons des produits soigneusement sélectionnés répondant aux plus hauts standards de qualité et d'authenticité.",
      ctaPrimary: "Commencer vos achats",
      ctaSecondary: "En savoir plus",
      footerTitle: "BC Market",
      footerText1:
        "Votre marketplace suisse de confiance, reliant des produits de qualité à des clients exigeants depuis 2024.",
      footerText2:
        "Engagés envers l'excellence, l'authenticité et la satisfaction client.",
      quickLinks: "Liens rapides",
      contactUs: "Contact",
      nav: ["Accueil", "Boutique", "Catégories", "À propos", "Contact"],
      copyright: "© 2026 BC Market. Tous droits réservés.",
    },

    IT: {
      heroTitle: "Benvenuti su BC Market",
      heroText: "Il vostro marketplace svizzero per prodotti di qualità",
      heroButton: "Acquista ora",
      whyLabel: "Perché BC Market",
      whyTitle: "Prodotti moderni con un'esperienza di acquisto pulita",
      whyText:
        "Scoprite prodotti selezionati con cura per la vita quotidiana, lifestyle, casa e altro ancora.",
      categoriesLabel: "Categorie",
      categoriesTitle: "Acquista per categoria",
      categoriesText: "Esplora la nostra ampia gamma di categorie di prodotto",
      categories: [
        {
          title: "Casa & Living",
          text: "Trasforma i tuoi spazi con prodotti selezionati per comfort e stile.",
          icon: "⌂",
        },
        {
          title: "Gadget",
          text: "Scopri dispositivi smart e moderni pensati per la vita quotidiana.",
          icon: "⌘",
        },
        {
          title: "Animali",
          text: "Tutto ciò di cui i tuoi amici a quattro zampe hanno bisogno per stare bene.",
          icon: "◌",
        },
        {
          title: "Fitness",
          text: "Essenziali premium per allenamento e abitudini sane.",
          icon: "✦",
        },
        {
          title: "Lifestyle",
          text: "Prodotti che migliorano la tua routine con design e funzionalità.",
          icon: "♡",
        },
        {
          title: "Prodotti latini",
          text: "Prodotti e sapori autentici che portano cultura direttamente a casa tua.",
          icon: "◍",
        },
      ],
      ctaTitle: "Scopri la qualità svizzera",
      ctaText:
        "Da BC Market offriamo prodotti accuratamente selezionati che rispettano i più alti standard di qualità e autenticità.",
      ctaPrimary: "Inizia a comprare",
      ctaSecondary: "Scopri di più",
      footerTitle: "BC Market",
      footerText1:
        "Il vostro marketplace svizzero di fiducia, con prodotti di qualità dal 2024.",
      footerText2:
        "Impegnati per eccellenza, autenticità e soddisfazione del cliente.",
      quickLinks: "Link rapidi",
      contactUs: "Contattaci",
      nav: ["Home", "Shop", "Categorie", "Chi siamo", "Contatto"],
      copyright: "© 2026 BC Market. Tutti i diritti riservati.",
    },

    ES: {
      heroTitle: "Bienvenido a BC Market",
      heroText: "Tu marketplace suizo online para productos de calidad",
      heroButton: "Comprar ahora",
      whyLabel: "Por qué BC Market",
      whyTitle: "Productos modernos con una experiencia de compra limpia",
      whyText:
        "Descubre productos cuidadosamente seleccionados para la vida diaria, lifestyle, hogar y mucho más.",
      categoriesLabel: "Categorías",
      categoriesTitle: "Compra por categoría",
      categoriesText: "Explora nuestra diversa gama de categorías de productos",
      categories: [
        {
          title: "Hogar & Living",
          text: "Transforma tu espacio con productos seleccionados para confort y estilo.",
          icon: "⌂",
        },
        {
          title: "Gadgets",
          text: "Descubre dispositivos modernos e inteligentes para el día a día.",
          icon: "⌘",
        },
        {
          title: "Mascotas",
          text: "Todo lo que tus amigos peludos necesitan para una vida feliz y saludable.",
          icon: "◌",
        },
        {
          title: "Fitness",
          text: "Esenciales premium para apoyar tu entrenamiento y hábitos saludables.",
          icon: "✦",
        },
        {
          title: "Lifestyle",
          text: "Productos que elevan tu rutina diaria con diseño y funcionalidad.",
          icon: "♡",
        },
        {
          title: "Productos latinos",
          text: "Productos y sabores auténticos que llevan la cultura hasta tu puerta.",
          icon: "◍",
        },
      ],
      ctaTitle: "Vive la calidad suiza",
      ctaText:
        "En BC Market te ofrecemos productos cuidadosamente seleccionados que cumplen con los más altos estándares de calidad y autenticidad.",
      ctaPrimary: "Empezar a comprar",
      ctaSecondary: "Saber más",
      footerTitle: "BC Market",
      footerText1:
        "Tu marketplace suizo de confianza, conectando productos de calidad con clientes exigentes desde 2024.",
      footerText2:
        "Comprometidos con la excelencia, autenticidad y satisfacción del cliente.",
      quickLinks: "Enlaces rápidos",
      contactUs: "Contáctanos",
      nav: ["Inicio", "Tienda", "Categorías", "Nosotros", "Contacto"],
      copyright: "© 2026 BC Market. Todos los derechos reservados.",
    },

    PT: {
      heroTitle: "Bem-vindo à BC Market",
      heroText: "O seu marketplace suíço online para produtos de qualidade",
      heroButton: "Comprar agora",
      whyLabel: "Porquê a BC Market",
      whyTitle: "Produtos modernos com uma experiência de compra limpa",
      whyText:
        "Descubra produtos cuidadosamente selecionados para o dia a dia, lifestyle, casa e muito mais.",
      categoriesLabel: "Categorias",
      categoriesTitle: "Comprar por categoria",
      categoriesText: "Explore a nossa vasta gama de categorias de produtos",
      categories: [
        {
          title: "Casa & Living",
          text: "Transforme o seu espaço com produtos escolhidos para conforto e estilo.",
          icon: "⌂",
        },
        {
          title: "Gadgets",
          text: "Descubra dispositivos inteligentes e modernos para o dia a dia.",
          icon: "⌘",
        },
        {
          title: "Animais",
          text: "Tudo o que os seus amigos peludos precisam para uma vida feliz e saudável.",
          icon: "◌",
        },
        {
          title: "Fitness",
          text: "Essenciais premium para apoiar o seu treino e hábitos saudáveis.",
          icon: "✦",
        },
        {
          title: "Lifestyle",
          text: "Produtos que melhoram a sua rotina com design e funcionalidade.",
          icon: "♡",
        },
        {
          title: "Produtos latinos",
          text: "Produtos e sabores autênticos que levam cultura até à sua porta.",
          icon: "◍",
        },
      ],
      ctaTitle: "Experimente a qualidade suíça",
      ctaText:
        "Na BC Market, oferecemos produtos cuidadosamente selecionados que cumprem os mais altos padrões de qualidade e autenticidade.",
      ctaPrimary: "Começar a comprar",
      ctaSecondary: "Saber mais",
      footerTitle: "BC Market",
      footerText1:
        "O seu marketplace suíço de confiança, com produtos de qualidade desde 2024.",
      footerText2:
        "Comprometidos com excelência, autenticidade e satisfação do cliente.",
      quickLinks: "Links rápidos",
      contactUs: "Contacte-nos",
      nav: ["Início", "Loja", "Categorias", "Sobre", "Contacto"],
      copyright: "© 2026 BC Market. Todos os direitos reservados.",
    },
  }

  const t = content[language.code]

  return (
    <div style={{ margin: 0, padding: 0 }}>
      <Navbar language={language} setLanguage={setLanguage} navLabels={t.nav} />

      <section
        style={{
          width: "100%",
          height: "calc(100vh - 82px)",
          minHeight: "650px",
          backgroundImage:
            'url("/images/hero-bg.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          color: "white",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.48)",
          }}
        />

        <div
          style={{
            position: "relative",
            zIndex: 1,
            maxWidth: "900px",
            padding: "20px",
          }}
        >
          <h1
            style={{
              fontSize: "clamp(46px, 7vw, 92px)",
              lineHeight: "0.95",
              fontWeight: "700",
              margin: "0 0 18px 0",
              letterSpacing: "-2px",
            }}
          >
            {t.heroTitle}
          </h1>

          <p
            style={{
              fontSize: "clamp(18px, 2vw, 28px)",
              margin: "0 0 34px 0",
              opacity: 0.95,
            }}
          >
            {t.heroText}
          </p>

          <button
            style={{
              padding: "16px 34px",
              fontSize: "17px",
              fontWeight: "700",
              borderRadius: "14px",
              border: "none",
              background: "white",
              color: "#111",
              cursor: "pointer",
              boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
            }}
          >
            {t.heroButton}
          </button>
        </div>
      </section>

      <section
        style={{
          padding: "80px 40px",
          background: "white",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontSize: "14px",
            letterSpacing: "2px",
            textTransform: "uppercase",
            color: "#666",
            marginBottom: "14px",
          }}
        >
          {t.whyLabel}
        </p>

        <h2
          style={{
            fontSize: "42px",
            margin: "0 0 16px 0",
            color: "#111",
          }}
        >
          {t.whyTitle}
        </h2>

        <p
          style={{
            maxWidth: "760px",
            margin: "0 auto",
            fontSize: "20px",
            color: "#555",
            lineHeight: "1.6",
          }}
        >
          {t.whyText}
        </p>
      </section>

      <section
        style={{
          padding: "100px 50px",
          background: "#f7f7f5",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <p
              style={{
                margin: 0,
                fontSize: "14px",
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: "#777",
              }}
            >
              {t.categoriesLabel}
            </p>

            <h2
              style={{
                fontSize: "56px",
                margin: "14px 0 14px 0",
                color: "#111",
                letterSpacing: "-1px",
              }}
            >
              {t.categoriesTitle}
            </h2>

            <p
              style={{
                margin: 0,
                fontSize: "20px",
                color: "#666",
              }}
            >
              {t.categoriesText}
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "24px",
            }}
          >
            {t.categories.map((item) => (
              <div
                key={item.title}
                style={{
                  background: "white",
                  borderRadius: "22px",
                  padding: "34px",
                  border: "1px solid #ececec",
                  boxShadow: "0 8px 30px rgba(0,0,0,0.04)",
                }}
              >
                <div
                  style={{
                    fontSize: "34px",
                    marginBottom: "22px",
                    color: "#111",
                  }}
                >
                  {item.icon}
                </div>

                <h3
                  style={{
                    fontSize: "30px",
                    margin: "0 0 12px 0",
                    color: "#111",
                    letterSpacing: "-0.5px",
                  }}
                >
                  {item.title}
                </h3>

                <p
                  style={{
                    margin: 0,
                    fontSize: "18px",
                    lineHeight: "1.6",
                    color: "#666",
                  }}
                >
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        style={{
          padding: "90px 40px 70px",
          background: "white",
          textAlign: "center",
          borderTop: "1px solid #ececec",
        }}
      >
        <div
          style={{
            maxWidth: "980px",
            margin: "0 auto",
          }}
        >
          <h2
            style={{
              fontSize: "64px",
              margin: "0 0 24px 0",
              color: "#111",
              letterSpacing: "-1.5px",
            }}
          >
            {t.ctaTitle}
          </h2>

          <p
            style={{
              fontSize: "20px",
              lineHeight: "1.7",
              color: "#666",
              maxWidth: "900px",
              margin: "0 auto 34px",
            }}
          >
            {t.ctaText}
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "16px",
              flexWrap: "wrap",
            }}
          >
            <button
              style={{
                padding: "16px 34px",
                background: "#111",
                color: "white",
                border: "none",
                borderRadius: "10px",
                fontSize: "17px",
                fontWeight: "600",
                cursor: "pointer",
              }}
            >
              {t.ctaPrimary}
            </button>

            <button
              style={{
                padding: "16px 34px",
                background: "white",
                color: "#111",
                border: "1px solid #d9d9d9",
                borderRadius: "10px",
                fontSize: "17px",
                fontWeight: "500",
                cursor: "pointer",
              }}
            >
              {t.ctaSecondary}
            </button>
          </div>
        </div>
      </section>

      <footer
        style={{
          background: "#f7f7f5",
          borderTop: "1px solid #e8e8e8",
          padding: "60px 50px 30px",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.4fr 1fr 1fr",
              gap: "50px",
              marginBottom: "40px",
            }}
          >
            <div>
              <h3
                style={{
                  margin: "0 0 24px 0",
                  fontSize: "20px",
                  color: "#111",
                }}
              >
                {t.footerTitle}
              </h3>

              <p
                style={{
                  margin: "0 0 18px 0",
                  color: "#666",
                  fontSize: "18px",
                  lineHeight: "1.6",
                  maxWidth: "420px",
                }}
              >
                {t.footerText1}
              </p>

              <p
                style={{
                  margin: 0,
                  color: "#666",
                  fontSize: "18px",
                  lineHeight: "1.6",
                  maxWidth: "420px",
                }}
              >
                {t.footerText2}
              </p>
            </div>

            <div>
              <h3
                style={{
                  margin: "0 0 24px 0",
                  fontSize: "20px",
                  color: "#111",
                }}
              >
                {t.quickLinks}
              </h3>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                }}
              >
                {t.nav.map((item) => (
                  <a
                    key={item}
                    href="#"
                    style={{
                      textDecoration: "none",
                      color: "#666",
                      fontSize: "18px",
                    }}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3
                style={{
                  margin: "0 0 24px 0",
                  fontSize: "20px",
                  color: "#111",
                }}
              >
                {t.contactUs}
              </h3>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "18px",
                  color: "#666",
                  fontSize: "18px",
                }}
              >
                <div>✉ info@bcmarket.ch</div>
                <div>☎ +41 44 123 45 67</div>
                <div>⌖ Zurich, Switzerland</div>
              </div>
            </div>
          </div>

          <div
            style={{
              borderTop: "1px solid #dddddd",
              paddingTop: "26px",
              textAlign: "center",
              color: "#666",
              fontSize: "18px",
            }}
          >
            {t.copyright}
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home