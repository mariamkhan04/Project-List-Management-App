import { FaTrash } from "react-icons/fa";
import '../styles/component/DeleteButton.css';

export default function DeleteButton({ projectId, onDelete }) {
    return (
      <button
        onClick={() => onDelete(projectId)}
        className="delete-btn"
        aria-label="Delete project"
      >
        <FaTrash/>
      </button>
    );
  }