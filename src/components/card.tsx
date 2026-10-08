import cardStyles from "../styles/card.module.css";
import cartIcon from "../assets/icon/shopping_cart_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg";

const Card = () => {
  return (
    <article className={cardStyles["product-card"]}>
      {/* Contenedor de Imagen y Badge */}
      <div className={cardStyles["media-container"]}>
        <span className={`${cardStyles["badge"]} ${cardStyles["descripcion"]}`}>
          Descripción +
        </span>
        <img 
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU35wZNiWwDmH2EcuF17wg1OJj0xZpbKADI98bzOsDEQ&s=10" 
          alt="Papa Pastusa" 
          className={cardStyles["image"]} 
        />
      </div>

      {/* Contenido e Inputs de la Card */}
      <div className={cardStyles["content"]}>
        <h3 className={cardStyles["title"]}>Papa Pastusa</h3>
        
      {/* Lista Desplegable HTML Pura */}
<div className={cardStyles["select-wrapper"]}>
  <select className={cardStyles["select-input"]} defaultValue="">
    {/* La primera opción que invita al usuario a desplegar */}
    <option value="" disabled hidden>mas . . .   +</option>
    
    <option value="arroba">Arroba — $23.000</option>
    <option value="bulto">Bulto — $85.000</option>
    <option value="kilo">Kilo — $2.200</option>
  </select>
</div>


{/* Botón Comprar Optimizado con tu SVG Local */}
        <button type="button" className={cardStyles["buy-button"]}>
          AÑADIR AL{"\u00a0"}
          <img 
            src={cartIcon} 
            alt="Carrito de compras" 
            className={cardStyles["cart-icon"]} 
          />
        </button>


      </div>
    </article>
  );
};

export default Card;
