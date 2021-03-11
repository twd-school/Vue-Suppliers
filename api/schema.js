const axios = require('axios');

const {
    GraphQLObjectType,
    GraphQLList,
    GraphQLSchema
} = require('graphql');
const Supplier = require('./types/Supplier');

const RootQuery = new GraphQLObjectType({
    name: 'RootQuery',
    fields: {
        suppliers: {
            type: new GraphQLList(Supplier),
            resolve(parent, args) {
                return axios.get('https://api-suppliers.herokuapp.com/api/suppliers')
                    .then(res => res.data);
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery,
});