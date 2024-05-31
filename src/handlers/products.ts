import prisma from "../db";

export const getProducts = async (req, res) => {
    const user = await prisma.user.findUnique ({
        where: {
            id: req.user.id
        },
        include: {
            products: true
        }
    });

    res.json({data: user.products})
}

export const getProduct = async (req, res) => {
    const id = req.params.id;

    const product = await prisma.product.findFirst({
        where: {
            id,
            belongsToId: req.user.id
        }
    });

    if (!product) {
        res.status(404).json({error: 'Product not found'});
    }

    res.json({data: product});
}
export const createProduct = async (req, res) => {
    const product = await prisma.product.create({
        data: {
            name: req.body.name,
            belongsToId: req.user.id
        }
    });

    res.status(201).json({data: product});
};