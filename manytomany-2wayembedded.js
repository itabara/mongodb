// Many to Many - Two Way Embedding
// reference Author and Articles
db.authorInfo.insert(
    {
        id: 101,
        name: 'Iulian Tabara',
        articles:[1,2]
    }
)

db.authorInfo.insert(
    {
        id: 102,
        name: 'Emilian Tabara',
        articles:[2]
    }
)

db.articleInfo.insert(
	{
		id:1,
		title:"MongoDB Design",
		categories:["NoSQL"],
		authors:[101,102]
	}
)

db.articleInfo.insert(
	{
		id:2,
		title:"SQL Tunning",
		categories:["SQL"],
		authors:[102]
	}
)