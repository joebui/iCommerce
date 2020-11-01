const { createTestClient } = require("apollo-server-testing");
const { ApolloServer, gql } = require("apollo-server-express");
const { random, lorem, date } = require("faker");

const typeDefs = require("../type-defs");
const DateTime = require("../shared/datetime-type");

describe("Apollo GraphQL schema", () => {
  const resolvers = {
    DateTime,
    ProductPageSizes: {
      FIVE: 5,
      TEN: 10,
      FIFTHTEEN: 15,
      TWENTY: 20,
    },
    Query: {
      products: jest.fn(() => [
        {
          id: random.number(),
          name: lorem.word(),
          price: random.number(),
          categoryId: random.number(),
          createdAt: date.recent(),
          updatedAt: date.recent(),
        },
      ]),
    },
    Product: {
      category: jest.fn(() => ({
        id: random.number(),
        name: lorem.word(),
      })),
    },
  };
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });
  const { query } = createTestClient(server);

  describe("products query", () => {
    test("should require params for pagination", async () => {
      const PRODUCTS = gql`
        {
          products {
            id
          }
        }
      `;
      const res = await query({ query: PRODUCTS });
      expect(res).toHaveProperty("errors");
    });

    test("should return basic attributes of products", async () => {
      const PRODUCTS = gql`
        query products($page: Int!, $perPage: ProductPageSizes!) {
          products(page: $page, perPage: $perPage) {
            id
            name
            price
            categoryId
            createdAt
            updatedAt
          }
        }
      `;
      const res = await query({
        query: PRODUCTS,
        variables: { page: random.number(), perPage: "FIVE" },
      });

      expect(res.data.products[0]).toHaveProperty("id");
      expect(res.data.products[0]).toHaveProperty("name");
      expect(res.data.products[0]).toHaveProperty("price");
      expect(res.data.products[0]).toHaveProperty("categoryId");
      expect(res.data.products[0]).toHaveProperty("createdAt");
      expect(res.data.products[0]).toHaveProperty("updatedAt");
    });

    test("should allow filtering and sorting", async () => {
      const PRODUCTS = gql`
        query products(
          $page: Int!
          $perPage: ProductPageSizes!
          $categoryId: Int
          $sortBy: ProductSortByTypes
          $nameTerm: String
        ) {
          products(
            page: $page
            perPage: $perPage
            categoryId: $categoryId
            sortBy: $sortBy
            nameTerm: $nameTerm
          ) {
            id
            name
            price
            categoryId
            createdAt
            updatedAt
          }
        }
      `;
      const res = await query({
        query: PRODUCTS,
        variables: {
          page: random.number(),
          perPage: "FIVE",
          categoryId: random.number(),
          sortBy: "NAME_DESC",
          nameTerm: lorem.word(),
        },
      });

      expect(res.data.products[0]).toHaveProperty("id");
      expect(res.data.products[0]).toHaveProperty("name");
      expect(res.data.products[0]).toHaveProperty("price");
      expect(res.data.products[0]).toHaveProperty("categoryId");
      expect(res.data.products[0]).toHaveProperty("createdAt");
      expect(res.data.products[0]).toHaveProperty("updatedAt");
    });

    test("should require page size in pre-defined sets", async () => {
      const PRODUCTS = gql`
        query products($page: Int!, $perPage: ProductPageSizes!) {
          products(page: $page, perPage: $perPage) {
            id
          }
        }
      `;
      const res = await query({
        query: PRODUCTS,
        variables: {
          page: random.number(),
          perPage: lorem.word(),
        },
      });

      expect(res).toHaveProperty("errors");
    });

    test("should require sort by in pre-defined sets", async () => {
      const PRODUCTS = gql`
        query products(
          $page: Int!
          $perPage: ProductPageSizes!
          $sortBy: ProductSortByTypes
        ) {
          products(page: $page, perPage: $perPage, sortBy: $sortBy) {
            id
          }
        }
      `;
      const res = await query({
        query: PRODUCTS,
        variables: {
          page: random.number(),
          sortBy: lorem.word(),
          perPage: "FIVE",
        },
      });

      expect(res).toHaveProperty("errors");
    });

    test("should only allow pre-defined query params", async () => {
      const PRODUCTS = gql`
        query products(
          $page: Int!
          $perPage: ProductPageSizes!
          $testingParam: Int
        ) {
          products(
            page: $page
            perPage: $perPage
            testingParam: $testingParam
          ) {
            id
          }
        }
      `;
      const res = await query({
        query: PRODUCTS,
        variables: {
          page: random.number(),
          perPage: lorem.word(),
          testingParam: random.number(),
        },
      });

      expect(res).toHaveProperty("errors");
    });

    test("should allow querying category of product", async () => {
      const PRODUCTS = gql`
        query products($page: Int!, $perPage: ProductPageSizes!) {
          products(page: $page, perPage: $perPage) {
            id
            name
            price
            category {
              id
              name
            }
          }
        }
      `;
      const res = await query({
        query: PRODUCTS,
        variables: {
          page: random.number(),
          perPage: "FIVE",
        },
      });

      expect(res.data.products[0]).toHaveProperty("category.id");
      expect(res.data.products[0]).toHaveProperty("category.name");
    });
  });
});
