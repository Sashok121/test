jQuery(function($){
	
	var slider = $('#slider article.block');
	var index = 0;
	setInterval(function(){
		var lastIndex = index;
		if(index+1 < slider.length){
			index++
		} else {
			index = 0;
		}
		$(slider[index]).css({"visibility": "visible","right":"-102%","z-index":1})
		$(slider[lastIndex]).css("z-index","0").animate({right:"102%",visibility:"hidden"},1000);
			$(slider[index]).animate({right:"0"},1000);	

	},5000);
    $("a.btn-send").click(function(){
        $("#modal").show();
    });
    $("input[name = phone]").mask("+380(99) 999-99-99");
    $('#modal').validate({
        rules: {
            name: {
                required: true,
                minlength:5,
                maxlength:100
            },
            email: {
                required: true,
                maxlength:100,
                email: true
            },
            phone: {
                required: false,
                maxlength:20
            },
           comment: {
               required: false,
                maxlength:1000
            }

        },
        message:{
            name: {
                required: "Заполните ФИО",
                minlength:"Min букв 5",
                maxlength:"Мах букв 100"
            },
            email: {
                required: "Введите адрес",
                maxlength:"Мах букв 100",
                email: "Введите правильный адрес"
            },
            phone: {

                maxlength:"Мах 20 цыфр"


            },
            comment: {
                maxlength:"Мах букв 1000"
            }
        },
        success: function(label) {
            label.text('OK!').addClass('valid');
        }
    });




$("#modal button[type=submit]").click(function(){

    $.post(
        "send.php",
        {
            name: $("input[name=name]").val(),
            email: $("input[name=email]").val(),
            phone: $("input[name=phone]").val(),
            comment: $("textarea[name=comment]").val()


        },
        onAjaxSuccess
    );

    function onAjaxSuccess(data)
    {
        // Здесь мы получаем данные, отправленные сервером и выводим их на экран.
        alert(data);
    }
});













});









