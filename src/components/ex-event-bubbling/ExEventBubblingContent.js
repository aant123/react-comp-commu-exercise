import React from 'react';
import { Tree } from 'antd';
import exerciseContent from '../../hocs/exerciseContent';
import Code from '../Code';
import Parent from './Parent'

const DirectoryTree = Tree.DirectoryTree;
const TreeNode = Tree.TreeNode;

export default exerciseContent(
  'Event Bubbling', 
  () => <div>
    <p>
      By modifying following files.
    </p>
    <DirectoryTree
        defaultExpandAll
      >
        <TreeNode title="src" key="src">
          <TreeNode title="components" key="components">
            <TreeNode title="ex-event-bubbling" key="ex-event-bubbling">
              <TreeNode title="Parent.js" key="Parent.js" isLeaf />
              <TreeNode title="Child.js" key="Child.js" isLeaf />
            </TreeNode>
          </TreeNode>
        </TreeNode>
      </DirectoryTree>
    <p>
      Please make the text value in <Code>Parent</Code> component to automatically sync with the input of the textfield in <Code>Child</Code> component.
    </p>
    <p>
      Using <Code>Event Bubbling</Code> strategy described in <a href="https://www.javascriptstuff.com/component-communication/#4-event-bubbling" target="_blank">https://www.javascriptstuff.com/component-communication/#4-event-bubbling</a>
    </p>
  </div>,
  () => <Parent />
);
