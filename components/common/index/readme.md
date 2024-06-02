***
Current directory keeps contents for `index` page
***

### File structure explanation
File `.enb/make.js` should contain both of levels 
- components/common
- components/common/index

So `components/common` will include block `index` (current directory name)
with all described files for it (index.bemhtml.js, index.deps.js etc.)

Directory `components/common/index` contains blocks related to index page content


**Warning**: it is necessary to ensure the uniqueness of names for all blocks —
all directory names from the index directory should no longer be used in places other than similar ones
