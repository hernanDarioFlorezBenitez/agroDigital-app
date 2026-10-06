import cardStyles from "../styles/card.module.css";

const Card = () => {
  return (
    <article className={cardStyles["product-card"]}>
      {/* Contenedor de Imagen y Badge */}
      <div className={cardStyles["media-container"]}>
        <span className={`${cardStyles["badge"]} ${cardStyles["descripcion]}`}>
          Descripción
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
          <select className={cardStyles["select-input"]}>
            <option value="arroba">Arroba - \$23.000</option>
            <option value="bulto">Bulto - \$85.000</option>
            <option value="kilo">Kilo - \$2.200</option>
          </select>
        </div>

{/* Botón Comprar */}
<button type="button" className={cardStyles["buy-button"]}>
  AÑADIR AL 
  <span 
    className="material-symbols-outlined" 
    style={{ textTransform: 'none', marginLeft: '8px' }}
  >
    shopping_cart
  </span>
</button>


      </div>
    </article>
  );
};

export default Card;
