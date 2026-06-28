import prisma from "../config/prismaClient.js";

export const checkout = async (userId) => {
  // Buscar carrito activo
  const cart = await prisma.cart.findFirst({
    where: {
      userId,
      status: "ACTIVE",
    },
    include: {
      items: {
        include: {
          product: true,
        },
      },
    },
  });

  if (!cart || cart.items.length === 0) {
    throw new Error("El carrito está vacío");
  }

  // Calcular total
  const total = cart.items.reduce((acc, item) => {
    return acc + item.product.price * item.quantity;
  }, 0);

  // Crear pedido
  const order = await prisma.order.create({
    data: {
      userId,
      total,
      items: {
        create: cart.items.map((item) => ({
          productId: item.productId,
          quantity: item.quantity,
          priceAtPurchase: item.product.price,
        })),
      },
    },
    include: {
      items: true,
    },
  });

  // Marcar carrito como completado
  await prisma.cart.update({
    where: {
      id: cart.id,
    },
    data: {
      status: "CHECKED_OUT",
    },
  });

  return order;
};