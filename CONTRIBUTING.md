# Contributing

## 1. Install Visual Studio

[Install Visual Studio on Windows](https://visualstudio.microsoft.com/thank-you-downloading-visual-studio/?sku=Community&channel=Release&version=VS2022&source=VSLandingPage&passive=false)

[Install VS Code on Mac/Linux](https://code.visualstudio.com/#alt-downloads)

<br>

## 2. Clone

```
git clone https://github.com/pcc-csc/ecommerce-site.git
cd ecommerce-site
```

<br>

## 3. Install Node

[Install Node](https://nodejs.org/en/download/)

or

```
brew install node
```

<br>

## 4. Install yarn

[Install Yarn](https://classic.yarnpkg.com/en/docs/install)

<br>

## 5. Open the repository in Visual Studio

### Should get a prompt to "install the recommended extensions for this repository"

- click install

<br>
What am I agreeing to install?

- [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
- [Prettier Code Formatting](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [ESlint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)
- Check the [`package.json`](https://github.com/pcc-csc/ecommerce-site/blob/main/package.json)
  file for a list of dependencies

<br>

## 6. Install dependencies

```
yarn install
```

Dependancies are listed in [`package.json`](https://github.com/pcc-csc/ecommerce-site/blob/main/package.json)

<br>

## 7. Run

```
yarn serve
```

Scripts are listed in [`package.json`](https://github.com/pcc-csc/ecommerce-site/blob/main/package.json)

---

## Dev help

### Fix errors

```
yarn lint
```

### Docs

- [Vue](https://vuejs.org/v2/guide/)
- [Bulma](https://bulma.io/documentation/)
