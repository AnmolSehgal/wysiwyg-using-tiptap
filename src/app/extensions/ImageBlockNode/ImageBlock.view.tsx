import Button from "@/app/Components/Button";
import { NodeViewContent, NodeViewProps, NodeViewWrapper } from "@tiptap/react";
import styles from "./ImageBlock.module.css";

const ImageBlockNode = ({ deleteNode }: NodeViewProps) => {
  <NodeViewWrapper className={styles.imageBlockWrapper}>
    <span>
      <Button
        onClick={() => {
          deleteNode();
        }}
      >
        X
      </Button>
    </span>
    <NodeViewContent className={styles.imageBlockContent}></NodeViewContent>
  </NodeViewWrapper>;
};

export default ImageBlockNode;
