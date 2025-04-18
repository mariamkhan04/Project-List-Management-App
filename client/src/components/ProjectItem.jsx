import DeleteButton from './DeleteButton';
import EditButton from './EditButton';
import '../styles/component/ProjectItem.css';

export default function ProjectItem({ project, onDelete, onEdit }) {
  return (
    <div className="project-item">
      <span>{project.name}</span>
      <div className="project-actions">
        <EditButton 
          project={project} 
          onEdit={onEdit} 
        />
        <DeleteButton 
          projectId={project.id} 
          onDelete={onDelete} 
        />
      </div>
    </div>
  );
}