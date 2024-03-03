## kreoshine-main-front

### Description
Node JS application for creation static files (.html/.css/.js) based on
- [BEM methodology](https://en.bem.info/methodology/)
- [**BEM classic stack**](https://en.bem.info/technologies/classic/)

There are two type of **bundles** _(build files)_ for different devices:
- **desktop**
- **mobile**

#### _Project structure_
The current project has some changes in the file structure relative to the default one:
- bundles are grouped into the appropriate directory and subdirectories have simplified names

  (e.g. instead of `desktop.bundles`
  there will be `bundles/desktop`)

- blocks are grouped into the appropriate directory and subdirectories have simplified names

  (e.g. instead of `desktop.blocks` and `design/desktop.blocks`
  there will be `blocks/desktop` and `blocks/design/desktop` respectively)

- `blocks/lib` contains blocks for **overriding library blocks**
- `blocks/var` contains the **definition of CSS variables** that are used in the project

### Installation

1. Clone the repository.
```bash
git clone git@github.com:kreoshine/kreoshine-main-front.git kreoshine-main-front
```
2. Install dependencies.
(_note:_ do not use superuser rights (`root`) when installing npm dependencies.)
```bash
cd kreoshine-main-front  && npm install
```

3. Allow not specifying the path to the executable file
(_note:_ it is a good solution to define the necessary commands in `~/.bashrc` file)
```bash
export PATH=./node_modules/.bin:$PATH
```

### Development

#### Some useful command:

- ###### start the development server
(_note_: by default on port 8080, add `-- --port=8181` to the command for another port usage)
```bash
npm start
```


- ###### create new blocks
(_note:_ settings from `.bemrc` will be used)
```bash
bem create new-block
```
see [bem-tools-create](https://github.com/bem-tools/bem-tools-create/blob/master/README.md) for more info)

- ###### create new pages
create them manually for each bundle's groups with `.bemhtml.js` extension
