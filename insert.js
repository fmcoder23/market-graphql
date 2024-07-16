const { prisma } = require("./src/utils/connection")

const insertData = async () => {
    await prisma.users.createMany({
        data: [
            { fullname: 'John Doe', username: 'johndoe', password: '1234' },
            { fullname: 'Jane Parker', username: 'janeparker', password: '1234' },
            { fullname: 'Will Smith', username: 'willsmith', password: '1234' },
            { fullname: 'Tony Papper', username: 'tonypepper', password: '1234' },
        ]
    });

    const users = await prisma.users.findMany();

    for (const user of users) {
        await prisma.carts.create({
            data: {
                user_id: user.id,
            }
        });
    }

    const carts = await prisma.carts.findMany();

    await prisma.products.createMany({
        data: [
            { name: "iPhone 16 Pro", price: 1299.99, cart_id: carts[0].id },
            { name: "Airpods", price: 50.89, cart_id: carts[0].id },
            { name: "Macbook Pro", price: 12300, cart_id: carts[0].id },
            { name: "Samsung S70", price: 2300, cart_id: carts[1].id },
            { name: "Vision Pro", price: 5199.99, cart_id: carts[1].id },
            { name: "HP Spectre x360", price: 3128.99, cart_id: carts[2].id }
        ]
    });
}

insertData();
