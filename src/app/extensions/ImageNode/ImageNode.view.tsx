import Button from "@/app/Components/Button";
import { NodeViewProps, NodeViewWrapper } from "@tiptap/react";

import styles from "./ImageNode.module.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsRotate } from "@fortawesome/free-solid-svg-icons";

const ImageNodeView = ({ node, updateAttributes }: NodeViewProps) => {
  const handleUrlUpdate = () => {
    const url = prompt("Please enter image url", node.attrs.url || "");
    if (url) {
      updateAttributes({ url });
    }
  };
  return (
    <NodeViewWrapper className={styles.imageNodeWrapper}>
      <div className={styles.imageContainer}>
        {!node.attrs.url && (
          <div contentEditable={false}>
            <Button onClick={handleUrlUpdate}>Set an image</Button>
          </div>
        )}
        {node.attrs.url && (
          <Image
            src={node.attrs.url}
            alt={""}
            layout="fill"
            style={{ objectFit: "contain" }}
          />
        )}
        {node.attrs.url && (
          <div className={styles.refreshAction} onClick={handleUrlUpdate}>
            <FontAwesomeIcon
              icon={faArrowsRotate}
              color="rgba(255, 255, 255, 0.65)"
            />
          </div>
        )}
      </div>
    </NodeViewWrapper>
  );
};

export default ImageNodeView;
