import * as fs from 'fs';
import * as path from 'path';

interface TreeNode {
    path: string;
    name: string;
    type: 'file' | 'folder';
    children?: TreeNode[];
}

/**
 * Recursively generate a tree structure for a given directory.
 * @param dirPath - The path of the directory to read.
 * @returns The tree structure representing files and folders.
 */
export default function generateTree(dirPath: string): TreeNode {
    const stats = fs.lstatSync(dirPath);
    const info: TreeNode = {
        path: dirPath,
        name: path.basename(dirPath),
        type: stats.isDirectory() ? 'folder' : 'file',
    };

    if (info.type === 'folder') {
        info.children = fs.readdirSync(dirPath).map(child =>
            generateTree(path.join(dirPath, child))
        );
    }

    return info;
}