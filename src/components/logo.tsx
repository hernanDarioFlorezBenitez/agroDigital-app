import logoStyles from "../styles/Logo.module.css";
const Logo = () => {
  return (
    <div className={logoStyles.logoContainer}>
      
      <div className={logoStyles.logoIcon}>
        <img src="../src/assets/icon/logo.png" alt="Logo" className={logoStyles.logoImage} />
      </div>
      
      <div className={logoStyles.logoTextGroup}>
        <span className={logoStyles.logoSubtitle}>Tu tienda en linea</span>
        <h1 className={logoStyles.logoText}>
          VILLA<span className={logoStyles.logoHighlight}> MERCEDES</span>
        </h1>
        <span className={logoStyles.logoSubtitle}>Agro Digital</span>
      </div>

    </div>
  );
};

export default Logo;

