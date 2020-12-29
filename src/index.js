import "./styles/style.css";
import jsonFile from "./assets/jsonFile.json";
import img from "./assets/images/iphone.jpg";

import Post from "./Post.js";

let post = new Post("Пост №1");

console.log(post.toString());

console.log(jsonFile);

console.log(img);
