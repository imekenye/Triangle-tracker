function finalResult(){
    var sideA=parseInt(document.getElementById('sideA').value);
    var sideB=parseInt(document.getElementById('sideB').value);
    var sideC=parseInt(document.getElementById('sideC').value);
    var answerResult =document.getElementById('answerResult');
    if(sideA+sideB>sideC && sideB+sideC>sideA && sideA+sideB>sideC) {
      if (sideA==sideB&&sideA==sideC) {
        answerResult.textContent='Equilateral: All sides are equal!';
      }
      else if(sideA===sideB||sideB===sideC||sideA===sideC){
        answerResult.textContent='Isosceles: Two sides are equal!'
      }
      else{
        answerResult.textContent="Scalene: No sides are equal!";
      }
    }
     else {
      answerResult.textContent="Not a triangle!";
    }
    }