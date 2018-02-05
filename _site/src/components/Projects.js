import React, { Component } from 'react';
import Projectitem from "./Projectitem";

class Projects extends Component {
    deleteProject(id){
        this.props.onDelete(id);
    }


    render() {
        let projectItems;
        if(this.props.projects){
            projectItems = this.props.projects.map(project => {
                //console.log(project);
                return(
                    <Projectitem onDelete={this.deleteProject.bind(this)} key={project.title} project={project}/>

            )



            });


        }
        //console.log(this.props);
        return (
            <div className="Projects">
                <h3>Latest Projects</h3>
                {projectItems}
            </div>
        );
    }
}


export default Projects;
