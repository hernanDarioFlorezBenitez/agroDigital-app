import style from '../styles/descripcion.module.css'
function Descripcion() {
  return (
    <div className={style["container"]}>
      <div className={style["contentmodal"]}>
        <div className={style["product-row"]}>
          <div className={style["product-image"]}>
        <img src="https://th.bing.com/th/id/OIP.ej8Agxv0KEG6rlHpKlQLbgHaEo?w=276&h=183&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" />
        </div>
        <div className={style["product-info"]}>
        <h2>Papa pastusa</h2>

        <p className={style["product-descripcion"]}>La papa pastusa es una variedad de papa colombiana, harinosa y de alto contenido de almidón, ideal para sopas, purés y preparaciones que requieren que se deshaga fácilmente.</p>
        <p className={style["product-price"]}>Precio:$30.000</p>
        <button>agregar al carrito</button>
        </div>
      </div>
        </div>  
        
    </div>
    

  )
}

export default Descripcion