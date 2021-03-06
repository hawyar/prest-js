# prest-js

![tests](https://github.com/hawyar/node-esm-starter/actions/workflows/test.yml/badge.svg)

> Isomorphic JavaScript client for [pREST](https://docs.prestd.com/)

## Install

```bash
npm install prest-js
```

## Usage

```js
const { createClient } = require("prest-js");

const client = createClient("<pREST instance url>")
```

### API
```js
const { data, error } = await client.from('weather').select('*') 

if (error) {
	console.error(error)
}

console.log(user)
```

## Testing

Pre-requisite:
- [Docker](https://www.docker.com/)

The `docker-compose.yml` located in the tests directory is used to spin up prestd and postgres services with default values.

1. Start postgres and prestd

```bash
cd tests && docker-compose up
```

2. Run data migration for auth
```bash
docker-compose exec prest prestd migrate up auth
```

3. Create test user 
```bash
docker-compose exec postgres psql -d prest -U prest -c "INSERT INTO prest_users (name, username, password) VALUES ('pREST Full Name', 'prest', MD5('prest'))"
```

4. Run client tests
```bash
npm run test
```

## Build

Using [esbuild](https://esbuild.github.io/) to bundle JS for the browser and Node (ESM and CommonJS). To build for all run:

```bash
npm run build
```

and to target a specific build target run:

- `npm run build:browser`
- `npm run build:esm`
- `npm run build:cjs`

### Build docs

Using [JSDoc](https://jsdoc.app/index.html) for documentation

```bash
npm run build:docs
```

it also includes a local server for previewing the docs.

```bash
npm run serve:docs
```

## Contributing

All contributions are welcome. For major changes, please open an issue.

1. Fork repository
2. Create your feature branch (git checkout -b feature/fooBar)
3. Commit your changes (git commit -am 'Add some fooBar')
4. Push to the branch (git push origin feature/fooBar)
5. Create a new Pull Request

---

For more information visit [pREST docs](https://docs.prestd.com/)




