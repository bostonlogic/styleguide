$('.nav-item').click(function() {
	$('.sg-section').hide();
	$($(this).attr('href')).show();
})

$('.color-palette').css('background-color', function(i) {
	return this.dataset.color;
});

var initToggleButton = function() {
	$('.c-btn-toggle').children().click(function() {
		if (!$(this).hasClass('single')){
			$(this).siblings(':not(.single)').removeClass('active');
			$(this).addClass('active');
		} else {
			$(this).toggleClass('active');
		}
	});
}

initToggleButton();

$('i[rel="pre"]').replaceWith(function() {
    return $('<pre><code>' + $(this).html() + '</code></pre>');
});
var pres = document.querySelectorAll('pre,kbd,blockquote');
for (var i = 0; i < pres.length; i++) {
  pres[i].addEventListener("dblclick", function () {
    var selection = getSelection();
    var range = document.createRange();
    range.selectNodeContents(this);
    selection.removeAllRanges();
    selection.addRange(range);
  }, false);
}



// Turns input fields into number spinners
function initializeSkylineNumberFields(){
  $(".js--input-number__plus").off()
  $(".js--input-number__plus").on('click', function() {

    input_field = $(this).closest($('.c-input-number')).find('input');

    var max;
    var plusValue = parseInt(input_field.val());

    if( parseInt(input_field.attr('max')) ){
      max = parseInt(input_field.attr('max'))
    }else{ max = 999999 }

    if( max <= plusValue ){ return }

    if ( !isNaN(plusValue) ){
      input_field.val(plusValue + 1);
    }else{
      input_field.val(1);
    }
    input_field.trigger('change')
  });

  $(".js--input-number__minus").off()
  $(".js--input-number__minus").on('click', function() {
    input_field = $(this).closest($('.c-input-number')).find('input');
    var minusValue = parseInt(input_field.val());
    if (!isNaN(minusValue) && minusValue > 1){
      input_field.val(minusValue - 1);
    }else{
      input_field.val(1);
    }
    input_field.trigger('change')
  });
}

initializeSkylineNumberFields();
