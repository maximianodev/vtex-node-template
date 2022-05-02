// REST
import { hello } from './REST/hello'
// GRAPHQL
import { book } from './GRAPHQL/book'
import { books } from './GRAPHQL/books'

const resolvers = {
  REST: { hello },
  GRAPHQL: { book, books },
}

export default resolvers
