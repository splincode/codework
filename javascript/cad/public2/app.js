if (!Array.prototype.last){
    Array.prototype.last = function(){
        return this[this.length - 1];
    };
};


var GlobalObject = {
	sealingCoutn: 0,
	ye: 10,
	item: [
		{
			id : 1, 
			edge: {
				left: 1,
				right: 2
			}
		}
	]
};


$('.closemenu').on({
	'click': function(e){
		$('.mdl-layout').addClass('is-small-screen')
	}
});

$('.newproject').on({
	'click': function(e){
		location.reload()
	}
});

var clicked = false, clickX;
$('.mdl-layout__content').on({
    'mousemove': function(e) {
        clicked && updateScrollPos(e);
    },
    'mousedown': function(e) {
        clicked = true;
        clickY = e.pageX;
    },
    'mouseup': function() {
        clicked = false;
        $('.mdl-layout__content').css('cursor', 'auto');
    }
});

var updateScrollPos = function(e) {
    $('.mdl-layout__content').css('cursor', 'move');
    $('.mdl-layout__content').scrollLeft($('.mdl-layout__content').scrollLeft() + (clickY - e.pageX));
};



var PropsFormComponent = function(type, id, L, H, A){

	var ye = GlobalObject.ye;

	var L = L / ye;
	H = H / ye;
	A = A / (ye*ye);

	return ` 

		<li>
	      <div class="collapsible-header active">
			   <i class="Tiny material-icons clearfix">view_module</i>
			   <p> параметры стержня (№${id})</p>
	      </div>
	      <div class="collapsible-body">

		      	<div class="row">
		      	    <div class="col s6">
						
						<div class="">
				         <input placeholder="300"  type="number" value="${L}" data-from-id="${id}" class="validate Lchange">
				         <label>Длинна стержня (L, м)</label>
				       	</div>

		      	    </div>
		      	    <div class="col s6">

						<div class="">
				         <input placeholder="100"  type="number" value="${H}" data-from-id="${id}" class="validate Hchange">
				         <label>Высота стержня (H, м)</label>
				       	</div>

		      	    </div>
		      	</div>


		      	<div class="row">
		      		<div class="col s6">

						<div class="">
				         <input placeholder="30000"  type="number" value="${A}" data-from-id="${id}" class="validate Achange">
				         <label>Площадь (A, м)</label>
				       	</div>

		      	    </div>

		      	    <div class="col s6">
						
						<div class="">
				         <input placeholder="10e5" value="10e5"  type="number" class="validate">
				         <label>Модуль упругости (E, Па)</label>
				       	</div>

		      	    </div>
		      	    
		      	</div>

	      </div>
	    </li>
      	
	`;
};

var PropsBlockComponent = function(id, edgeIdLeft, edgeIdRight, notfirstEdge){

	if (notfirstEdge) notfirstEdge = `<div class="edge edgeLeft">${edgeIdLeft}</div>`; else notfirstEdge = '';


	return ` 

		
		<div class="block idblock-${id}">
			<div class="nameing">${id}</div>
			<div class="block-btn addRight" data-activates='dropdown-1-${id}' data-from-block="${id}">+</div>
			<div class="block-btn addLeft" data-activates='dropdown-2-${id}' data-from-block="${id}">+</div>
			<div class="block-btn addTop" data-activates='dropdown-3-${id}' data-from-block="${id}">+</div>
			<div class="block-btn addBottom" data-activates='dropdown-4-${id}' data-from-block="${id}">+</div>

			${notfirstEdge}
			<div class="edge edgeRight">${edgeIdRight}</div>
		

			<div class="sealingLeft"></div>
			<div class="sealingRight"></div>
			
			<!-- кнопка справа -->
			<ul id='dropdown-1-${id}' class='dropdown-content'>
		    	<li><a class="addBlockToRight" data-from-id="${id}" href="#!">Добавить стержень</a><div class="divider"></div></li>
		    	<li><a class="sealing addSealingRight"  data-from-id="${id}" href="#!">Добавить заделку</a><div class="divider"></div></li>
		    	
		    	<li><a class="" href="#!">Добавить поперечную силу (F)</a></li>
		  	</ul>
			
			<!-- кнопка слева -->
	  		<ul id='dropdown-2-${id}' class='dropdown-content'>
	  	    	<li><a class="sealing addSealingLeft"  data-from-id="${id}" href="#!">Добавить заделку</a><div class="divider"></div></li>
	  	    	
	  	    	<li><a class="" href="#!">Добавить поперечную силу (F)</a></li>
	  	  	</ul>
			
			<!-- кнопка сверху -->
  	  		<ul id='dropdown-3-${id}' class='dropdown-content'>
  	  	    	<li><a class="" href="#!">Добавить продульную силу (q)</a></li>
  	  	  	</ul>
			
			<!-- кнопка снизу -->
  	  		<ul id='dropdown-4-${id}' class='dropdown-content'>
  	  	    	<li><a class="" href="#!">Добавить продульную силу (q)</a></li>
  	  	  	</ul>


		</div>
		
	`

};


$('.createElement').dropdown();

function Click(){

	$('.block-btn').unbind('click').on("click", function(){

		var idUl = $(this).attr('data-activates');
		var id = $(this).attr('data-from-block');

		var next = $(`.idblock-${id}`).next().length;
		
		if (next && $(this).hasClass('addRight')) { 
			$(`#${idUl}`).find('.addBlockToRight').parent().remove();
			$(`#${idUl}`).find('.sealing').parent().remove();

		}

		var prev = $(`.idblock-${id}`).prev().length;
		if (prev && $(this).hasClass('addLeft')) { 
			$(`#${idUl}`).find('.sealing').parent().remove();
		}

		var prev = $(`.idblock-${id}`).prev().length;
		if (prev && $(this).hasClass('addLeft')) { 
			$(`#${idUl}`).find('.sealing').parent().remove();
		}

		if ($(this).hasClass('addLeft')) {
			if ($(`.idblock-${id}`).find('.sealingLeft').css('display') == "block") {
				$(`#${idUl}`).find('.sealing').parent().remove();
			}
		}

		if ($(this).hasClass('addRight')) {
			if ($(`.idblock-${id}`).find('.sealingRight').css('display') == "block") {
				$(`#${idUl}`).find('.addBlockToRight').parent().remove();
				$(`#${idUl}`).find('.sealing').parent().remove();
			}
		}

	}).dropdown();

	$('.addSealingLeft').unbind('click').on("click", function(){
		var fromid = $(this).attr('data-from-id');
		$(`.idblock-${fromid} .sealingLeft`).css('display', 'block');
		GlobalObject.sealingCoutn++;

		if (GlobalObject.sealingCoutn == 2) {
			$('#view-source2').removeClass('diactivate');
		}
	});

	$('.addSealingRight').unbind('click').on("click", function(){
		var fromid = $(this).attr('data-from-id');
		$(`.idblock-${fromid} .sealingRight`).css('display', 'block');
		GlobalObject.sealingCoutn++;
		if (GlobalObject.sealingCoutn == 2) {
			$('#view-source2').removeClass('diactivate');
		}
	});

	$('.addBlockToRight').unbind('click').on("click", function(){

		var fromid = $(this).attr('data-from-id');

		var newid = GlobalObject.item.last().id;
		newid += 1;

		var rightEdge = GlobalObject.item.last().edge.right;

		GlobalObject.item.push({
			'id' : newid,
			edge: {
				left: null,
				right: rightEdge+1
			}
		});

		$(`.idblock-${fromid}`).after(PropsBlockComponent(newid, 0, rightEdge+1));

		$('ul.collapsible').append(PropsFormComponent(
			'optionblock',
			newid, 
			parseInt($(`.idblock-${newid}`).css('  ')), 
			parseInt($(`.idblock-${newid}`).css('height')), 
			parseInt($(`.idblock-${newid}`).css('height')) * parseInt($(`.idblock-${newid}`).css('width')) 
		));

		Click();

	});


	$('input').unbind('blur').on('blur', function(){
		var ye = GlobalObject.ye;
		var fromid = $(this).attr('data-from-id');
		var classaction = $(this).attr('class');
		var value = $(this).val();
		
		if (classaction.indexOf('Lchange') != -1) {
			$(`.idblock-${fromid}`).css('width', value * ye);
		}

		if (classaction.indexOf('Hchange') != -1) {
			$(`.idblock-${fromid}`).css('height', value * ye);
		}


		var newA = $(`.Lchange[data-from-id='${fromid}']`).val() * $(`.Hchange[data-from-id='${fromid}']`).val();
		$(`.Achange[data-from-id='${fromid}']`).val(newA);

	});

	$('.collapsible').collapsible();


};



// кнопка добавления стержня
$('.addBlock').on("click", function(){

	var id = GlobalObject.item.last().id;

	$('.mdl-layout__content').css({
		'justify-content' : 'flex-start'
	}); // +

	$('#graphs').html(
		PropsBlockComponent(1, 1, 2, true) 
	);

	$('nav').html(
		`<ul class="collapsible" data-collapsible="accordion">` + 
		PropsFormComponent(
			'optionblock', 
			id, 
			parseInt($(`.idblock-${id}`).css('width')),
			parseInt($(`.idblock-${id}`).css('height')),
			parseInt($(`.idblock-${id}`).css('height')) * parseInt($(`.idblock-${id}`).css('width')) 
		) + 
		`</ul>`
	);


	$('.block-btn').dropdown();
	Click();

});