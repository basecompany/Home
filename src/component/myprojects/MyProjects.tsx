import './MyProjects.css'

function MyProjects({ visible }: { visible: boolean }){
    return(
        <div className={`my-projects ${visible ? "visible" : "hidden"}`} id={"my-projects"}>
            <div className="my-project-title">
                <h1>My Projects</h1>
            </div>
            <div className="my-project">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

export default MyProjects;