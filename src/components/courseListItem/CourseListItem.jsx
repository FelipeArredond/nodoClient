import "./courseListItem.css"

export default function CourseListItem(){
    return(
        <div className="course-list-item">\
            <img src="" alt="" className="banner" />
            <div className="text-data">
                <h3 className="title"></h3>
                <p className="description"></p>
            </div>
            <p className="duration"></p>
        </div>
    )
}