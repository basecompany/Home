import "./Object.css"


import object1 from "../../../../../../assets/1.png"
import object2 from "../../../../../../assets/2.png"
import object3 from "../../../../../../assets/3.png"

function Object(){
    return(
        <div className={"OBJECTS"}>
            <div className={"OBJECTS_2_WRAPPER"}><img className={"OBJECTS_2 OBJECT_FLOATING_ANIMATION OBJECT_BLUR animate__fadeInLeft"} src={object2}/></div>
            <div className={"OBJECTS_3_WRAPPER"}><img className={"OBJECTS_3 OBJECT_FLOATING_ANIMATION OBJECT_BLUR animate__fadeInUp"} src={object3}/></div>
            <div className={"OBJECTS_1_WRAPPER"}><img className={"OBJECTS_1 OBJECT_FLOATING_ANIMATION OBJECT_BLUR animate__fadeInRight"} src={object1}/></div>


        </div>
    )
}

export default Object