import Button from "@/app/Components/Button";
import { NodeViewProps, NodeViewWrapper } from "@tiptap/react";

import styles from "./ImageNode.module.css";
import Image from "next/image";

const ImageNodeView = ({ node, updateAttributes }: NodeViewProps) => {
  console.log({ url: node.attrs.url });
  return (
    <NodeViewWrapper>
      <div className={styles.imageContainer}>
        {!node.attrs.url && (
          <div contentEditable={false}>
            <Button
              onClick={() => {
                const url = prompt("Please enter image url");
                if (url) {
                  console.log(url);
                  updateAttributes({ url });
                }
              }}
            >
              Set an image
            </Button>
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
        {/* {node.attrs.url && <div style={{ position: "absolute" }}></div>} */}
      </div>
    </NodeViewWrapper>
  );
};

export default ImageNodeView;
