export default class array
{
	createAssociateArray(id)
	{
		switch (id)
		{
			case 1:
				return { "un" : 1, "deux" : 2, "trois": 3 }
			case 2:
				return { 1: 'un', 2: 'deux', 3: 'trois'}
		}
	}

	test1()
	{
		let array = this.createAssociateArray(2)
		// console.log(array['un'])
		console.log(array[1])
	}



}
