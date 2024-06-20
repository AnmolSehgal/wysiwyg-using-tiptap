import { Node, mergeAttributes } from "@tiptap/core";
import { ReactNodeViewRenderer } from "@tiptap/react";
import ImageNodeView from "./ImageNode.view";

const ImageNode = Node.create({
  name: "imageNode",
  group: "block",
  content: "inline*",
  parseHTML() {
    return [
      {
        tag: "imageNode",
      },
    ];
  },
  addAttributes() {
    return {
      url: {
        default: null,
      },
    };
  },
  renderHTML({ HTMLAttributes }) {
    return ["div", mergeAttributes(HTMLAttributes)];
  },
  addNodeView() {
    return ReactNodeViewRenderer(ImageNodeView);
  },
});

export default ImageNode;
