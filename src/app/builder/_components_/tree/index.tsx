import { DocumentTextIcon, FolderIcon } from '@heroicons/react/24/solid';
import React from 'react';

// Define types for the file tree
interface FileNode {
  path: string;
  name: string;
  type: 'file' | 'folder';
  children?: FileNode[];
}

interface FileTreeProps {
  data: FileNode;
}

// Helper component to render individual file/folder nodes
const TreeNode: React.FC<{ node: FileNode }> = ({ node }) => {
  const [isOpen, setIsOpen] = React.useState(true);

  const handleToggle = () => {
    if (node.type === 'folder') {
      setIsOpen(!isOpen);
    }
  };

  return (
    <div style={{ paddingLeft: '1rem' }}>
      <div onClick={handleToggle} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
        {node.type === 'folder' ? <FolderIcon className='w-8 h-4' /> : <DocumentTextIcon  className='w-8 h-4' />}
        <span style={{ marginLeft: '0.5rem' }}>{node.name}</span>
      </div>
      {isOpen && node.children && (
        <div style={{ marginLeft: '1rem', borderLeft: '1px solid #ddd' }}>
          {node.children.map(child => (
            <TreeNode key={child.path} node={child} />
          ))}
        </div>
      )}
    </div>
  );
};

const FileTree: React.FC<FileTreeProps> = ({ data }) => {
  return <TreeNode node={data} />
};

export default FileTree;
