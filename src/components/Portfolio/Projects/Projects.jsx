import style from "./Projects.module.css";

const Projects = () => {
    return (
        <div className={style.contProjects} id="contProjects">
            <fieldset className={style.education}>
                <legend><h1 className={style.titulo}>PROJECTS</h1></legend>

                <div className={style.divFlecha}>
                    <h3 className={style.flecha}>➤</h3>
                    <a href="#home" className={style.aFlecha}>
                        <h3 className={style.home}>Home</h3>
                    </a>
      </div>

            

            

            
            </fieldset>
        </div>
    )
};

export default Projects