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

$('a.btn-send').click(function(){
	$('#modal').fadeToggle('slow');
});

$('#modal a.close').click(function close(){
	$.each($('#modal input,#modal textarea'),function(i,value){
		value.value = "";
	});
		





	$('#modal').fadeToggle('slow');

});

function cform(){
    var str = "ajax=1";
    $.ajax({
        url: "/contact/",
        type: "post",
        data: str,
        cache: false,
        success: function(response){
            $.fancybox(response);

            return true;

        }
    })
}