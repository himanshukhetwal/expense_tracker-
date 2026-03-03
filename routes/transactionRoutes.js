import express from "express";

const router = express.Router();

// Temporary test routes (so you can check Postman works)
router.get("/", (req, res) => {
  res.json({ message: "GET transactions works!" });
});

router.post("/", (req, res) => {
  res.json({ message: "POST transaction works!" });
});

router.delete("/:id", (req, res) => {
  res.json({ message: `DELETE transaction with id ${req.params.id} works!` });
});

export default router;
