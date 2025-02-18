import { useState } from "react";

export const FileUpload = () => {
    const [file, setFile] = useState(null);
    const [uploading, setUploading] = useState(false);
    const [extractedText, setExtractedText] = useState("");
    const [error, setError] = useState("");

    const handleFile = (e) => {
        setFile(e.target.files[0]);
    };

    const uploadFile = async () => {
        if (!file) {
            setError("Please select a file first.");
            return;
        }

        const formData = new FormData();
        formData.append("image", file); // 🔹 Ensure it matches 'upload.single("image")'

        try {
            setUploading(true);
            setError("");
            setExtractedText("Extracting text...");

            const response = await fetch("https://lean-in25.vercel.app/extract-text", {
                method: "POST",
                body: formData,
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || "Failed to extract text.");
            }

            setExtractedText(data.extractedText);
        } catch (error) {
            console.error("Error:", error);
            setError(error.message);
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

            {error && <p style={{ color: "red" }}>{error}</p>}
            {extractedText && (
                <div>
                    <h3>Extracted Text:</h3>
                    <p>{extractedText}</p>
                </div>
            )}
        </div>
    );
};
