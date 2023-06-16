var type = "click"
function change(){
    if(type == "click"){
    document.getElementById("whole").innerHTML = `  <section id="wrap">
    <section id="main">
      <div class="keys">
        <div data-key="65" class="key"
          onmouseover="new Audio('http://carolinegabriel.com/demo/js-keyboard/sounds/040.wav').play();">

        </div>
        <div data-key="87" class="key sharp"
          onmouseover="new Audio('http://carolinegabriel.com/demo/js-keyboard/sounds/041.wav').play();">

        </div>
        <div data-key="83" class="key"
          onmouseover="new Audio('http://carolinegabriel.com/demo/js-keyboard/sounds/042.wav').play();">

        </div>
        <div data-key="69" class="key sharp"
          onmouseover="new Audio('http://carolinegabriel.com/demo/js-keyboard/sounds/043.wav').play();">

        </div>
        <div data-key="68" class="key"
          onmouseover="new Audio('http://carolinegabriel.com/demo/js-keyboard/sounds/044.wav').play();">

        </div>
        <div data-key="70" class="key"
          onmouseover="new Audio('http://carolinegabriel.com/demo/js-keyboard/sounds/045.wav').play();">

        </div>
        <div data-key="84" class="key sharp"
          onmouseover="new Audio('http://carolinegabriel.com/demo/js-keyboard/sounds/046.wav').play();">

        </div>
        <div data-key="71" class="key"
          onmouseover="new Audio('http://carolinegabriel.com/demo/js-keyboard/sounds/047.wav').play();">

        </div>
        <div data-key="89" class="key sharp"
          onmouseover="new Audio('http://carolinegabriel.com/demo/js-keyboard/sounds/048.wav').play();">

        </div>
        <div data-key="72" class="key"
          onmouseover="new Audio('http://carolinegabriel.com/demo/js-keyboard/sounds/049.wav').play();">

        </div>
        <div data-key="85" class="key sharp"
          onmouseover="new Audio('http://carolinegabriel.com/demo/js-keyboard/sounds/050.wav').play();">

        </div>
        <div data-key="74" class="key"
          onmouseover="new Audio('http://carolinegabriel.com/demo/js-keyboard/sounds/051.wav').play();">

        </div>
        <div data-key="75" class="key"
          onmouseover="new Audio('http://carolinegabriel.com/demo/js-keyboard/sounds/052.wav').play();">

        </div>
        <div data-key="79" class="key sharp"
          onmouseover="new Audio('http://carolinegabriel.com/demo/js-keyboard/sounds/053.wav').play();">

        </div>
        <div data-key="76" class="key"
          onmouseover="new Audio('http://carolinegabriel.com/demo/js-keyboard/sounds/054.wav').play();">

        </div>
        <div data-key="80" class="key sharp"
          onmouseover="new Audio('http://carolinegabriel.com/demo/js-keyboard/sounds/055.wav').play();">

        </div>
        <div data-key="186" class="key"
          onmouseover="new Audio('http://carolinegabriel.com/demo/js-keyboard/sounds/056.wav').play();">
        </div>
      </div>
    </section>
  </section>
  <button onclick="change()">Do you want to play piano on Clicking the keys</button>`
type = "hover"
}
else{
    document.getElementById("whole").innerHTML = `<section id="wrap">
    <section id="main">
      <div class="keys">
        <div data-key="65" class="key"
          onclick="new Audio('http://carolinegabriel.com/demo/js-keyboard/sounds/040.wav').play();">

        </div>
        <div data-key="87" class="key sharp"
          onclick="new Audio('http://carolinegabriel.com/demo/js-keyboard/sounds/041.wav').play();">

        </div>
        <div data-key="83" class="key"
          onclick="new Audio('http://carolinegabriel.com/demo/js-keyboard/sounds/042.wav').play();">

        </div>
        <div data-key="69" class="key sharp"
          onclick="new Audio('http://carolinegabriel.com/demo/js-keyboard/sounds/043.wav').play();">

        </div>
        <div data-key="68" class="key"
          onclick="new Audio('http://carolinegabriel.com/demo/js-keyboard/sounds/044.wav').play();">

        </div>
        <div data-key="70" class="key"
          onclick="new Audio('http://carolinegabriel.com/demo/js-keyboard/sounds/045.wav').play();">

        </div>
        <div data-key="84" class="key sharp"
          onclick="new Audio('http://carolinegabriel.com/demo/js-keyboard/sounds/046.wav').play();">

        </div>
        <div data-key="71" class="key"
          onclick="new Audio('http://carolinegabriel.com/demo/js-keyboard/sounds/047.wav').play();">

        </div>
        <div data-key="89" class="key sharp"
          onclick="new Audio('http://carolinegabriel.com/demo/js-keyboard/sounds/048.wav').play();">

        </div>
        <div data-key="72" class="key"
          onclick="new Audio('http://carolinegabriel.com/demo/js-keyboard/sounds/049.wav').play();">

        </div>
        <div data-key="85" class="key sharp"
          onclick="new Audio('http://carolinegabriel.com/demo/js-keyboard/sounds/050.wav').play();">

        </div>
        <div data-key="74" class="key"
          onclick="new Audio('http://carolinegabriel.com/demo/js-keyboard/sounds/051.wav').play();">

        </div>
        <div data-key="75" class="key"
          onclick="new Audio('http://carolinegabriel.com/demo/js-keyboard/sounds/052.wav').play();">

        </div>
        <div data-key="79" class="key sharp"
          onclick="new Audio('http://carolinegabriel.com/demo/js-keyboard/sounds/053.wav').play();">

        </div>
        <div data-key="76" class="key"
          onclick="new Audio('http://carolinegabriel.com/demo/js-keyboard/sounds/054.wav').play();">

        </div>
        <div data-key="80" class="key sharp"
          onclick="new Audio('http://carolinegabriel.com/demo/js-keyboard/sounds/055.wav').play();">

        </div>
        <div data-key="186" class="key"
          onclick="new Audio('http://carolinegabriel.com/demo/js-keyboard/sounds/056.wav').play();">
        </div>
      </div>
    </section>
  </section>
  <button onclick="change()">Do you want to play piano on hovering the keys</button>`
}
}