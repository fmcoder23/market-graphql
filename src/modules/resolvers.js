const { prisma } = require("../utils/connection")

const resolvers = {
    Query: {
        getAllUsers: async () => {
            return await prisma.users.findMany({
                select: {
                    id: true,
                    fullname: true,
                    username: true,
                    password: true,
                    cart: {
                        select: {
                            id: true,
                            products: true
                        }
                    }
                }
            });
        },
        getAllCarts: async () => {
            return await prisma.carts.findMany({
                select: {
                    id: true,
                    user: true,
                    products: true
                }
            });
        },
        getAllProducts: async () => {
            return await prisma.products.findMany({
                select: {
                    id: true,
                    name: true,
                    price: true,
                    cart: {
                        select: {
                            id: true,
                            user: true
                        }
                    },
                }
            });
        },
        getUser: async (_, { id }) => {
            return await prisma.users.findUnique({
                where: { id },
                select: {
                    id: true,
                    fullname: true,
                    username: true,
                    password: true,
                    cart: {
                        select: {
                            id: true,
                            products: {
                                select: {
                                    id: true,
                                    name: true,
                                    price: true
                                }
                            }
                        }
                    }
                }
            });
        },
        getCart: async (_, { id }) => {
            return await prisma.carts.findUnique({
                where: { id },
                select: {
                    id: true,
                    user: true,
                    products: {
                        select: {
                            id: true,
                            name: true,
                            price: true
                        }
                    }
                }
            });
        },
        getProduct: async (_, { id }) => {
            return await prisma.products.findUnique({
                where: { id },
                select: {
                    id: true,
                    name: true,
                    price: true,
                    cart: {
                        select: {
                            id: true,
                            user: true
                        }
                    }
                }
            });
        }
    }
}

module.exports = resolvers;
