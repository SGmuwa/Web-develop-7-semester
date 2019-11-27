import _ from 'lodash';
import * as getCounterModule from './getCounter'

function getComponent() {
	const element = document.createElement('div');
  
	// Lodash, currently included via a script, is required for this line to work
	// inner - это встраивание между <div> и </div>
	// lodash - библиотека для работы с массивами.
	// npx webpack для старта сборки.
	element.innerHTML = _.join([getCounterModule.hello, 'webpack'], ' ');
  
	return element;
}
document.body.appendChild(getComponent());


document.body.appendChild(getCounterModule.getCounter());
  
