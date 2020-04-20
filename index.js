$(document).ready(function () {
  $("#getWeather").click(function () {
    var zip = $("#zip").val();
    var key = "afa414029123a5e21033ca313da75564";
    // var time = $(".time").val();
    // var tzKey = "RMS3ZSWU8TJ0";
    $.ajax({
      url: "http://api.openweathermap.org/data/2.5/weather",
      dataType: "json",
      type: "GET",
      data: {
        zip: zip,
        appid: key,
        units: "imperial"
      },
      success: function (data) {
        console.log(data);
        var wf = "";
        $.each(data.weather, function (index, val) {
          wf +=
            "<p><b>" +
            data.name +
            "</b></p>" +
            data.main.temp +
            "&deg;F" +
            " | " +
            val.main +
            " , " +
            val.description;
        });
        $("#showWeather").html(wf);
        $("#showTime").html(
          moment()
            .utcOffset(data.timezone / 60)
            .format("h:mm a")
        );
      }
    });
  });
});



    

 
      










