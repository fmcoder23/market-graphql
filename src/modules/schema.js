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
    type Mutation {
        createUser(details: UserInputs!): User!
        createCart(details: CartInputs!): Cart!
        createProduct(details: ProductInputs!): Product!
    }
    input UserInputs {
        fullname: String!
        username: String!
        password: String!
    }
    input CartInputs {
        userId: ID!
    }
    input ProductInputs {
        name: String!
        price: Float!
        cartId: ID!
    }
`
