import { Node, mergeAttributes } from "@tiptap/core";
import { ReactNodeViewRenderer } from "@tiptap/react";
import CaptionNodeView from "./CaptionNode.view";

const CaptionNode = Node.create({
  name: "captionNode",
  group: "block",
  content: "text*",
  code: true,
  parseHTML() {
    return [
      {
        tag: "captionNode",
      },
    ];
  },
  renderHTML({ HTMLAttributes }) {
    return ["p", mergeAttributes(HTMLAttributes)];
  },
  addNodeView() {
    return ReactNodeViewRenderer(CaptionNodeView);
  },
});

export default CaptionNode;
