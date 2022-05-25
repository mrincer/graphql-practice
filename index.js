import { gql, ApolloServer } from "apollo-server"
const people = [
    {
        name:'Elmer A. Menke',
        phone:'724-839-9373',
        street:'2587 Platinum Drive',
        city:'Bobtown',
        id:'4474cc33-e0cf-4d27-bb07-ccc28c3be0c6'
    },
    {
        name:'Ruth B. Hartsfield',
        phone:'310-708-2134',
        street:'3430 Jett Lane',
        city:'Los Angeles',
        id:'10ebbebd-2ea1-4a61-ba0f-82aaadbb3118'
    },
    {
        name:'Rodney C. Schwan',
        phone:'916-647-0228',
        street:'639 Highland View Drive',
        city:'Roseville',
        id:'32af44d3-ed52-4fc2-a200-181db4a8ae91'
    },
    {
        name:'Randall L. Small',
        phone:'412-327-2727',
        street:'3865 Jacobs Street',
        city:'Crafton',
        id:'20cfd1d1-e4f9-4df5-a467-79fd631b920d'
    }
]

const typeDefinitions= gql`
    type Person {
        name: String!
        phone: String
        street: String!
        city: String!
        id: ID!
    }
    type Query {
        personCount: Int!
        allPerson  : [Person]!
    }
`


const resolvers = {
    Query: {
        personCount: () => people.length,
        allPerson: () => people
    }
}


const server =  new ApolloServer({
    typeDefs : typeDefinitions,
    resolvers
})


server.listen().then(({ url }) => {
    console.log('Server Ready at ' + url);
})

