import { NodeViewContent, NodeViewProps, NodeViewWrapper } from "@tiptap/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import styles from "./CardNode.module.css";

const CardNodeView = ({ deleteNode }: NodeViewProps) => {
  return (
    <NodeViewWrapper className={styles.cardWrapper}>
      <div
        className={styles.deleteNode}
        onClick={() => {
          deleteNode();
        }}
      >
        <FontAwesomeIcon icon={faTrash} color="rgba(255, 255, 255, 0.65)" />
      </div>

      <NodeViewContent
        style={{ display: "flex", flexDirection: "column", gap: "4px" }}
      ></NodeViewContent>
    </NodeViewWrapper>
  );
};

export default CardNodeView;
