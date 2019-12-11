import { join } from "lodash";
import {
  getCounter as getCounterFunction,
  hello as helloString
} from "./getCounter";
import svgImage from "./410.svg";

function getComponent() {
  console.log(svgImage);
  const element = document.createElement("div");
  // Lodash, currently included via a script, is required for this line to work
  // inner - это встраивание между <div> и </div>
  // lodash - библиотека для работы с массивами.
  // npx webpack для старта сборки.
  element.innerHTML = join([helloString, `webpack ${helloString}`], " ");

  return element;
}

function getImage() {
  const element = document.createElement("img");
  element.src = svgImage;
  element.style.height = "50px";
  element.style.width = "50px";
  element.style.margin = "30px";
  return element;
}

document.body.appendChild(getComponent());

document.body.appendChild(getCounterFunction());

document.body.appendChild(getImage());
