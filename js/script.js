/Setting up Variables//
const $jobTitle = $("#title");
const $otherJobTitle = $("#other-title");
const $tshirtDesign = $("#design");
const $tshirtColor = $("#colors-js-puns");
const $classes = $("#classes");
const $selectJob = $('#select-job');
const $selectTheme = $('#select-theme');
const $activities = $(".activities");
const $frameworks = $('input[name="js-frameworks"]');
const $jsLibs = $('input[name="js-libs"]');
const $express = $('input[name="express"]');
const $node = $('input[name="node"]');
const $buildTools = $('input[name="build-tools"]');
const $npm = $('input[name="npm"]');
const $roles = ('.roles');
const $cardInfo = $('#credit-card');
const $paymentOption = $('#payment');
const $creditOption = $('#credit');
const $paypaloption = $('#paypalOption');
const $bitcoinOption = $('#bitcoinOption');
const $paypal = $('#paypal');
const $bitcoin = $('#bitcoin');
const $selectMethod = $('#selectMethod');
const $name = $('#name');
const $eMail = $('#mail');
const $creditCardNum = $('#cc-num');
const $zipCode = $('#zip');
const $cvv = $('#cvv');
const $submit = $('#submitButton');
let isNameValid = false;
let isEmailValid = false;
let isJobTitleValid = false;
let isCheckboxValid = false;
let isCreditCardValid = false;
let isZipValid = false;
let isCvvValid = false;
//Job Role Section//
//This sets the curser to the first input on page load
window.onload = () => {
  $name.focus();
}
// Hidden items upon page load (Other Job Title, T-Shirt Color, Paypal and Bitcoin)
$otherJobTitle.hide();
$tshirtColor.hide();
 $paypal.hide();
 $bitcoin.hide();
 
// Text field that will be revealed when the "Other" option is selected from the "Job Role" drop down menu.
$(jobTitle).change(() => {
  if (jobTitle.val().toLowerCase() === 'other') {
    $otherJobTitle.show();
  } else {
    otherJobTitle.hide();
  }
});
// Disables "Select Job Role" in the select menu
$(function() {
    $selectJob.prop("disabled", true);
});
//Disables Themes from T-Shirt Menu
$selectTheme.prop("disabled", true);
//Disables "Select Payment Method" in "Select" menu
  $selectMethod.prop("disabled", true);
// T-shirt Section//
// If the user selects "Theme - JS Puns"- the color menu should display the following: "Cornflower Blue," "Dark Slate Grey," and "Gold."
// If the user selects "Theme - I :hearts: JS" - the color menu should display the following: "Tomato," "Steel Blue," and "Dim Grey."
// When a new theme is selected from the "Design" menu, the "Color" field and drop down menu is updated.
const designSelector = $("select[id='design']");
const colorSelector = $("select[id='color']");
const colorMenu = $("#colors-js-puns");
colorMenu.hide();
$("<option>Please select a T-shirt theme</option>").appendTo(colorSelector);
colorSelector.find('option:contains("Please")').attr("selected", true);
colorSelector.prop("disabled", true);
// When design dropdown is changed
designSelector.change(() => {
  // Disables Select Theme as option
  designSelector.find('option:contains("Select")').attr("disabled", true);
  const selectedOption = $("select[id='design'] option:selected").text();
  // User changes from default
  if (selectedOption !== "Select Theme") {
    colorMenu.show();
    colorSelector.prop("disabled", false); // Enable
    colorSelector.find('option:contains("Please")').remove();
    // User chooses theme 'JS Puns'
    if (selectedOption == "Theme - JS Puns") {
      $("option[value='cornflowerblue']")
        .show()
        .attr("selected", true);
      $("option[value='darkslategrey']").show();
      $("option[value='gold']").show();
      $("option[value='tomato']")
        .hide()
        .attr("selected", false);
      $("option[value='steelblue']").hide();
      $("option[value='dimgrey']").hide();
    }
    // User chooses theme 'I love JS'
    else if (selectedOption == "Theme - I :hearts: JS") {
      $("option[value='cornflowerblue']")
        .hide()
        .attr("selected", false);
      $("option[value='darkslategrey']").hide();
      $("option[value='gold']").hide();
      $("option[value='tomato']")
        .show()
        .attr("selected", true);
      $("option[value='steelblue']").show();
      $("option[value='dimgrey']").show();
    }
  }
});
//Register for Activities Section//
// JavaScript Frameworks 
$frameworks.change(function() {
    if($(this).is(':checked')){
      $express.prop('disabled', true);
    } else {
      $express.prop('disabled', false);
    }
  });
  
  // JavaScript Libraries 
  $jsLibs.change(function() {
    if($(this).is(':checked')){
      $node.prop('disabled', true);
    } else {
      $node.prop('disabled', false);
    }
  });
  
  // Express 
  $express.change(function() {
    if($(this).is(':checked')){
      $frameworks.prop('disabled', true);
    } else {
      $frameworks.prop('disabled', false);
    }
  });
  
  // Node.js 
  $node.change(function() {
    if($(this).is(':checked')){
      $jsLibs.prop('disabled', true);
    } else {
      $jsLibs.prop('disabled', false);
    }
  });

//Created a new div to display total
$activities.append('<br><div class="totalDiv"><label name="total-due" class="totalCost">Total: </label></div>');
$activities.append('<br><div class="error"><font color="#FF0000">Please select an activity.</div>');
const $totalDiv = $(".totalDiv");
const $totalCost = $(".totalCost");
let $total = 0;
const $error = $(".error");
// Hide the div on load
$totalDiv.hide();
$error.hide();
//Add total cost
$('input:checkbox').on('change', function() {
      if ($(this).is(':checked')) {
        $totalDiv.show();
        $total += +this.value;
        $totalCost.html('Total: $' + parseInt($total));
        $error.hide();
      } else if ($(this).not(':checked')) {
        $total -= +this.value;
        $totalCost.html('Total: $' + parseInt($total));
      }
    });
  //Credit Card/Payment Section//
  //Allows for the Credit Card payment option to be selected by default
  $paymentOption[0].selectedIndex = 1;
  //This displays payment sections based on payment option chosen in "Select" menu
  //Credit for this section is given to both Megan Katherine O'Brien for suggesting the event listener and Christine Treacy for helping me with the code itself.
const $payment = $('#payment');
const $paymentOptions = $('#payment option');
$paymentOptions.eq(0).hide();
$paymentOptions.eq(1).prop('selected',true);
let $paymentSel = $("#payment option:selected").val();
$payment.on('change',function(event){
    if ($(event.target).val()=== 'Credit Card'){
        $('#credit-card').show();
        $('#paypal').hide();
        $('#bitcoin').hide();
    } else if ($(event.target).val()=== 'PayPal'){
        $('#credit-card').hide();
        $('#paypal').show();
        $('#bitcoin').hide();
    } else {
        $('#credit-card').hide();
        $('#paypal').hide();
        $('#bitcoin').show();
    }
   $paymentSel = $(event.target);
})
 //Form Validation
//This section prompts the user to enter their name, the name field cannot be blank
$name.focusout(function(e) {
  if ($name.val() === "") {
    isNameValid = false;
    $name.css({backgroundColor: '#FF6666', border: "2px solid #FF0000"}).attr({placeholder: 'Please enter your name.'});
} else if ($(this).val() > "0") {
  isNameValid = true;
  $name.css({backgroundColor: '#99E699', border: "2px solid #33CC33"}).removeAttr({placeholder: 'Please enter your name.'});
}
});
//Email field needs to be formatted like a real email address ex: dave@teamtreehouse.com
$eMail.focusout(function(e) {
  let $emailVal = $('#mail').val();
  let $emailReg = new RegExp('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+[.][a-zA-Z]{2,5}$');
    if (!$emailReg.test($emailVal)) {
      isEmailValid = false;
      $eMail.css({backgroundColor: '#FF6666', border: "2px solid #FF0000"}).attr({placeholder: 'Please enter a valid email address.'});
    } else {
      isEmailValid = true;
      $eMail.css({backgroundColor: '#99E699', border: "2px solid #33CC33"}).removeAttr({placeholder: 'Please enter a valid email address.'});
    }
  });
  //The Credit Card field should only accept a number that is between 13-16 digits
  $creditCardNum.focusout(function(e) {
    let $creditVal = $('#cc-num').val();
    let $cardReg = new RegExp('^\\d{13,16}$');
      if(!$cardReg.test($creditVal)) {
        isCreditCardValid = false;
        $creditCardNum.css({backgroundColor: '#FF6666', border: "2px solid #FF0000"}).attr({placeholder: 'Please enter a number that is between 13 and 16 digits long.'});
      } else {
        isCreditCardValid = true;
        $creditCardNum.css({backgroundColor: '#99E699', border: "2px solid #33CC33"}).removeAttr({placeholder: 'Please enter a number that is between 13 and 16 digits long.'});
      } 
    });
  
//If either Bitcoin or Paypal are selected, form submission is still allowed
    $($paymentOption).change(function() {
      if ($paymentOption.val() == "paypal" || "bitcoin") {
        isCreditCardValid = true;
        isZipValid = true;
        isCvvValid = true;
      } 
    });
    //Zip code should only be 5 digits
    $zipCode.focusout(function(e) {
      let $zipVal = $('#zip').val();
      let $zipReg = new RegExp('^\\d{5}$');
        if (!$zipReg.test($zipVal)) {
          isZipValid = false;
          $zipCode.css({backgroundColor: '#FF6666', border: "2px solid #FF0000"}).attr({placeholder: 'Please enter a zip code that is 5 digits long.'});
        } else {
          isZipValid = true;
          $zipCode.css({backgroundColor: '#99E699', border: "2px solid #33CC33"}).removeAttr({placeholder: 'Please enter a zip code that is 5 digits long.'});
        }
      });
    //CVV should only be 3 digits
  $cvv.focusout(function(e) {
    let $cvvVal = $('#cvv').val();
    let $cvvReg = new RegExp('^\\d{3}$');
      if(!$cvvReg.test($cvvVal)) {
        isCvvValid = false;
        $cvv.css({backgroundColor: '#FF6666', border: "2px solid #FF0000"}).attr({placeholder: 'Please enter a CVV that is 3 digits long.'});
      } else {
        isCvvValid = true;
        $cvv.css({backgroundColor: '#99E699', border: "2px solid #33CC33"}).removeAttr({placeholder: 'Please enter a CVV code that is 3 digits long.'});
      }
    });
    $('button').on('click', function(e){ 
      
      // The user needs to select at least one checkbox under the "Register for Activities" section 
    if($('.activities input:checkbox:checked').length < 1) {
      e.preventDefault();
      isCheckboxValid = false;
      $error.show();
    } else {
      isCheckboxValid = true;
    } 
    if (!isNameValid || !isEmailValid || !isCheckboxValid || !isCreditCardValid || !isZipValid || !isCvvValid) {
      e.preventDefault();
      if (!isNameValid) {$name.css({backgroundColor: '#FF6666', border: "2px solid #FF0000"}).attr({placeholder: 'Please enter your name'})};
      if (!isEmailValid) {$eMail.css({backgroundColor: '#FF6666', border: "2px solid #FF0000"}).attr({placeholder: 'Please enter a valid email address'})};
      if (!isCreditCardValid) {$creditCardNum.css({backgroundColor: '#FF6666', border: "2px solid #FF0000"}).attr({placeholder: 'Credit Card Number needs to be 13-16 digits'})};
      if (!isZipValid) {$zipCode.css({backgroundColor: '#FF6666', border: "2px solid #FF0000"}).attr({placeholder: ' Zip Code should be 5 digits'})};
      if (!isCvvValid) {$cvv.css({backgroundColor: '#FF6666', border: "2px solid #FF0000"}).attr({placeholder: 'CVV should be 3 digits'})};
    }
    });