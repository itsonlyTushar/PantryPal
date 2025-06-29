import express from "express";
import {
  getItems,
  getItem,
  createItem,
  updateItem,
  deleteItem,
  getExpiringItems,
} from "../controllers/itemController.js";

const router = express.Router();

router.get("/", getItems);
router.get("/expiring", getExpiringItems);
router.get("/:id", getItem);
router.post("/", createItem);
router.put("/:id", updateItem);
router.delete("/:id", deleteItem);

export default router;
