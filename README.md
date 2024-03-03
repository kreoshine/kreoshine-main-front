## kreoshine-main-front

Node JS application for creation static files (.html/.css/.js)

Current project is based on
- [BEM methodology](https://en.bem.info/methodology/)
- [**BEM classic stack**](https://en.bem.info/technologies/classic/)

### Project structure
The current project has some changes in the file structure relative to the default one:

1. ### `bundles`
Contains files that will be used for the build.
There are two types of **builds** for different devices:
- **desktop**
- **mobile**

Bundles are grouped into the appropriate directory
and subdirectories for the build type have simplified names
(e.g. instead of `desktop.bundles` there will be `bundles/desktop`)

2. ### `components`
Current directory is responsible for the basic definition of the blocks

Blocks are grouped into the appropriate directories with own names
and subdirectories have simplified names
(e.g. instead of `common.blocks` and `design/common.blocks`
there will be `components/common` and `design/common` respectively)

3. ### `design`
Current directory defines the theme (color, text size, fonts, etc.)
and should contain mostly CSS

4. ### `components/lib`
This directory is created for **overriding library blocks**

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
_note_: by default on port 8080, add `-- --port=8181` to the command for another port usage
```bash
npm start
```


- ###### create new blocks
_note:_ settings from `.bemrc` will be used
```bash
bem create new-block
```
see [bem-tools-create](https://github.com/bem-tools/bem-tools-create/blob/master/README.md) for more info)

- ###### create new pages
_note:_ template from `.bem/templates/bemjson.js` will be used (but create a new page for each build type: desktop, mobile, etc.)
```bash
bem create -b new-page -l bundles/desktop -t bemjson.js
```
