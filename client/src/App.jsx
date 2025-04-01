
import { useState, useEffect } from 'react';
import ProjectEntryForm from './components/ProjectEntryForm';
import ProjectList from './components/ProjectList';
import { 
  fetchProjects, 
  fetchProjectCount, 
  addProject as apiAddProject, 
  deleteProject as apiDeleteProject,
  deleteAllProjects as apiDeleteAllProjects,
  updateProject as apiUpdateProjects
} from './api/projectService';
import './styles/App.css';

function App() {
  const [projects, setProjects] = useState([]);
  const [projectCount, setProjectCount] = useState(0);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const loadProjects = async () => {
    try {
      setLoading(true);
      setError(null);
      const [projectsData, countData] = await Promise.all([
        fetchProjects(),
        fetchProjectCount()
      ]);
      setProjects(projectsData.projects);
      setProjectCount(countData.count);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadProjects();
  }, []);

  const handleAddProject = async (name) => {
    try {
      const { project } = await apiAddProject(name);
      setProjects([project, ...projects]);
      setProjectCount(prev => prev + 1);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleDeleteProject = async (id) => {
    try {
      await apiDeleteProject(id);
      setProjects(projects.filter(p => p.id !== id));
      setProjectCount(prev => prev - 1);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleEditProject = async (id, newName) => {
    try {
      const { project } = await apiUpdateProjects(id, newName);
      setProjects(projects.map(p => 
        p.id === id ? project : p
      ));
    } catch (err) {
      setError(err.message);
    }
  };

  const handleDeleteAllProjects = async () => {
    if (window.confirm("Are you sure you want to delete all projects?")) {
      try {
        await apiDeleteAllProjects();
        setProjects([]);
        setProjectCount(0);
      } catch (err) {
        setError(err.message);
      }
    }
  };

  if (loading) return <div className="app">Loading...</div>;

  return (
    <div className="app">
      <h1>Projects List</h1>
      <h4>Management App</h4>
      <p>Total Projects: {projectCount}</p>
      
      {error && <div className="error">{error}</div>}
      
      <div className="projects">
        <ProjectEntryForm onAdd={handleAddProject} />
        <ProjectList 
          projects={projects}
          onDelete={handleDeleteProject}
          onEdit={handleEditProject}
          onDeleteAll={handleDeleteAllProjects}
          onRefresh={loadProjects}
        />
      </div>
    </div>
  );
}

export default App;
          // import { useState } from 'react';
          // import ProjectEntryForm from './components/ProjectEntryForm';
          // import ProjectList from './components/ProjectList';
          // import './styles/App.css';
          
          // function App() {
          //   const [projects,setProjects] = useState([
          //     {id: 1, content: "DIP with Python"},
          //     {id: 2, content: "FYP with undergrads"},
          //     {id: 3, content: "PHD with crazy people"},
          //   ]);
          
          //   const deleteProject = (id) => {
          //     setProjects(projects.filter(project => project.id !== id));
          //   }
          
          //   const addProject = (newProject) => {
          //     setProjects([
          //       {
          //         id: Date.now(), // better than Math.random()
          //         content: newProject.trim()
          //       },
          //       ...projects
          //     ]);
          //   }
          
          //   const editProject = (id, newContent) => {
          //     setProjects(projects.map(project => 
          //       project.id === id ? { ...project, content: newContent.trim() } : project
          //     ));
          //   };
          
          //   const deleteAllProjects = () => {
          //     if (window.confirm("Are you sure you want to delete all projects?")) {
          //       setProjects([]);
          //     }
          //   };
          
          //   return (
          //     <div className="app">
          //     <h1>Projects List</h1>
          //     <h4>Management App</h4>
          //     <div className="projects">
          //       <ProjectEntryForm onAdd={addProject} />
          //       <ProjectList 
          //         projects={projects}
          //         onDelete={deleteProject}
          //         onEdit={editProject}
          //         onDeleteAll={deleteAllProjects}
          //       />
          //     </div>
          //   </div>
          //   );
          // }
          
          // export default App;