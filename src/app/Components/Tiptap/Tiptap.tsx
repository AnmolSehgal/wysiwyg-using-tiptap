import CardNode from "@/app/extensions/CardExtension/CardExtension";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import Button from "../Button";
import styles from "./tiptap.module.css";

// define your extension array
const extensions = [
  StarterKit,
  CardNode,
  Placeholder.configure({
    emptyEditorClass: styles.emptyEditorClass,
    placeholder: "Please add you content here",
  }),
];

const Tiptap = (): JSX.Element => {
  const editor = useEditor({ extensions });
  return (
    <div style={{ width: "786px" }}>
      <div
        style={{
          backgroundColor: "#6a5acd",
          borderRadius: "4px",
        }}
      >
        <span>
          <Button
            onClick={() => {
              editor?.chain().focus().setHeading({ level: 1 }).run();
            }}
          >
            h1
          </Button>
          <Button
            onClick={() => {
              editor?.chain().focus().setHeading({ level: 2 }).run();
            }}
          >
            h2
          </Button>
          <Button
            onClick={() => {
              editor?.chain().focus().setHeading({ level: 3 }).run();
            }}
          >
            h3
          </Button>
          <Button
            onClick={() => {
              editor?.chain().focus().setHeading({ level: 4 }).run();
            }}
          >
            h4
          </Button>
          <Button
            onClick={() => {
              editor?.chain().focus().createCardNode().run();
            }}
          >
            h4
          </Button>
        </span>
      </div>
      <EditorContent editor={editor} className={styles.tiptap} />
    </div>
  );
};

export default Tiptap;
