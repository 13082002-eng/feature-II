import {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct
} from "../services/products.service.js";

// GET /api/products
export const getProducts = async (req, res, next) => {
  try {
    const products = await getAllProducts();

    res.json({
      ok: true,
      data: products
    });

  } catch (err) {
    next(err);
  }
};

// GET /api/products/:id
export const getProduct = async (req, res, next) => {
  try {
    const id = req.params.id;

    const product = await getProductById(id);

    if (!product) {
      return res.status(404).json({
        ok: false,
        error: {
          message: "Product not found"
        }
      });
    }

    res.json({
      ok: true,
      data: product
    });

  } catch (err) {
    next(err);
  }
};

// POST /api/products
export const createNewProduct = async (req, res, next) => {
  try {
    const productData = {
  ...req.body,
    price: parseFloat(req.body.price),
    stock: parseInt(req.body.stock)
};

    // Si se ha subido una imagen a Cloudinary
    if (req.file) {
      productData.imageUrl = req.file.path;
    }

    const product = await createProduct(productData);

    res.status(201).json({
      ok: true,
      data: product
    });

  } catch (err) {
    next(err);
  }
};

// PUT /api/products/:id
export const updateExistingProduct = async (req, res, next) => {
  try {
    const id = req.params.id;

    const product = await updateProduct(id, req.body);

    res.json({
      ok: true,
      data: product
    });

  } catch (err) {
    next(err);
  }
};

// DELETE /api/products/:id
export const deleteExistingProduct = async (req, res, next) => {
  try {
    const id = req.params.id;

    const product = await deleteProduct(id);

    res.json({
      ok: true,
      data: product
    });

  } catch (err) {
    next(err);
  }
};