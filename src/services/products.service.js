import prisma from "../config/prismaClient.js";

// Devuelve todos los productos
export const getAllProducts = async () => {
  return await prisma.product.findMany();
};

// Busca un producto por su ID
export const getProductById = async (id) => {
  return await prisma.product.findUnique({
    where: { id }
  });
};

// Crea un nuevo producto
export const createProduct = async (data) => {
  return await prisma.product.create({
    data
  });
};

// Actualiza un producto existente
export const updateProduct = async (id, data) => {
  return await prisma.product.update({
    where: { id },
    data
  });
};

// Elimina un producto
export const deleteProduct = async (id) => {
  return await prisma.product.delete({
    where: { id }
  });
};