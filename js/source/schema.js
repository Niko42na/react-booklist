import classification from './classification';

export default [
  {
    id: 'name',
    label: 'Book name',
    show: true,
    sample: 'Dune',
    align: 'center',
  },
  {
    id: 'year',
    label: 'Year',
    type: 'year',
    show: true,
    sample: 1965,
  },
  {
    id: 'genre',
    label: 'Genre',
    type: 'suggest',
    options: classification.genres,
    show: true,
    sample: 'Science fiction',
    align: 'center',
  },
  {
    id: 'rating',
    label: 'Rating',
    type: 'rating',
    show: true,
    sample: 5,
  },
  {
    id: 'comments',
    label: 'Comments',
    type: 'text',
    sample: 'My favorite book',
  },
]

