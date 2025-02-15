"use client";

import { useEffect, useRef } from "react";
import EditorJS from "@editorjs/editorjs";

interface EditorProps {
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

export default function Editor({ value, onChange, className }: EditorProps) {
  const editorRef = useRef<EditorJS>(null);

  useEffect(() => {
    if (!editorRef.current) {
      const editor = new EditorJS({
        holder: "editor",
        data: value ? JSON.parse(value) : {},
        onChange: async () => {
          const content = await editor.save();
          onChange(JSON.stringify(content));
        },
        tools: {
          header: {
            class: require("@editorjs/header"),
            config: {
              levels: [1, 2, 3],
              defaultLevel: 2,
            },
          },
          paragraph: {
            class: require("@editorjs/paragraph"),
            inlineToolbar: true,
          },
          image: {
            class: require("@editorjs/image"),
            config: {
              uploader: {
                uploadByFile: async (file: File) => {
                  // Implement image upload to your storage
                  return {
                    success: 1,
                    file: {
                      url: URL.createObjectURL(file),
                    },
                  };
                },
              },
            },
          },
          button: {
            class: require("@editorjs/button"),
          },
        },
      });

      editorRef.current = editor;
    }

    return () => {
        if (editorRef.current) {
          editorRef.current.destroy();
          editorRef.current = null; // Change undefined to null
        }
      };
  }, []);

  return <div id="editor" className={className} />;
}