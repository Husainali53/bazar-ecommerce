const Order = require("../models/Order");

exports.createOrder = async (data) => {
  const order = await Order.create({
    userId: data.userId,
    sellerId: data.sellerId,
    products: data.products,
    amount: data.amount,
    totalAmount: data.totalAmount,
    platformFee: data.platformFee,
    shippingDetails: data.shippingDetails,
    paymentMethod: data.paymentMethod,
    status: "pending",
    paymentStatus: "held"
  });
  return order;
};

exports.updateStatus = async (orderId, status) => {
  return await Order.findByIdAndUpdate(orderId, { status }, { new: true });
};

exports.getOrdersByUser = async (userId) => {
  return await Order.find({ userId }).sort({ createdAt: -1 });
};

exports.getOrdersBySeller = async (sellerId) => {
  return await Order.find({ sellerId }).sort({ createdAt: -1 });
};

exports.cancelOrder = async (orderId) => {
  return await Order.findByIdAndUpdate(
    orderId,
    { status: "cancelled", paymentStatus: "refunded", cancelledAt: new Date() },
    { new: true }
  );
};
