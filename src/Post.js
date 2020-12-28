function Post(title) {
  this.title = title;
  this.date = new Date();

  this.toString = function () {
    return `Пост: ${this.title} Дата создания: ${this.date}`;
  };
}

export default Post;
