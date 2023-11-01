"use client";
import React from "react";

function Form() {
    
  return (
    <main className="flex flex-wrap min-h-screen content-start justify-center p-20">
      <form className="w-1/2 p-10 border-2 rounded-lg shadow-lg flex flex-col">
        <div>
          <input
            type="file"
            name="article_photo"
            className="p-5"
            accept=".jpg, .png"
            required
          />
        </div>
        <div>
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="article_name_label"
          >
            Article Title
          </label>
          <input
            name="article_name"
            type="text"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
            id="article_name_label"
            placeholder="Article Title"
            required
          />
        </div>
        <div>
          <label
            htmlFor="article_detail_label"
            className="block text-gray-700 text-sm font-bold my-2"
          >
            Description
          </label>
          <textarea
            name="article_detail"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
            id="article_detail_label"
            placeholder="Description"
            required
          />
        </div>
        <button type="submit" className="border rounded-lg border-1 self-center text-white bg-black px-5 py-2">
          Post
        </button>
      </form>
    </main>
  );
}

export default Form;
