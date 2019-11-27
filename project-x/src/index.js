import _ from 'lodash';

function getComponent() {
	const element = document.createElement('div');
  
	// Lodash, currently included via a script, is required for this line to work
	// inner - это встраивание между <div> и </div>
	// lodash - библиотека для работы с массивами.
	// npx webpack для старта сборки.
	element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  
	return element;
  }
  document.body.appendChild(getComponent());

  function getCounter() {
	const elementDiv = document.createElement('div');

	const elementButtonCounter = document.createElement('button');
	elementButtonCounter.innerText = '0';
	
	const elementButtonConsole = document.createElement('button');
	elementButtonConsole.innerText = 'on';

	elementDiv.appendChild(elementButtonCounter);
	elementDiv.appendChild(elementButtonConsole);

	elementButtonCounter.addEventListener('click', event => event.target.innerText++);
	const loger = event => console.log(event.target.innerText);
	elementButtonCounter.addEventListener('click', loger);

	elementButtonConsole.addEventListener('click', () => {
		if(elementButtonConsole.innerText == 'on') {
			elementButtonCounter.removeEventListener('click', loger);
			elementButtonConsole.innerText = 'off';
		} else {
			elementButtonCounter.addEventListener('click', loger);
			elementButtonConsole.innerText = 'on';
		}
	});

	return elementDiv;
  }
  document.body.appendChild(getCounter());
  
