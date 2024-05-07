import { NodeViewContent, NodeViewWrapper } from "@tiptap/react";

const CaptionNode = () => {
  return (
    <NodeViewWrapper className={""}>
      <NodeViewContent
        style={{ border: "1px solid rgba(255,255,255,0.88)" }}
      ></NodeViewContent>
    </NodeViewWrapper>
  );
};

export default CaptionNode;
