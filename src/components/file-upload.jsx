import { useState } from "react";

export const FileUpload = () => {
    const [file, setFile] = useState(null);
    const [uploading, setUploading] = useState(false);
    const [extractedText, setExtractedText] = useState("");

    const handleFile = (e) => {
        setFile(e.target.files[0]);
    };

    const uploadFile = async () => {
        if (!file) return;

        const formData = new FormData();
        formData.append("image", file);

        try {
            setUploading(true);
            setExtractedText("Extracting text...");

            const response = await fetch("https://lean-in25.vercel.app/extract-text", {
                method: "POST",
                body: formData,
            });

            if (!response.ok) {
                setExtractedText("Failed to extract text.");
                return;
            }

            const data = await response.json();
            setExtractedText(data.extractedText || "No text found.");
        } catch {
            setExtractedText("Error occurred.");
        } finally {
            setUploading(false);
        }
    };

    return (
        <div>
            <input type="file" onChange={handleFile} accept="image/*" />
            {file && <h2>{file.name}</h2>}

            <button onClick={uploadFile} disabled={uploading}>
                {uploading ? "Uploading..." : "Upload & Extract Text"}
            </button>

            {extractedText && (
                <div>
                    <h3>Extracted Text:</h3>
                    <p>{extractedText}</p>
                </div>
            )}
        </div>
    );
};
