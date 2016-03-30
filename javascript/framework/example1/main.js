console.log("support in Chrome");

document.addEventListener('DOMContentLoaded', function(){ 

    ('.maxim').css(`
    	line-height: 130px;
    	width: 130px;
    	height: 130px;
    	padding: 10px;
    	text-align:center;
    	font-size: 30px;
    	margin: auto;
    	border: 1px solid black;
        order: 1;
    `);	

    ('.maxim:nth-child(2)').css(`
    	background: yellow;
        order: 2;
    `);

    ('.maxim:nth-child(3)').css(`
    	background: red;
        order: 3;
    `);

    var cssmap = ('.maxim').get(3).css();
    console.log(cssmap);

    cssmap = ('.maxim:nth-child(2)').css();
    console.log(cssmap.toString('css'));

    ('.maxim').get(1).css(`
    	background: green;
    `);

    var b = ('.maxim').css('background');
    console.log(b);  

    ('.maxim').get(1).html(`
		<span style='font-size: 50px'>1.0</span>
    `);

    var j = 1;
    while(j < 4){
    	('.maxim').get(j).html(`<span class="title">${j}<br></span>`); j++;
    }

    var h = ('.maxim').text();
    console.log("text = " + h);
    
    h = ('.maxim').get(3).html();
    console.log("html = " + h);

    ('body').mediacss('screen and (min-width: 1000px)', `
    	background-color: lightgreen;
    `);

    // если свойства были инлайновые, только !important может переопределить их
    ('.maxim').mediacss('(max-width: 1000px)', `
    	background: yellow !important;
    	width: 80% !important;
    	margin: 10px auto !important;
    `);

    ('#main').mediacss('(max-width: 1000px)', 'flex-direction: column;');

    setInterval(function(){
      var k;

      for(var i=1; i < 4; i++){
        dom = `.maxim:nth-child(${i})`;

        k = (dom).css('order');
        if (k==3) k = k - 2;
        else k++;

        (dom).css(`order: ${k};`);
      }

    }, 1000);

    ('.maxim').addClass('border');
    
    ('.maxim').addClass('padding');
    ('.maxim').removeClass('padding');

}, false);