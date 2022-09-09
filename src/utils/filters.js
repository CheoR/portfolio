export const filterProjects = (data) => {
  const filtered = (searchTerm) =>
    data.filter((obj) =>
      obj.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  return filtered;
};

export const filterBlogs = (data) => {
  const filtered = (searchTerm) =>
    data.filter((obj) =>
      obj.body.toLowerCase().includes(searchTerm.toLowerCase())
    );
  return filtered;
};
