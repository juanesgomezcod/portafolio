import style from "./Languages.module.css";
import logo from "../../../Assets/img/digitalhouselogo.jpg"

const Languages = () => {
    return (
        <div className={style.contLanguages} id="contLanguages">
            <fieldset className={style.education}>
                <legend><h1 className={style.titulo}>LANGUAGES</h1></legend>

                <div className={style.divFlecha}>
                    <h3 className={style.flecha}>➤</h3>
                    <a href="#home" className={style.aFlecha}>
                        <h3 className={style.home}>Home</h3>
                    </a>
      </div>

            <div className={style.info}>
                <div className={style.arriba}>
                <div className={style.encabezado}>
                <h4 className={style.institucion}>ESPAÑOL</h4>
                <h3 className={style.logro}>Nativo</h3>
                <h5 className={style.fecha}>Jun. 2022 - Jan. 2023</h5>
                </div>
                <div className={style.contLogo}>
                    <img className={style.logo} src={logo} alt="LogoDH" />
                </div>
                </div>
                <div className={style.abajo}>
                    <h5 className={style.apt}>HTML - CSS - JavaScript - Node.js - Sequelize - React - Express.js - SQL</h5>
                </div>
                
            </div>

            <div className={style.info}>
                <div className={style.arriba}>
                <div className={style.encabezado}>
                <h4 className={style.institucion}>INGLES</h4>
                <h3 className={style.logro}>Programador Web Full Stack</h3>
                <h5 className={style.fecha}>Jun. 2022 - Jan. 2023</h5>
                </div>
                <div className={style.contLogo}>
                    <img className={style.logo} src={logo} alt="LogoDH" />
                </div>
                </div>
                <div className={style.abajo}>
                    <h5 className={style.apt}>HTML - CSS - JavaScript - Node.js - Sequelize - React - Express.js - SQL</h5>
                </div>

                
                
            </div>

            

            
            </fieldset>
        </div>
    )
};

export default Languages