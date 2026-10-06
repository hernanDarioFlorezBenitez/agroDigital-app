import logoStyles from "../styles/Logo.module.css";

const Logo = () => {
  return (
    <div className={logoStyles.logoContainer}>
      <div className={logoStyles.logoIcon}>
        <svg
          width="44"
          height="44"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          style={{ color: "#065f46" }}
        >
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      </div>
      <div>
        <h1 className={logoStyles.logoText}>
          AGRO<span className={logoStyles.logoHighlight}>DIGITAL</span>
        </h1>
        <span className={logoStyles.logoSubtitle}>Santander Pro</span>
      </div>
    </div>
  );
};

export default Logo;
