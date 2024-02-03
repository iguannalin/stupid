window.addEventListener("load", () => {
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }
  const container = document.getElementById("container");
  // <input type="range" id="volume" name="volume" min="0" max="11" />
  // <label for="volume">Volume</label>

  const input = document.createElement("input");
  input.type = "range";
  input.min = "0";
  input.max = "1000";

  window.onscroll = () => input.value++;
});
