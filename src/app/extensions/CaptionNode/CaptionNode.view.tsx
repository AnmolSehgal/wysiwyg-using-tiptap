import { NodeViewContent, NodeViewWrapper } from "@tiptap/react";
import styles from "./CaptionNode.module.css";

const CaptionNode = () => {
  return (
    <NodeViewWrapper>
      <NodeViewContent className={styles.captionNode}></NodeViewContent>
    </NodeViewWrapper>
  );
};

export default CaptionNode;
