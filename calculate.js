add = function() {
  var operator_1=jQuery('#operand_1').html();
  var operator_2=jQuery('#operand_2').html();

  result = parseInt(jQuery( '#operand_1' ).val()) + parseInt(jQuery( '#operand_2' ).val());

  text= jQuery( '#operand_1' ).val() +  " + "   + jQuery( '#operand_2 ' ).val() + "  =  ";
  result = text + result;
  jQuery ( '#result' ).html (result);

  old_div_content = jQuery('#history').html();
  result ="<span id='addstyle'>" + result + "</span>";
  new_div_content = old_div_content + result + '<br>';
  jQuery('#history').html(new_div_content);
}
subtract = function() {
  var operator_1=jQuery('#operand_1').html();
  var operator_2=jQuery('#operand_2').html();

  result = parseInt(jQuery( '#operand_1' ).val()) - parseInt(jQuery( '#operand_2' ).val());

  text= jQuery( '#operand_1' ).val() +  " - "   + jQuery( '#operand_2 ' ).val() + "  =  ";
  result = text + result;
  jQuery ( '#result' ).html  (result);


  result = "<span id='substyle'>" + result + "</span>";
  old_div_content = jQuery('#history').html();
  new_div_content = old_div_content + result + '<br>';
  jQuery('#history').html(new_div_content);
}
multiply = function() {
  var operator_1=jQuery('#operand_1').html();
  var operator_2=jQuery('#operand_2').html();

  result = parseInt(jQuery( '#operand_1' ).val()) * parseInt(jQuery( '#operand_2' ).val());

  text= jQuery( '#operand_1' ).val() +  " * "   + jQuery( '#operand_2 ' ).val() + "  =  ";
  result = text + result;
  jQuery ( '#result' ).html (result);

  result ="<span id='mulstyle'>" + result + "</span>";
  old_div_content = jQuery('#history').html();
  new_div_content = old_div_content + result + '<br>';
  jQuery('#history').html(new_div_content);
}
divide = function() {
var operator_1=jQuery('#operand_1').html();
  var operator_2=jQuery('#operand_2').html();

  result = parseInt(jQuery( '#operand_1' ).val()) / parseInt(jQuery( '#operand_2' ).val());

  text= jQuery( '#operand_1' ).val() +  " / "   + jQuery( '#operand_2 ' ).val() + "  =  ";
  result = text + result;
  jQuery ( '#result' ).html (result);

  result ="<span id='divstyle'>" + result + "</span>";
  old_div_content = jQuery('#history').html();
  new_div_content = old_div_content + result + '<br>';
  jQuery('#history').html(new_div_content);
}
show = function(){
jQuery('#history').show();
}

hide = function(){
jQuery('#history').hide();
}
clear = function(){
jQuery('#history').clear();
}
setup = function() {
jQuery('#add_button').mouseover(add);
jQuery('#sub_button').mouseover(subtract);
jQuery('#multiply_button').mouseover(multiply);
jQuery('#divide_button').mouseover(divide);

jQuery('#add_button').mouseleave(blank);
jQuery('#sub_button').mouseleave(blank);
jQuery('#multiply_button').mouseleave(blank);
jQuery('#divide_button').mouseleave(blank);

jQuery('#show_button').click(show);
jQuery('#hide_button').click(hide);
jQuery('#clear_button').mouseover(clear);
jQuery('#clear_button').click(clear);
}
jQuery(document).ready(setup)
