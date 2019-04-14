import React from "react";

/**
 *
 * Use this component to add additional pages outside of your blog, like an "About Me" section
 */
const Page = ({ title, children }) => (
  <div>
    <h2>{title}</h2>
    {children}
  </div>
);

export default Page;
