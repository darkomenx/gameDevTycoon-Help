let expect = chai.expect

it('basic', function()
{
	expect(1*2).to.be.equal(2)
})

it('basic-div', function()
{
	let div = $('<div></div>')
	div.append('toto le salaud')

	expect(div.text()).to.be.equal('toto le salaud')
})
