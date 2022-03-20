function successFunc(data) {
    console.log(data);

    document.getElementById("firstlink").innerHTML = data[data.length-1].Link;
    document.getElementById("firstreason").innerHTML = data[data.length-1].Reason;
    document.getElementById("secondlink").innerHTML = data[data.length-2].Link;
    document.getElementById("secondreason").innerHTML = data[data.length-2].Reason;
    document.getElementById("thirdlink").innerHTML = data[data.length-3].Link;
    document.getElementById("thirdreason").innerHTML = data[data.length-3].Reason;
  }
  Sheetsu.read("https://sheetsu.com/apis/v1.0su/03404dcef980", {}, successFunc);
