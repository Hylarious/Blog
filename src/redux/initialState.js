const initialState ={
	categories: [
		{
			id: '1',
			title: 'Sport'
		},
		{
			id: '2',
			title: 'News'
		},
		{
			id: '3',
			title: 'Movies'
		}
	],
	posts: [
		{
      id: '1',
      title: 'Article title',
      shortDescription: 'Short description of the article...',
      content: 'Main content of the article',
      publishedDate: new Date(2022, 2, 2),
      author: 'John Doe',
			category: 'Sport'
		},
		{
			id: '2',
			title: 'Article title 2',
			shortDescription: 'Short description of the article...',
			content: 'Main content of the article',
			publishedDate: new Date('02-03-2022'),
			author: 'John Doe',
			category: 'News'
		},
		{
			id: '3',
			title: 'Article title 3',
			shortDescription: 'Short description of the article...',
			content: 'Main content of the article',
			publishedDate: new Date('02-04-2022'),
			author: 'John Doe',
			category: 'News'
		}
	]
}
export default initialState