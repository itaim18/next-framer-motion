import React from "react";

async function BlogPostPage({ params }: any) {
  return (
    <article>
      <div>
        <h1 className="mt-64">{params.postSlug}</h1>
      </div>
    </article>
  );
}

export default BlogPostPage;
