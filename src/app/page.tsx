"use client";
import Tiptap from "./Components/Tiptap/Tiptap";
import styles from "./page.module.css";

export default function Page() {
  return (
    <>
      <div
        style={{
          height: "48px",
          width: "100%",
          backgroundColor: "#6a5acd",
          fontSize: 32,
          lineHeight: 1.5,
          color: "white",
          fontFamily: "cursive",
        }}
      >
        <div style={{ marginLeft: "4px" }}>{"Editor"}</div>
      </div>
      <main className={styles.main}>
        <Tiptap />
      </main>
    </>
  );
}
