import { NodeViewContent, NodeViewWrapper } from "@tiptap/react";
import Image from "next/image";
import { useRef, useState } from "react";

import styles from "./CardView.module.css";
import Button from "@/app/Components/Button";

const CardView = () => {
  const uploadRef = useRef<HTMLInputElement | null>();
  const [image, setImage] = useState<string | ArrayBuffer | null>();
  return (
    <NodeViewWrapper className={styles.cardViewWrapper}>
      <div className={styles.imageContainer}>
        {!image && (
          <div contentEditable={false}>
            <input
              ref={(ref) => {
                uploadRef.current = ref;
              }}
              onChange={(e) => {
                if (e.target.files && e.target.files.length > 0) {
                  const file = e.target.files[0];

                  const reader = new FileReader();
                  reader.onload = () => {
                    setImage(reader.result);
                  };
                  reader.readAsDataURL(file);
                }
              }}
              type="file"
              accept="image/*"
              style={{ display: "none" }}
            />
            <Button
              onClick={() => {
                uploadRef.current?.click();
              }}
            >
              {" "}
              Set an image
            </Button>
          </div>
        )}
        {image && (
          <Image src={image.toString()} alt="check" width={100} height={100} />
        )}
      </div>
      <NodeViewContent
        style={{ border: "1px solid blue", minHeight: "26px" }}
      ></NodeViewContent>
    </NodeViewWrapper>
  );
};

export default CardView;
