const express = require("express");
const router = express.Router();
const { authMiddleware } = require("../middleware/auth");
const paymentService = require("../services/paymentService");

router.get("/:orderId/status", authMiddleware, async (req, res) => {
  try {
    const status = await paymentService.checkPaymentStatus(req.params.orderId);
    res.json({ paymentStatus: status });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
