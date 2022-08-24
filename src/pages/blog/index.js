import React, { useRef, useState } from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout/Layout";
import Card from "./Card";

import * as styles from "../../components/Gallery/gallery.module.css";

const Blog = ({ data }) => {
  const BLOGS = data.allMdx.nodes;

  const inputField = useRef();
  const [filteredData, setFilteredData] = useState(BLOGS);
  const searchItems = (searchTerm) => {
    if (!searchTerm) {
      setFilteredData(BLOGS);
    }
    const filteredData = BLOGS.filter(
      (project) => true // project.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    if (filteredData.length) {
      setFilteredData(filteredData);
    } else {
      setFilteredData([]);
    }
  };

  return (
    <Layout pageTitle="My Blog Posts">
      <div className={styles.gallery}>
        <div className={styles.gallery__title}>
          <div>Gallery</div>
          {/* <div className={styles.gallery__chipbar}>
          {CHIPS.map((chip, idx) => (
            <Chip key={idx} data={chip} />
          ))}
        </div> */}
          <input
            className={styles.gallery__searchbar}
            value={inputField.value}
            placeholder="Search . . "
            onChange={(e) => searchItems(e.target.value)}
          />
        </div>
        <div className={styles.cards}>
          {filteredData.map((blog) => (
            <Card key={blog.id} data={blog} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(sort: { fields: frontmatter___datePublished, order: DESC }) {
      nodes {
        id
        body
        slug
        frontmatter {
          author
          datePublished(formatString: "MMMM D, YYYY")
          title
        }
      }
    }
  }
`;

export default Blog;
