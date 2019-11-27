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
	const element = document.createElement('button');
	element.innerText = '0';
	//element.onclick((that) => that.innerText + 1);

	//element.onclick = (event) => {
	//	event.target.innerText++;
	//}

	element.addEventListener('click', event => event.target.innerText++);
	element.addEventListener('click', event => console.log(event.target.innerText));

	return element;
  }
  document.body.appendChild(getCounter());
  
