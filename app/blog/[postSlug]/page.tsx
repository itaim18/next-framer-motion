import React from "react";

import { loadBlogPost } from "../../../src/helpers/file-helper";

async function BlogPostPage({ params }: any) {
  const { content } = await loadBlogPost("about");

  return (
    <article>
      <div>
        <h1 className="mt-64">{params.postSlug}</h1>
      </div>
    </article>
  );
}

export default BlogPostPage;
