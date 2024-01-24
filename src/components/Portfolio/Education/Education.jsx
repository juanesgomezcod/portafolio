import style from "./Education.module.css";
import logodh from "../../../Assets/img/digitalhouselogo.jpg"
import logoe from "../../../Assets/img/universidadeafitlogo.jpg"
import logoc from "../../../Assets/img/cesdelogo.jpg"
import logoes from "../../../Assets/img/Escalalogo.jpg"

const Education = () => {
    return (
        <div className={style.contEducation} id="contEducation">
            <fieldset className={style.education}>
                <legend><h1 className={style.titulo}>EDUCATION</h1></legend>

                <div className={style.divFlecha}>
                    <h3 className={style.flecha}>➤</h3>
                    <a href="#home" className={style.aFlecha}>
                        <h3 className={style.home}>Home</h3>
                    </a>
                </div>

            <div className={style.info}>
                <div className={style.arriba}>
                <div className={style.encabezado}>
                <h4 className={style.institucion}>Digital House - Coding School</h4>
                <h3 className={style.logro}>Programador Web Full Stack</h3>
                <h5 className={style.fecha}>Jun. 2022 - Jan. 2023</h5>
                </div>
                <div className={style.contLogo}>
                    <img className={style.logo} src={logodh} alt="LogoDH" />
                </div>
                </div>
                <div className={style.abajo}>
                    <h5 className={style.apt}>HTML - CSS - JavaScript - Node.js - Sequelize - React - Express.js - SQL</h5>
                </div>
                
            </div>

            <div className={style.info}>
                <div className={style.arriba}>
                <div className={style.encabezado}>
                <h4 className={style.institucion}>EAFIT</h4>
                <h3 className={style.logro}>Administracion de Negocios</h3>
                <h5 className={style.fecha}>2001 - 2008</h5>
                </div>
                <div className={style.contLogo}>
                    <img className={style.logo} src={logoe} alt="LogoE" />
                </div>
                </div>
                <div className={style.abajo}>
                    <h5 className={style.apt}>Administracion - Finanzas - Contabilidad - Mercadeo - Ventas - Derecho Economico</h5>
                </div>

                
                
            </div>

            <div className={style.info}>
                <div className={style.arriba}>
                <div className={style.encabezado}>
                <h4 className={style.institucion}>CESDE</h4>
                <h3 className={style.logro}>Tecnico en Redes y Telecomunicaciones</h3>
                <h5 className={style.fecha}>Jan. 2005 - Dec. 2007</h5>
                </div>
                <div className={style.contLogo}>
                    <img className={style.logo} src={logoc} alt="LogoC" />
                </div>
                </div>
                <div className={style.abajo}>
                    <h5 className={style.apt}>Redes Microsoft</h5>
                </div>

                
                
            </div>

            <div className={style.info}>
                <div className={style.arriba}>
                <div className={style.encabezado}>
                <h4 className={style.institucion}>Escala</h4>
                <h3 className={style.logro}>Tecnico en electronica y reparacion de computadores</h3>
                <h5 className={style.fecha}>2002 - 2004</h5>
                </div>
                <div className={style.contLogo}>
                    <img className={style.logo} src={logoes} alt="LogoEscala" />
                </div>
                </div>
                <div className={style.abajo}>
                    <h5 className={style.apt}>Electronica - Mantenimiento de Computadores</h5>
                </div>

                
                
            </div>

            

            
            </fieldset>
        </div>
    )
};

export default Education