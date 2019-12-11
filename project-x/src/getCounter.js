export function getCounter() {
  // Из этого файла getCounter доступна другим.ы
  const elementDiv = document.createElement("div");

  const elementButtonCounter = document.createElement("button");
  elementButtonCounter.innerText = "0";

  const elementButtonConsole = document.createElement("button");
  elementButtonConsole.innerText = "on";

  elementDiv.appendChild(elementButtonCounter);
  elementDiv.appendChild(elementButtonConsole);

  elementButtonCounter.addEventListener(
    "click",
    event => event.target.innerText++
  );
  const loger = event => console.log(event.target.innerText);
  elementButtonCounter.addEventListener("click", loger);

  function adder() {
    elementButtonCounter.innerText++;
  }

  let intervalId;

  elementButtonConsole.addEventListener("click", () => {
    if (elementButtonConsole.innerText == "on") {
      elementButtonCounter.removeEventListener("click", loger);
      elementButtonConsole.innerText = "off";
      intervalId = setInterval(adder, 500);
    } else {
      elementButtonCounter.addEventListener("click", loger);
      elementButtonConsole.innerText = "on";
      clearInterval(intervalId);
    }
  });

  return elementDiv;
}
export const hello = "hello";
