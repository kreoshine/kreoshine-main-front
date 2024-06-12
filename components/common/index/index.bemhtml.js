block('index')(
  tag()('main'),
  content()(function() {
    return [
      {
        block: 'intro',
      },
      {
        block: 'poster',
      },
      {
        block: 'advantages',
      },
    ]
  })
)
