(function () {
  let tooltips = document.querySelectorAll("[tooltip]");
  let tooltipContainer = document.createElement("tooltip");
  for (let i = 0; i < tooltips.length; i++) {
    tooltips[i].onmouseover = function () {
      text = this.getAttribute("tooltip");
      tip = document.createTextNode(text);
      if (text != null) {
        tooltipContainer.innerHTML = "";
        tooltipContainer.appendChild(tip);
        if (document.getElementsByTagName("tooltip")[0]) {
          document.getElementsByTagName("tooltip")[0].remove();
        }
        console.log(tooltips[i].getClientRects()[0].x);
        tooltipContainer.style.top =  tooltips[i].getClientRects()[0].y + 40 + "px";
        tooltipContainer.style.left = tooltips[i].getClientRects()[0].x + "px";
        document.body.appendChild(tooltipContainer);
      }
    };
    tooltips[i].onmouseout = function () {
        document.getElementsByTagName('tooltip')[0].remove();
    };
  }
})();
