let btn = document.getElementById("btn");

btn.onclick = function(){
  let input = document.getElementById("ageInput").value;
  let age = Number(input);
  let result = document.getElementById("result");

  function showResult(text,color){
    result.innerText = text;
    result.style.color = color;
  }

  if (input === "") {
    showResult("请输入年龄", "gray");
  } else if (isNaN(age) || age < 0) {
    showResult("请输入正确年龄", "gray");
  } else if (age > 120) {
    showResult("这么大年纪吗", "red");
  } else if (age >= 18) {
    showResult("成年人", "blue");
  } else {
    showResult("未成年人", "orange");
  }

}