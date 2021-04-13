function submitAnswer(){

    var total=6
    var score=0

var q1= document.forms['myform']['q1'].value
var q2= document.forms['myform']['q2'].value
var q3= document.forms['myform']['q3'].value
var q4= document.forms['myform']['q4'].value
var q5= document.forms['myform']['q5'].value
var q6= document.forms['myform']['q6'].value

for(i=1; i<=total; i++){

if(eval("q" +i ) ==null || eval("q" +i) ==""){
    alert('you have not selected question '+ i + "!!")
    return false;
}
}

var answers=["b", "c", "c", "b", "c", 'b']

for(i=1; i<=total; i++){

    if(eval('q'+ i)== answers[i-1]){
        score++
    }
}

var result= document.getElementById('results')
result.innerHTML= '<h3>You scored <span> ' + score +'<span> out of <span>' + total + '<span><h3>'


alert(' You scored ' + score + ' out of ' + total)

}