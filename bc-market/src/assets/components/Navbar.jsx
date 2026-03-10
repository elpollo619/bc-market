import { useState } from "react"

function Navbar({ language, setLanguage, navLabels }) {
  const [open, setOpen] = useState(false)

  const languages = [
    { code: "GB", label: "English" },
    { code: "DE", label: "Deutsch" },
    { code: "FR", label: "Français" },
    { code: "IT", label: "Italiano" },
    { code: "ES", label: "Español" },
    { code: "PT", label: "Português" },
  ]

  return (
    <nav
      style={{
        height: "82px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 42px",
        backgroundColor: "white",
        borderBottom: "1px solid #ececec",
        position: "relative",
        zIndex: 20,
      }}
    >
      <h2
        style={{
          margin: 0,
          fontSize: "24px",
          fontWeight: "700",
          color: "#1f3550",
          letterSpacing: "-0.5px",
        }}
      >
        BC Market
      </h2>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "28px",
        }}
      >
        <div style={{ display: "flex", gap: "28px" }}>
          {navLabels.map((item) => (
            <a
              key={item}
              href="#"
              style={{
                textDecoration: "none",
                color: "#111",
                fontSize: "16px",
                fontWeight: "500",
              }}
            >
              {item}
            </a>
          ))}
        </div>

        <div
          style={{
            position: "relative",
            marginLeft: "20px",
          }}
        >
          <button
            onClick={() => setOpen(!open)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              background: "transparent",
              border: "none",
              fontSize: "16px",
              color: "#111",
              padding: "8px 10px",
              borderRadius: "10px",
              cursor: "pointer",
            }}
          >
            <span>{language.code}</span>
            <span>{language.label}</span>
            <span style={{ fontSize: "12px" }}>▼</span>
          </button>

          {open && (
            <div
              style={{
                position: "absolute",
                top: "46px",
                right: 0,
                width: "180px",
                background: "white",
                border: "1px solid #e5e5e5",
                borderRadius: "14px",
                boxShadow: "0 12px 30px rgba(0,0,0,0.12)",
                overflow: "hidden",
              }}
            >
              {languages.map((item) => {
                const isActive = language.code === item.code

                return (
                  <button
                    key={item.code}
                    onClick={() => {
                      setLanguage(item)
                      setOpen(false)
                    }}
                    style={{
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "14px 16px",
                      background: isActive ? "#f5f5f5" : "white",
                      border: "none",
                      borderBottom: "1px solid #f0f0f0",
                      fontSize: "16px",
                      cursor: "pointer",
                      textAlign: "left",
                    }}
                  >
                    <span style={{ display: "flex", gap: "10px" }}>
                      <span>{item.code}</span>
                      <span>{item.label}</span>
                    </span>

                    <span>{isActive ? "✓" : ""}</span>
                  </button>
                )
              })}
            </div>
          )}
        </div>

        <button
          style={{
            background: "transparent",
            border: "none",
            fontSize: "22px",
            cursor: "pointer",
            marginLeft: "8px",
          }}
        >
          🛒
        </button>
      </div>
    </nav>
  )
}

export default Navbar