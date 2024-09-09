import { pool } from "../db.js";

export const getBelts = async (req, res) => {
  try {
    const [rows] = await pool.query("select * from pkbelts;");
    res.json(rows);
  } catch {
    res.status(500).json("Algo ha salido mal");
  }
};

export const getOneHeros = async (req, res) => {
  try {
    const [rows] = await pool.query("select * from pkbelts where id = (?);", [
      req.params.id,
    ]);

    if (rows.length == 0) {
      res.status(404).json({
        message: "pkbelts no Available",
      });
    }

    res.json(rows[0]);
  } catch {
    res.status(500).json("Algo ha salido mal");
  }
};

export const pushHeros = async (req, res) => {
  try {
    const { belt, price, stock } = req.body;
    const [rows] = await pool.query(
      "insert into pkbelts (belt, price, stock) values (?, ?, ?)",
      [belt, price, stock]
    );
    res.send({ id: rows.insertId, belt: belt, price: price, stock: stock });
  } catch {
    res.status(500).json("Algo ha salido mal");
  }
};

export const patchHeros = async (req, res) => {
  try {
    const id = req.params.id;
    const { belt, price, stock } = req.body;

    const [result] = await pool.query(
      "update pkbelts set belt = ifnull(?, belt), price= ifnull(?, price), stock= ifnull(?, stock) where id = ?",
      [belt, price, stock, id]
    );
    if (result.affectedRows <= 0) {
      res.json("Error al actualizar");
    } else {
      res.json("¡Actualizado!");
    }
  } catch {
    res.status(500).json("Algo ha salido mal");
  }
};

export const deleteHeros = async (req, res) => {
  try {
    const [result] = await pool.query("delete from pkbelts where id = (?)", [
      req.params.id,
    ]);
    if (result.affectedRows <= 0) {
      res.status(404).json({
        mensaje: "Error al borrar Héroe",
      });
    } else {
      res.json({
        mensaje: "Borrado éxitoso",
      });
    }
  } catch {
    res.status(500).json("Algo ha salido mal");
  }
};

export const deleteAll = async (req, res) => {
  try {
    const [result] = await pool.query("delete from pkbelts");
    res.json(result);
  } catch (error) {
    console.log(error);
  }
};
