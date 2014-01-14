/* javascript */
$(function(){
	$('.publicar').on('click',showForm)
	$('form').on('submit',sendForm)

	$('.sizer').each(function(i,link){
			var pixels = $(link).prop('hash').substring(1);
			$(link)
				.css('font-size',pixels+'px')
				.on('click',newSize(pixels));
	});

	$('.total').each(function(i,elem){
		var contTotal = createCount(elem.innerHTML);
		$(elem).siblings('.up')
					.on('click',function(ev){
						ev.preventDefault();
						$(elem).html(contTotal.up);
					})
				.siblings('.down')
					.on('click',function(ev){
						ev.preventDefault();
						$(elem).html(contTotal.down);
					})
	})


});

function createCount(init){
	var contador = init;
	return {
		up : function(){
			return ++contador;
		},
		down : function(){
			return --contador;
		}
	}
}


function newSize(pixels){
	return function(){
		$('body').css('font-size',pixels+'px');
	}	
}

function sendForm(ev){
	ev.preventDefault();
	var titulo = $('input[name=titulo]').val();
	var tag = $('input[name=tag]').val();
	var autor = $('input[name=autor]').val();

	var template = '<article class="post"> \
				<div class="descripcion"> \
					<figure class="imagen"> \
						<img src="img/foto.jpg" /> \
					</figure> \
					<div class="detalles"> \
						<h2 class="titulo"> \
							'+titulo+' \
						</h2> \
						<p class="autor"> \
							por <a href="#">'+autor+'</a> \
						</p> \
						<a class="tag" href="#">'+tag+'</a> \
						<p class="fecha">hace <strong>20</strong> min</p> \
					</div> \
				</div> \
				<div class="acciones"> \
					<div class="votos"> \
						<a class="up" href="#"></a> \
						<span class="total">0</span> \
						<a class="down" href="#"></a> \
					</div> \
					<div class="datos"> \
						<a class="comentarios" href="#"> \
							10 \
						</a> \
						<a class="estrellita" href="#"> \
						</a> \
					</div> \
				</div> \
			</article>';
	$('.posts').prepend($(template).fadeIn(function(){
		$(this).css('display','inline-block')
	})); 
	$('input[type=text]').val('');
	$('form').slideUp();
}


function showForm(){
	$('form').slideToggle()
}