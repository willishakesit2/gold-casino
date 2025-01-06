function close_all(){
	$(".eff_swf1").hide();
	$(".eff_swf2").hide();
	$(".eff_swf3").hide();
	$(".eff_swf4").hide();
	$(".eff_swf5").hide();
	$(".eff_swf6").hide();
}

(function($) {
	$.fn.homepageSlider = function(options) { 
		var settings = {speed: 600};
		var unit1Left,
			unit1LeftActive,
			unit1LeftInactive;

		var target = $(this),
			blocks = target.children('div.slide'),
			////////////////������////////////////////
			unit1 = blocks.filter('.unit1'),
			unit2 = blocks.filter('.unit2'),
			unit3 = blocks.filter('.unit3'),
			unit4 = blocks.filter('.unit4'),
			unit5 = blocks.filter('.unit5'),
			unit6 = blocks.filter('.unit6'),
			unit7 = blocks.filter('.unit7'),
			////////////////������////////////////////
			windowWidth,
			curBlock = '',
			sign = true,
			isIE = $.browser.msie && $.browser.version < 9 ? true : false;

		blocks.find('div.label').css('opacity','0');
		fitSize();

		blocks.fadeIn(0);





		$('.unit1').hover(
				function(){
					$(".eff_swf1").show();
					$(".eff_swf2").hide();
					$(".eff_swf3").hide();
					$(".eff_swf4").hide();
					$(".eff_swf5").hide();
					$(".eff_swf6").hide();
				},
				function(){close_all();}
		);
		$('.unit2').hover(
				function(){
					$(".eff_swf2").show();
					$(".eff_swf1").hide();
					$(".eff_swf3").hide();
					$(".eff_swf4").hide();
					$(".eff_swf5").hide();
					$(".eff_swf6").hide();
				},
				function(){close_all();}
		);
		$('.unit3').hover(
				function(){
					$(".eff_swf3").show();
					$(".eff_swf1").hide();
					$(".eff_swf2").hide();
					$(".eff_swf4").hide();
					$(".eff_swf5").hide();
					$(".eff_swf6").hide();
				},
				function(){close_all();}
		);
		$('.unit4').hover(
				function(){
					$(".eff_swf4").show();
					$(".eff_swf2").hide();
					$(".eff_swf3").hide();
					$(".eff_swf1").hide();
					$(".eff_swf5").hide();
					$(".eff_swf6").hide();
				},
				function(){close_all();}
		);
		$('.unit5').hover(
				function(){
					$(".eff_swf5").show();
					$(".eff_swf2").hide();
					$(".eff_swf3").hide();
					$(".eff_swf4").hide();
					$(".eff_swf1").hide();
					$(".eff_swf6").hide();
				},
				function(){close_all();}
		);
		$('.unit6').hover(
				function(){
					$(".eff_swf6").show();
					$(".eff_swf2").hide();
					$(".eff_swf3").hide();
					$(".eff_swf4").hide();
					$(".eff_swf5").hide();
					$(".eff_swf1").hide();
				},
				function(){close_all();}
		);



		////////////////������//////////////////// �»�
		unit1.children('div.game_title_t').hover(
			function () {
				curBlock = $(this).attr('rel');
				if (sign){
					unit1Open();
				}else{
					sign = true;
				}
					$(".eff_swf2").hide();
					$(".eff_swf3").hide();
					$(".eff_swf4").hide();
					$(".eff_swf5").hide();
					$(".eff_swf6").hide();
			}
		);

		$('.stop_7').hover(
			function () {
				curBlock = $(this).attr('rel');
				if (sign)
					unit1Open();
				else
					sign = true;
			}
		);
		////////////////������//////////////////// �»�


		////////////////������//////////////////// ������
		unit2.children('div.game_title_m').hover(
			function () {
				curBlock = $(this).attr('rel');
				if (sign){
					unit2Open();
				}else{
					sign = true;
				}
					$(".eff_swf1").hide();
					$(".eff_swf3").hide();
					$(".eff_swf4").hide();
					$(".eff_swf5").hide();
					$(".eff_swf6").hide();
			}
		);
		$('.stop_4').hover(
			function () {
				curBlock = $(this).attr('rel');
				if (sign)
					unit2Open();
				else
					sign = true;
			}
		);
		////////////////������//////////////////// ������





		////////////////������//////////////////// ��õ��
		unit3.children('div.game_title_x').hover(
			function () {
				curBlock = $(this).attr('rel');
				if (sign){
					unit3Open();
				}else{
					sign = true;
				}
					$(".eff_swf2").hide();
					$(".eff_swf1").hide();
					$(".eff_swf4").hide();
					$(".eff_swf5").hide();
					$(".eff_swf6").hide();
			}
		);
		$('.stop_1').hover(
			function () {
				curBlock = $(this).attr('rel');
				if (sign)
					unit3Open();
				else
					sign = true;
			}
		);
		////////////////������//////////////////// ��õ��
		




		////////////////������//////////////////// �ƽþ�
		unit4.children('div.game_title_a').hover(
			function () {
				curBlock = $(this).attr('rel');
				if (sign){
					unit4Open();
				}else{
					sign = true;
				}
					$(".eff_swf2").hide();
					$(".eff_swf3").hide();
					$(".eff_swf1").hide();
					$(".eff_swf5").hide();
					$(".eff_swf6").hide();
			}
		);
		$('.stop_5').hover(
			function () {
				curBlock = $(this).attr('rel');
				if (sign)
					unit4Open();
				else
					sign = true;
			}
		);
		////////////////������//////////////////// �ƽþ�
		


		////////////////������//////////////////// �÷�����
		unit5.children('div.game_title_p').hover(
			function () {
				curBlock = $(this).attr('rel');
				if (sign){
					unit5Open();
				}else{
					sign = true;
				}
					$(".eff_swf2").hide();
					$(".eff_swf3").hide();
					$(".eff_swf4").hide();
					$(".eff_swf1").hide();
					$(".eff_swf6").hide();
			}
		);
		$('.stop_11').hover(
			function () {
				curBlock = $(this).attr('rel');
				if (sign)
					unit5Open();
				else
					sign = true;
			}
		);
		////////////////������//////////////////// �÷�����
		

		////////////////������//////////////////// ����
		unit6.children('div.game_title_o').hover(
			function () {
				curBlock = $(this).attr('rel');
				if (sign){
					unit6Open();
				}else{
					sign = true;
				}
					$(".eff_swf2").hide();
					$(".eff_swf3").hide();
					$(".eff_swf4").hide();
					$(".eff_swf5").hide();
					$(".eff_swf1").hide();
			}
		);
		$('.stop_12').hover(
			function () {
				curBlock = $(this).attr('rel');
				if (sign)
					unit6Open();
				else
					sign = true;
			}
		);
		////////////////������//////////////////// ����



		$('#homepage-slider-wrap').hover(
			function () {
				slideBlur();
			}
		);
		

		////////////////������////////////////////

		function fitSize() {
			windowWidth = parseInt($(window).width());
			
			var gameWindow = $('#game-window');
				homepageNav = $('#homepage-nav');


				//////////������ �� ������ ���� ũ�� ������///////////////
				homepageNav.css('marginTop','500px');
				unitLeft			= 216;	//������
				unitLeftActive		= 216;
				unitLeftInactive	= 216;
				unitLeftInactive1	= 432;
				unitLeftInactive1_p	= 173;

				unitLeftInactive1a  = -216;

				//////////������ �� ������ ���� ũ�� ������///////////////





				////////////////������////////////////////
				unit1.css('background', "url('./images/bg_slide.png') 0 0 no-repeat");
				unit2.css('background', "url('./images/bg_slide.png') 0 0 no-repeat");
				unit3.css('background', "url('./images/bg_slide.png') 0 0 no-repeat");
				unit4.css('background', "url('./images/bg_slide.png') 0 0 no-repeat");
				unit5.css('background', "url('./images/bg_slide.png') 0 0 no-repeat");
				unit6.css('background', "url('./images/bg_slide.png') 0 0 no-repeat");
				//unit7.css('background', "url('./images/bg_slide.png') 0 0 no-repeat");
			
				unit1Left = unitLeft*0,
				unit1LeftInactive = unitLeftInactive*0,
				unit1LeftActive = unitLeftActive*0,
				unit1LeftInactive1 = unitLeftInactive1a,


				unit2Left = unitLeft*1,
				unit2LeftInactive = unitLeftInactive*1,
				unit2LeftActive = unitLeftActive*0.8,
				unit2LeftInactive1 = unitLeftInactive1,


				unit3Left = unitLeft*2,
				unit3LeftInactive = unitLeftInactive*2,
				unit3LeftActive = unitLeftActive*1.6,
				unit3LeftInactive1 = unitLeftInactive1+unitLeftInactive1_p,


				unit4Left = unitLeft*3,
				unit4LeftInactive = unitLeftInactive*3,
				unit4LeftActive = unitLeftActive*2.4,
				unit4LeftInactive1 = unitLeftInactive1+unitLeftInactive1_p*2,
			

				unit5Left = unitLeft*4,
				unit5LeftInactive = unitLeftInactive*4,
				unit5LeftActive = unitLeftActive*3.2,
				unit5LeftInactive1 = unitLeftInactive1+unitLeftInactive1_p*3,
			

				unit6Left = unitLeft*5,
				unit6LeftInactive = unitLeftInactive*5,
				unit6LeftActive = unitLeftActive*4,
				unit6LeftInactive1 = unitLeftInactive1+unitLeftInactive1_p*4,
			

				unit7Left = unitLeft*6,
				unit7LeftInactive = unitLeftInactive*6,
				unit7LeftActive = unitLeftActive*4.8;
				//unit7LeftInactive1 = unitLeftInactive1+unitLeftInactive1_p*5;

							
				

				unit1.css('left', unit1Left+'px');
				unit2.css('left', unit2Left+'px');
				unit3.css('left', unit3Left+'px');
				unit4.css('left', unit4Left+'px');
				unit5.css('left', unit5Left+'px');
				unit6.css('left', unit6Left+'px');
				unit7.css('left', unit7Left+'px');
				
			////////////////������////////////////////
		}

		////////////////������////////////////////
		function unit1Open() {
			blocks.find('div.label.active:not(.visible)').stop().animate({opacity: '0', queue: false}, settings.speed ).removeClass('active');
			unit1.stop().animate({left: unit1LeftActive+'px', queue: false}, settings.speed ).find('div.label').stop().animate({opacity: '1', queue: false}, settings.speed ).addClass('active');
			unit2.stop().animate({left: unit2LeftInactive1+'px', queue: false}, settings.speed );
			unit3.stop().animate({left: unit3LeftInactive1+'px', queue: false}, settings.speed );
			unit4.stop().animate({left: unit4LeftInactive1+'px', queue: false}, settings.speed );
			unit5.stop().animate({left: unit5LeftInactive1+'px', queue: false}, settings.speed );
			unit6.stop().animate({left: unit6LeftInactive1+'px', queue: false}, settings.speed );
			//unit7.stop().animate({left: unit7LeftInactive1+'px', queue: false}, settings.speed );
		}

		function unit2Open() {
			blocks.find('div.label.active:not(.visible)').stop().animate({opacity: '0', queue: false}, settings.speed ).removeClass('active');
			unit1.stop().animate({left: unit1LeftActive+'px', queue: false}, settings.speed );
			unit2.stop().animate({left: unit2LeftActive+'px', queue: false}, settings.speed ).find('div.label').stop().animate({opacity: '1', queue: false}, settings.speed ).addClass('active');
			unit3.stop().animate({left: unit3LeftInactive1+'px', queue: false}, settings.speed );
			unit4.stop().animate({left: unit4LeftInactive1+'px', queue: false}, settings.speed );
			unit5.stop().animate({left: unit5LeftInactive1+'px', queue: false}, settings.speed );
			unit6.stop().animate({left: unit6LeftInactive1+'px', queue: false}, settings.speed );
			//unit7.stop().animate({left: unit7LeftInactive1+'px', queue: false}, settings.speed );
		}

		function unit3Open() {
			blocks.find('div.label.active:not(.visible)').stop().animate({opacity: '0', queue: false}, settings.speed ).removeClass('active');
			unit1.stop().animate({left: unit1LeftActive+'px', queue: false}, settings.speed );
			unit2.stop().animate({left: unit2LeftActive+'px', queue: false}, settings.speed );
			unit3.stop().animate({left: unit3LeftActive+'px', queue: false}, settings.speed ).find('div.label').stop().animate({opacity: '1', queue: false}, settings.speed ).addClass('active');
			unit4.stop().animate({left: unit4LeftInactive1+'px', queue: false}, settings.speed );
			unit5.stop().animate({left: unit5LeftInactive1+'px', queue: false}, settings.speed );
			unit6.stop().animate({left: unit6LeftInactive1+'px', queue: false}, settings.speed );
			//unit7.stop().animate({left: unit7LeftInactive1+'px', queue: false}, settings.speed );
		}


		function unit4Open() {
			blocks.find('div.label.active:not(.visible)').stop().animate({opacity: '0', queue: false}, settings.speed ).removeClass('active');
			unit1.stop().animate({left: unit1LeftInactive+'px', queue: false}, settings.speed );
			unit2.stop().animate({left: unit2LeftActive+'px', queue: false}, settings.speed );
			unit3.stop().animate({left: unit3LeftActive+'px', queue: false}, settings.speed );
			unit4.stop().animate({left: unit4LeftActive+'px', queue: false}, settings.speed ).find('div.label').stop().animate({opacity: '1', queue: false}, settings.speed ).addClass('active');
			unit5.stop().animate({left: unit5LeftInactive1+'px', queue: false}, settings.speed );
			unit6.stop().animate({left: unit6LeftInactive1+'px', queue: false}, settings.speed );
			//unit7.stop().animate({left: unit7LeftInactive1+'px', queue: false}, settings.speed );
		}

		
		function unit5Open() {
			blocks.find('div.label.active:not(.visible)').stop().animate({opacity: '0', queue: false}, settings.speed ).removeClass('active');
			unit1.stop().animate({left: unit1LeftInactive+'px', queue: false}, settings.speed );
			unit2.stop().animate({left: unit2LeftActive+'px', queue: false}, settings.speed );
			unit3.stop().animate({left: unit3LeftActive+'px', queue: false}, settings.speed );
			unit4.stop().animate({left: unit4LeftActive+'px', queue: false}, settings.speed );
			unit5.stop().animate({left: unit5LeftActive+'px', queue: false}, settings.speed ).find('div.label').stop().animate({opacity: '1', queue: false}, settings.speed ).addClass('active');
			unit6.stop().animate({left: unit6LeftInactive1+'px', queue: false}, settings.speed );
			//unit7.stop().animate({left: unit7LeftInactive1+'px', queue: false}, settings.speed );
		}

		
		function unit6Open() {
			blocks.find('div.label.active:not(.visible)').stop().animate({opacity: '0', queue: false}, settings.speed ).removeClass('active');
			unit1.stop().animate({left: unit1LeftInactive+'px', queue: false}, settings.speed );
			unit2.stop().animate({left: unit2LeftActive+'px', queue: false}, settings.speed );
			unit3.stop().animate({left: unit3LeftActive+'px', queue: false}, settings.speed );
			unit4.stop().animate({left: unit4LeftActive+'px', queue: false}, settings.speed );
			unit5.stop().animate({left: unit5LeftActive+'px', queue: false}, settings.speed );
			unit6.stop().animate({left: unit6LeftActive+'px', queue: false}, settings.speed ).find('div.label').stop().animate({opacity: '1', queue: false}, settings.speed ).addClass('active');
			//unit7.stop().animate({left: unit7LeftInactive1+'px', queue: false}, settings.speed );
		}

		////////////////������////////////////////

		
		function slideBlur() {
			////////////////������////////////////////
			unit1.stop().animate({left: unit1Left+'px', queue: false}, settings.speed );
			unit2.stop().animate({left: unit2Left+'px', queue: false}, settings.speed );
			unit3.stop().animate({left: unit3Left+'px', queue: false}, settings.speed );
			unit4.stop().animate({left: unit4Left+'px', queue: false}, settings.speed );
			unit5.stop().animate({left: unit5Left+'px', queue: false}, settings.speed );
			unit6.stop().animate({left: unit6Left+'px', queue: false}, settings.speed );
			////////////////������////////////////////
			blocks.find('div.label.active:not(.visible)').stop().animate({opacity: '0', queue: false}, settings.speed ).removeClass('active');
		}
	};
})(jQuery);

/*
//////////////������//////////////////////////////////////////////////
$q(document).ready(function() {
	$q('#homepage-slider-wrap').homepageSlider();
	
});
//////////////������//////////////////////////////////////////////////
*/

function clearField(field)
{
if (field.value == field.defaultValue) {
field.value = "";
$( field ).css( "color", "#fff" );
}
}
function clearField_pass(field)
{
if (field.value == field.defaultValue) {
field.value = "";
field.type='password';
$( field ).css( "color", "#fff" );
}
}
function checkField(field)
{
if (!field.value) {
field.value = field.defaultValue;
field.type='text';
$( field ).css( "color", "#ccc" );
}
}
