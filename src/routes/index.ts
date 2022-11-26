const HOME = "/home";
const BLOG = "/blog";
const PROJECT = "/project";
export const Blogs = ["qianduan", "guidang"];
export const Projects = ["item1"];
export const Routemap = new Map();
const Routes = () => {
  Routemap.set("home", HOME);

  Blogs.forEach((name: string) => {
    Routemap.set(name, BLOG + "/" + name);
  });
  Projects.forEach((name: string) => {
    Routemap.set(name, PROJECT + "/" + name);
  });
  return;
};
Routes();
