import prisma from "../config/prismaClient.js";

// Obtener o crear carrito activo
export const getOrCreateCart = async (userId) => {
  let cart = await prisma.cart.findFirst({
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

  if (!cart) {
    cart = await prisma.cart.create({
      data: {
        userId,
      },
      include: {
        items: true,
      },
    });
  }

  return cart;
};

// Añadir producto al carrito
export const addItemToCart = async (
  userId,
  productId,
  quantity
) => {
  const cart = await getOrCreateCart(userId);

  const existingItem = await prisma.cartItem.findFirst({
    where: {
      cartId: cart.id,
      productId,
    },
  });

  if (existingItem) {
    return prisma.cartItem.update({
      where: {
        id: existingItem.id,
      },
      data: {
        quantity: existingItem.quantity + quantity,
      },
    });
  }

  return prisma.cartItem.create({
    data: {
      cartId: cart.id,
      productId,
      quantity,
    },
  });
};

// Eliminar item
export const removeItemFromCart = async (itemId) => {
  return prisma.cartItem.delete({
    where: {
      id: itemId,
    },
  });
};