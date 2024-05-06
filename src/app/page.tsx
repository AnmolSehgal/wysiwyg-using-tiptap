"use client";
import Tiptap from "./Components/Tiptap/Tiptap";
import styles from "./page.module.css";

export default function Page() {
  return (
    <>
      <div
        style={{ height: "48px", width: "100%", backgroundColor: "#6a5acd" }}
      >
        <div>{"Editor"}</div>
      </div>
      <main className={styles.main}>
        <Tiptap />
      </main>
    </>
  );
}
