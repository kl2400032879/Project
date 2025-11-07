import React from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Public pages
  const publicNavItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  // Logged-in app pages
  const appNavItems = [
    { name: "Find Jobs", path: "/jobs" },
    { name: "My Applications", path: "/applications" },
    { name: "Messages", path: "/messages" },
  ];

  // Decide whether it's a public route
  const publicPaths = ["/", "/about", "/contact", "/signup", "/login", "/verification"];
  const isPublicPage =
    publicPaths.includes(location.pathname) ||
    location.pathname.startsWith("/signup") ||
    location.pathname.startsWith("/login");

  const currentNavItems = isPublicPage ? publicNavItems : appNavItems;

  const SettingsIcon = () => (
    <svg
      onClick={() => navigate("/settings")}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ cursor: "pointer", color: "#808080" }}
    >
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18A2 2 0 0 1 9.8 6.06l-.91 1.48a2 2 0 0 0-.25 2.16l.2 1.41a2 2 0 0 1-1.4 2.45l-1.4.2a2 2 0 0 0-1.87 1.25l-.23.95a2 2 0 0 0 1 2.1l1.41.2c.49.07.95.27 1.35.59l.94.75a2 2 0 0 0 2.22.28l1.48-.92a2 2 0 0 1 2.16-.25l1.41.2a2 2 0 0 1 2.45 1.4l.2 1.4a2 2 0 0 0 1.25 1.87l.95.23a2 2 0 0 0 2.1-1l.2-1.41a2 2 0 0 1 2.45-1.4l1.4-.2a2 2 0 0 0 1.87-1.25l.23-.95a2 2 0 0 0-1-2.1l-1.41-.2a2 2 0 0 1-.94-.75l-.92-1.48a2 2 0 0 0-.25-2.16l.2-1.41a2 2 0 0 1-1.4-2.45l-1.4-.2a2 2 0 0 0-1.87-1.25l-.95-.23A2 2 0 0 0 12.22 2z"></path>
      <circle cx="12" cy="12" r="3"></circle>
    </svg>
  );

  const NotificationIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ cursor: "pointer", color: "#808080" }}
    >
      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
      <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
    </svg>
  );

  return (
    <header
      style={{
        padding: "20px 5%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "1px solid #eee",
        backgroundColor: "white",
        position: "sticky",
        top: 0,
        zIndex: 10,
      }}
    >
      {/* -------- Left Section: Logo + Navigation -------- */}
      <div style={{ display: "flex", alignItems: "center", gap: "40px" }}>
        <h1
          style={{
            color: "#7B61FF",
            fontSize: "1.8rem",
            fontWeight: 700,
            cursor: "pointer",
            whiteSpace: "nowrap",
          }}
          onClick={() => navigate("/")}
        >
          NVS
        </h1>

        <nav style={{ display: "flex", gap: "25px" }}>
          {currentNavItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              style={{
                textDecoration: "none",
                color: location.pathname === item.path ? "#7B61FF" : "#555",
                fontWeight: location.pathname === item.path ? 700 : 500,
                transition: "color 0.2s",
              }}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>

      {/* -------- Right Section: Buttons / Icons -------- */}
      <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
        {isPublicPage ? (
          <>
            <button
              onClick={() => navigate("/signup")}
              style={{
                padding: "8px 15px",
                borderRadius: "8px",
                border: "none",
                backgroundColor: "#7B61FF",
                color: "white",
                cursor: "pointer",
                fontWeight: 600,
              }}
            >
              Sign Up
            </button>
            <button
              onClick={() => navigate("/login")}
              style={{
                padding: "8px 15px",
                borderRadius: "8px",
                border: "1px solid #7B61FF",
                backgroundColor: "white",
                color: "#7B61FF",
                cursor: "pointer",
                fontWeight: 600,
              }}
            >
              Login
            </button>
          </>
        ) : (
          <>
            <div style={{ position: "relative" }}>
              <input
                type="text"
                placeholder="Search Talent"
                style={{
                  padding: "8px 40px 8px 15px",
                  borderRadius: "20px",
                  border: "1px solid #ddd",
                  width: "180px",
                }}
              />
              <span
                style={{
                  position: "absolute",
                  right: "15px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  color: "#aaa",
                }}
              >
                🔍
              </span>
            </div>
            <SettingsIcon />
            <NotificationIcon />
            <div
              onClick={() => navigate("/profile")}
              style={{
                width: "32px",
                height: "32px",
                borderRadius: "50%",
                backgroundColor: "#B5A5FF",
                border: "2px solid #7B61FF",
                cursor: "pointer",
              }}
            />
          </>
        )}
      </div>
    </header>
  );
};

export default NavBar;
