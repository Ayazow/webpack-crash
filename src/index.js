function component(){
	const element = document.createElement('div');
	const array = ['Hello', 'webpack']
        element.innnerHTML = array.join(' ')
	return element;
}

document.body.appendChild(component());
