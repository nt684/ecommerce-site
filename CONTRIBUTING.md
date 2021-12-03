# Contributing

1. Clone

```sh
git clone https://github.com/owner/repo
cd repo
```

2. Install pnpm

`pnpm` is a package manager like `npm`, but it's more efficient and faster. most `npm` subcommands work in the same way as `pnpm`. (i.e `npm install` == `pnpm install`, etc.)

```sh
npm install -g pnpm
```

3. Install dependencies

```sh
$ pnpm install
```

4. Create a `.env` file

Note that you may need to fill in any empty values

```sh
$ cp .env.example .env
```

5. Run

```sh
$ pnpm start
```
