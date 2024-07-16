module.exports = `#graphql
    type User {
        id: ID!
        fullname: String!
        username: String!
        password: String!
        cart: [Cart]!
    }

    type Cart {
        id: ID!
        user: User!
        products: [Product]!
    }
    
    type Product {
        id: ID!
        name: String!
        price: Float!
        cart: Cart!
    }

    type Query {
        getAllUsers: [User!]!
        getAllCarts: [Cart!]!
        getAllProducts: [Product!]!
        getUser(id: ID!): User!
        getCart(id: ID!): Cart!
        getProduct(id: ID!): Product!
    }
`
