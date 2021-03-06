import React from 'react'
import Projects from '../components/Projects/Projects'
import SearchBar from '../components/SearchBar/SearchBar'
function ProjectPage() {
    const [project, setproject] = React.useState(null);
    return (
        <div >
            <div className="m7">
                <SearchBar setproject={setproject} />
                <Projects list={100} project={project} query={true} />
            </div>
        </div>
    )
}

export default ProjectPage