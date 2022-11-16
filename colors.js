
  var Body = {
    setColor: function(color) {
     $('body').css('color', color);
       //document.querySelector('body').style.color = color;
   },
    setBackgroundColor: function(color) {
      $('body').css('backgroundColor', color);
      // document.querySelector('body').style.backgroundColor = color;
   }
   }

   var Links = {
    setColor: function(color) {
     var alist = document.querySelectorAll('a');
     var i = 0;
     while(i < alist.length) {
     alist[i].style.color = color;
     i = i + 1;
     }
     }
     }

 // function BodySetBackgroudSetColor(color) {
//    document.querySelector('body').style.backgroundColor = color;
 //   }

//  function BodySetColor(color) {
 //   document.querySelector('body').style.color = color;
 //   }

//  function setColor(color) {
  //  var alist = document.querySelectorAll('a');
    //var i = 0;
   // while ( i < alist.length) {
     //   alist[i].style.color = color;
       // console.log(alist[i]);
        //i = i + 1;
     // }
   // }

  function nightDayHandler(self) { 
    //함수를 선언 하는 위치 : 선언부, 매개변수(parameter)
    // 함수를 구현하는 위치. : 구현부
    
    // 함수를 사용할 때 보통 "호출했다. call" -> 함수를 사용할 때, 호출할 때 안에 있는 변수를 
    // 인자값(argument)
    var target = document.querySelector('body');
            if (self.value === 'night') {
               // target.style.backgroundColor = 'black';
                //BodySetBackgroudSetColor('black')
                Body.setBackgroundColor('black');
               // target.style.color = 'white';
                //BodySetColor('white');
                Body.setColor('white');
                self.value = 'day'
                //setColor('powderblue');
                Links.setColor('red')
               
            } else {
              //  target.style.backgroundColor = 'white';
                //BodySetBackgroudSetColor('white')
                Body.setBackgroundColor('white');
              //  target.style.color = 'black';
                //BodySetColor('black');
                Body.setColor('black');
                self.value = 'night'
                //setColor('blue');
                Links.setColor('blue')
              
    
                }
    }