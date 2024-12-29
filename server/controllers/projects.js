const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with React and Node.js",
    imageUrl: "https://images.unsplash.com/photo-1557821552-17105176677c",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    githubUrl: "#",
    liveUrl: "#"
  },
];

export const getProjects = (req, res) => {
  res.json(projects);
};