# iCommerce
Backend services for a simple ecommerce website using Node.js

## CURL commands for testing

```bash
curl -X POST \
  -H "Content-Type: application/json" \
  -d '{ "query": "{ products(page: 1, perPage: TEN) { id name price createdAt updatedAt category { id name createdAt updatedAt } } }" }' \
  http://localhost:8080/graphql | json_pp
```

```bash
curl -X POST \
  -H "Content-Type: application/json" \
  -d '{ "query": "{ products(page: 1, perPage: FIVE, categoryId: 1) { id name price createdAt updatedAt category { id name createdAt updatedAt } } }" }' \
  http://localhost:8080/graphql | json_pp
```

```bash
curl -X POST \
  -H "Content-Type: application/json" \
  -d '{ "query": "{ products(page: 1, perPage: FIVE, categoryId: 1, sortBy: NAME_ASC) { id name price createdAt updatedAt category { id name createdAt updatedAt } } }" }' \
  http://localhost:8080/graphql | json_pp
```

```bash
curl -X POST \
  -H "Content-Type: application/json" \
  -d '{ "query": "{ products(page: 1, perPage: FIVE, categoryId: 1, sortBy: NAME_DESC) { id name price createdAt updatedAt category { id name createdAt updatedAt } } }" }' \
  http://localhost:8080/graphql | json_pp
```

```bash
curl -X POST \
  -H "Content-Type: application/json" \
  -d '{ "query": "{ products(page: 1, perPage: FIVE, categoryId: 1, sortBy: PRICE_ASC) { id name price createdAt updatedAt category { id name createdAt updatedAt } } }" }' \
  http://localhost:8080/graphql | json_pp
```

```bash
curl -X POST \
  -H "Content-Type: application/json" \
  -d '{ "query": "{ products(page: 1, perPage: FIVE, categoryId: 1, sortBy: PRICE_DESC) { id name price createdAt updatedAt category { id name createdAt updatedAt } } }" }' \
  http://localhost:8080/graphql | json_pp
```

```bash
curl -X POST \
  -H "Content-Type: application/json" \
  -d '{ "query": "{ products(page: 1, perPage: FIVE, categoryId: 1, sortBy: CREATED_DATE_ASC) { id name price createdAt updatedAt category { id name createdAt updatedAt } } }" }' \
  http://localhost:8080/graphql | json_pp
```

```bash
curl -X POST \
  -H "Content-Type: application/json" \
  -d '{ "query": "{ products(page: 1, perPage: TWENTY, nameTerm: \"abcda\") { id name price createdAt updatedAt category { id name createdAt updatedAt } } }" }' \
  http://localhost:8080/graphql | json_pp
```

```bash
curl -X POST \
  -H "Content-Type: application/json" \
  -d '{ "query": "{ products(page: 1, perPage: TEN, nameTerm: \"Nokia\") { id name price createdAt updatedAt category { id name createdAt updatedAt } } }" }' \
  http://localhost:8080/graphql | json_pp
```

```bash
curl -X POST \
  -H "Content-Type: application/json" \
  -d '{ "query": "{ products(page: 1, perPage: FIFTHTEEN, nameTerm: \"ryzen\") { id name price createdAt updatedAt category { id name createdAt updatedAt } } }" }' \
  http://localhost:8080/graphql | json_pp
```
