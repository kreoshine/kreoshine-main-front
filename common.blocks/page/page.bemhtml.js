block('page').content()(function() {
  return {
    elem: 'inner',
    content: applyNext()
  };
});

block('page').mods()(
  {'theme': true}
);