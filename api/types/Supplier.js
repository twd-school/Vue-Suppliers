const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLBoolean,
    GraphQLFloat
} = require('graphql');

module.exports = new GraphQLObjectType({
    name: 'Supplier',
    fields: {
        name: { type: GraphQLString },
        checkedAt: { type: GraphQLString },
        status: { type: GraphQLBoolean },
        latitude: { type: GraphQLFloat },
        longitude: { type: GraphQLFloat }
    }
})