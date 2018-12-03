function finalResult(){
    var sideA=parseInt(document.getElementById('sideA').value);
    var sideB=parseInt(document.getElementById('sideB').value);
    var sideC=parseInt(document.getElementById('sideC').value);
    var answerResult = document.getElementById('answerResult');
    if( isNaN(sideA) || isNaN(sideB) || isNaN(sideC)){
      answerResult.textContent= "PLEASE ENTER NUMBER FOR ALL SIDES!";
    }
    if(sideA+sideB<=sideC || sideB+sideC<=sideA || sideA+sideC<=sideB){
      answerResult.textContent="CANNOT FORM TRIANGLE!";
    }
    if(sideA+sideB>sideC && sideB+sideC>sideA && sideA+sideB>sideC) {
      if (sideA==sideB&&sideA==sideC) {
        answerResult.textContent='Equilateral Triangle: All sides are equal!';
      }
      else if(sideA===sideB||sideB===sideC||sideA===sideC){
        answerResult.textContent='Isosceles Triangle: Two sides are equal!'
      }
      else{
        answerResult.textContent="Scalene Triangle: No sides are equal!";
      }
    }
     
    }