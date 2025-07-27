import './MyProjects.css'
import {useInView} from "../../hooks/useInView.ts";

function MyProjects() {
    const [ref, isVisible] = useInView<HTMLDivElement>();

    return (
        <div ref={ref} className={`my-projects ${isVisible ? 'visible' : "hidden"}`} id="my-projects">
            <div className="my-project-title">
                <h1>My Projects</h1>
            </div>
            <div className="my-project">


                <div className="project-card">
                    <img
                        src="https://media.discordapp.net/attachments/1302129117092909097/1398832240296722472/image.png?ex=6886cb8b&is=68857a0b&hm=94aaa672a27a6d7ced61a404c2c468604b9cc71c9108cd5f32df4c36c56ff719&=&format=webp&quality=lossless"
                        alt="Shadin Project"
                    />
                    <div className="overlay">
                        <h2>Spartan Executive - Shadin Mini-FLO Gauge</h2>
                        <a href="https://inibuilds.com/products/inibuilds-spartan-7w-executive-msfs">View Project</a>
                    </div>
                </div>


                <div className="project-card">
                    <img
                        src="/Home/src/assets/pecunia.png"
                        alt="Pecunia"
                    />
                    <div className="overlay">
                        <h2>Pecunia - Personal Financial Tracker</h2>
                        <a>View Project</a>
                    </div>
                </div>


                <div className="project-card">
                    <img
                        src="https://media.discordapp.net/attachments/1120320458022211616/1398852631862050826/image.png?ex=6886de88&is=68858d08&hm=35e7998b1733b1f3bbef2975996a552f43986e1ae1d9880e0bdcb8a4ddb124e4&=&format=webp&quality=lossless&width=550&height=296"
                        alt="MAGX"
                    />
                    <div className="overlay">
                        <h2>MAGX - ATCO Managaement</h2>
                        <a>View Project</a>
                    </div>
                </div>


            </div>
        </div>
    );
}


export default MyProjects;