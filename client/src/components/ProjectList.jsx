// import ProjectItem from './ProjectItem';
// import '../styles/component/ProjectList.css';
// import { FaTrashAlt } from 'react-icons/fa';

// export default function ProjectList({ projects, onDelete, onEdit, onDeleteAll }) {
//   if (!projects.length) return <p className="empty-message">No projects found!</p>;

//   return (
//     <div className="project-list">
//       {projects.map(project => (
//         <ProjectItem
//           key={project.id}
//           project={project}
//           onDelete={onDelete}
//           onEdit={onEdit}
//         />
//       ))}
//        <button 
//         onClick={onDeleteAll} 
//         className="delete-all-btn"
//       >
//         <FaTrashAlt /> Delete All
//       </button>
//     </div>
//   );
// }

import ProjectItem from './ProjectItem';
import '../styles/component/ProjectList.css';
import { FaTrashAlt, FaSync } from 'react-icons/fa';

export default function ProjectList({ projects, onDelete, onDeleteAll, onRefresh, onEdit }) {
  if (!projects.length) return <p className="empty-message">No projects found!</p>;

  return (
    <div className="project-list">
      {projects.map(project => (
        <ProjectItem
          key={project.id}
          project={project}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
      <div className="action-buttons">
        <button 
          onClick={onRefresh}
          className="refresh-btn"
        >
          <FaSync /> Refresh
        </button>
        <button 
          onClick={onDeleteAll} 
          className="delete-all-btn"
        >
          <FaTrashAlt /> Delete All
        </button>
      </div>
    </div>
  );
}