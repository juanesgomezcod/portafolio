import style from "./Experience.module.css";
import logo from "../../../Assets/img/digitalhouselogo.jpg"

const Experience = () => {
    return (
        <div className={style.contExperience} id="contExperience">
            <fieldset className={style.education}>
                <legend><h1 className={style.titulo}>EXPERIENCE</h1></legend>

            <div className={style.info}>
                <div className={style.arriba}>
                <div className={style.encabezado}>
                <h4 className={style.institucion}>Digital House - Coding School</h4>
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

            <div className={style.info}>
                <div className={style.arriba}>
                <div className={style.encabezado}>
                <h4 className={style.institucion}>Digital House - Coding School</h4>
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

            <div className={style.info}>
                <div className={style.arriba}>
                <div className={style.encabezado}>
                <h4 className={style.institucion}>Digital House - Coding School</h4>
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

            <div className={style.info}>
                <div className={style.arriba}>
                <div className={style.encabezado}>
                <h4 className={style.institucion}>Digital House - Coding School</h4>
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

export default Experience