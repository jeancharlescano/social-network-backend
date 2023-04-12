import { pool } from "../config/database.config.js";

export const createPost = async (req, rep) => {
  const { content, idUser } = req.body;
  try {
    await pool.query(`INSERT INTO post (content, id_user) VALUES ($1, $2)`, [
      content,
      idUser,
    ]);
    return "Done";
  } catch (error) {
    console.log("🚀 ~ file: post.controller.js:7 ~ createPost ~ error:", error);
  }
};

export const getAllPosts = async (req, rep) => {
  try {
    let result = await pool.query("SELECT * FROM posts");
    return result.rows;
  } catch (err) {
    console.log(err);
  }
};

export const getPostById = async (req, rep) => {
  try {
    let result = await pool.query(
      `SELECT id, content, id_user FROM post WHERE id = $1`,
      [req.params.id]
    );
    return result.rows;
  } catch (err) {
    console.log(err);
  }
};

export const updatePostById = async (req, rep) => {
  const { content, idUser } = req.body;

  try {
    pool.query(`UPDATE post SET content = $1, id_user = $2 WHERE id = $3;`, [
      content,
      idUser,
      req.params.id,
    ]);
    return "Done";
  } catch (err) {
    console.log(err);
  }
};

export const deletePostById = async (req, rep) => {
  try {
    pool.query(`DELETE FROM post WHERE id = $1;`, [req.params.id]);
    return "Done";
  } catch (err) {
    console.log(err);
  }
};
