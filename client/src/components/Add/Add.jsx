import { useState } from "react";

export default function AddBook() {
  const [preview, setPreview] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    console.log("Title:", formData.get("title"));
    console.log("Description:", formData.get("description"));
    console.log("File:", formData.get("file"));
    console.log("Cover:", formData.get("cover"));

    // send to backend
    // fetch("/api/books", {
    //   method: "POST",
    //   body: formData,
    // });
  };

  return (
    <div className="container mt-5">
      <div className="card shadow p-4">
        <h3 className="mb-3">Add Book</h3>

        <form onSubmit={handleSubmit}>
          {/* Title */}
          <div className="mb-3">
            <label className="form-label">Title</label>
            <input
              name="title"
              type="text"
              className="form-control"
              placeholder="Enter book title"
            />
          </div>

          {/* Description */}
          <div className="mb-3">
            <label className="form-label">Description</label>
            <textarea
              name="description"
              className="form-control"
              rows="3"
              placeholder="Enter description"
            />
          </div>

          {/* File (PDF / Book file) */}
          <div className="mb-3">
            <label className="form-label">Book File (PDF)</label>
            <input
              name="file"
              type="file"
              className="form-control"
              accept=".pdf"
            />
          </div>

          {/* Cover Image */}
          <div className="mb-3">
            <label className="form-label">Cover Image</label>
            <input
              name="cover"
              type="file"
              className="form-control"
              accept=".png,.jpg,.jpeg"
              onChange={(e) => {
                const file = e.target.files[0];
                if (file) {
                  setPreview(URL.createObjectURL(file));
                }
              }}
            />
          </div>

          {/* Preview */}
          {preview && (
            <div className="mb-3">
              <p className="mb-1">Preview:</p>
              <img
                src={preview}
                alt="cover preview"
                className="rounded"
                width="150"
              />
            </div>
          )}

          <button type="submit" className="btn btn-warning w-100">
            Add Book
          </button>
        </form>
      </div>
    </div>
  );
}