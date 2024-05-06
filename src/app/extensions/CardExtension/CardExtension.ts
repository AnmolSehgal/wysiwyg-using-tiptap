import { Node } from "@tiptap/core";
import { ReactNodeViewRenderer, mergeAttributes } from "@tiptap/react";
import CardView from "./CardView";

declare module "@tiptap/core" {
  interface Commands<ReturnType> {
    CardNode: {
      /**
       * create a card node
       */
      createCardNode: () => ReturnType;
    };
  }
}

const CardNode = Node.create({
  name: "cardNode",
  group: "block",
  content: "block*",
  gapCursor: false,
  parseHTML() {
    return [
      {
        tag: "cardNode",
      },
    ];
  },
  renderHTML({ HTMLAttributes }) {
    return ["cardNode", mergeAttributes(HTMLAttributes)];
  },
  addCommands() {
    return {
      createCardNode:
        () =>
        ({ commands }) => {
          return commands.insertContent({ type: this.name });
        },
    };
  },
  addNodeView() {
    return ReactNodeViewRenderer(CardView);
  },
});

export default CardNode;
