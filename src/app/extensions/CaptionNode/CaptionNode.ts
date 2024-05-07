import { Node, mergeAttributes } from "@tiptap/core";
import { ReactNodeViewRenderer } from "@tiptap/react";
import CaptionNodeView from "./CaptionNode.view";

const CaptionNode = Node.create({
  name: "captionNode",
  group: "block",
  content: "inline*",
  isolating: true,

  parseHTML() {
    return [
      {
        tag: "captionNode",
      },
    ];
  },
  renderHTML({ HTMLAttributes }) {
    return ["caption-node", mergeAttributes(HTMLAttributes), 0];
  },
  addNodeView() {
    return ReactNodeViewRenderer(CaptionNodeView);
  },
});

export default CaptionNode;
