import { pool } from "../config/database.config.js";

export const createUser = async (req, rep) => {
  const { firstname, lastname, email, mobile, password, dateofbirth, gender } =
    req.body;
  try {
    await pool.query(
      `INSERT INTO "user" (firstname, lastname, email, mobile, password, dateofbirth, gender) VALUES ($1, $2, $3, $4, $5, $6, $7)`,
      [firstname, lastname, email, mobile, password, dateofbirth, gender]
    );
    return "Done";
  } catch (error) {
    console.log("🚀 ~ file: user.controller.js:7 ~ createUser ~ error:", error);
  }
};

export const getAllUsers = async (_req, _rep) => {
  try {
    let result = await pool.query(`SELECT * FROM "user"`);
    return result.rows;
  } catch (error) {
    console.log(
      "🚀 ~ file: user.controller.js:5 ~ getAllUsers ~ error:",
      error
    );
  }
};

export const getUserById = async (req, rep) => {
  try {
    let result = await pool.query(
      `SELECT id, firstname, lastname, email, mobile, dateofbirth, gender FROM "user" WHERE id = $1`,
      [req.params.id]
    );
    return result.rows;
  } catch (error) {
    console.log(
      "🚀 ~ file: user.controller.js:5 ~ getAllUsers ~ error:",
      error
    );
  }
};

export const updateUserById = async (req, rep) => {
  const { firstname, lastname, email, mobile, dateofbirth, gender } = req.body;

  try {
    pool.query(
      `UPDATE "user" SET firstname = $1, lastName = $2, email = $3, mobile = $4, dateofbirth = $5, gender = $6 WHERE id = $7;`,
      [firstname, lastname, email, mobile, dateofbirth, gender, req.params.id]
    );
    return "Done";
  } catch (error) {
    console.log(
      "🚀 ~ file: user.controller.js:51 ~ updateUserById ~ error:",
      error
    );
  }
};

export const deleteUserById = async (req, rep) => {
  try {
    pool.query(`DELETE FROM "user" WHERE id = $1`, [req.params.id]);
    return "Done";
  } catch (error) {
    console.log(
      "🚀 ~ file: user.controller.js:51 ~ updateUserById ~ error:",
      error
    );
  }
};
