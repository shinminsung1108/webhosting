//색 바꾸기
function SetColor(target, type, color) {
    var temp = document.querySelectorAll(target);
  
    if (type == 'font') {
      var i = 0;
      while (i<temp.length) {
        temp[i].style.color = color;
        i=i+1;
      }
    }
    else if (type == 'bg') {
      var i = 0;
      while (i<temp.length) {
        temp[i].style.backgroundColor = color;
        i=i+1;
      }
    }
  }
  // 주간, 야간모드
  function day_night_handler(self) {
      var target = document.querySelector('body');
      if (self.value == '야간모드') {
          SetColor('body','bg','black');
          SetColor('body','font','white');
          SetColor('a','font','white');
          self.value = '주간모드';
          //self.style.color = 'black';
          //self.style.backgroundColor = 'white';
      }
      else {
          SetColor('body','bg','white');
          SetColor('body','font','black');
          SetColor('a','font','#AEADAD');
          self.value = '야간모드';
          // self.style.color = '#AEADAD';
          // self.style.backgroundColor = 'white';
      }
  }