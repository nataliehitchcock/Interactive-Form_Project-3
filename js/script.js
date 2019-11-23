//Setting up Variables//
const $jobTitle = $("#userTitle");
const $otherJobTitle = $("#other-title");
const $shirtDesign = $("#design");
const $shirtColor = $("#colors-js-puns");
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

// Hides "other" job text field upon load
$otherJobTitle.hide();

// Text field that will be revealed when the "other" option is selected from the "Job Role" drop down menu.
$($jobTitle).change(function() {
  if ($jobTitle.val() === "other") {
    $otherJobTitle.show();
    } else {
    $otherJobTitle.hide();
  }
});

// Disables "Select Job Role" in the select menu
$(function() {
    $selectJob.prop("disabled", true);
});

// Hides the shirt color option upon load
$shirtColor.hide();

// T-shirt Section
// If the user selects "Theme - JS Puns"- the color menu should only display "Cornflower Blue," "Dark Slate Grey," and "Gold."
// If the user selects "Theme - I ♥ JS" - the color menu should only display "Tomato," "Steel Blue," and "Dim Grey."
// When a new theme is selected from the "Design" menu, the "Color" field and drop down menu is updated.
$($shirtDesign).change(function() {
  if ($shirtDesign.val() === "js puns") {
    $shirtColor.show();
    $('#color option[value="cornflowerblue"]').show();
    $('#color option[value="darkslategrey"]').show();
    $('#color option[value="gold"]').show();
    $('#color option[value="tomato"]').hide();
    $('#color option[value="steelblue"]').hide();
    $('#color option[value="dimgrey"]').hide();
  } else if ($shirtDesign.val() === "heart js") {
    $shirtColor.show();
    $('#color option[value="tomato"]').show();
    $('#color option[value="steelblue"]').show();
    $('#color option[value="dimgrey"]').show();
    $('#color option[value="cornflowerblue"]').hide();
    $('#color option[value="darkslategrey"]').hide();
    $('#color option[value="gold"]').hide();
  }
});

//Disables "Select Theme" in the select menu
$(function() {
    $selectTheme.prop("disabled", true);
});


//Register for Activities Section

// JavaScript Frameworks Workshop
$frameworks.change(function() {
    if($(this).is(':checked')){
      $express.prop('disabled', true);
    } else {
      $express.prop('disabled', false);
    }
  });
  
  // JavaScript Libraries Workshop
  $jsLibs.change(function() {
    if($(this).is(':checked')){
      $node.prop('disabled', true);
    } else {
      $node.prop('disabled', false);
    }
  });
  
  // Express Workshop
  $express.change(function() {
    if($(this).is(':checked')){
      $frameworks.prop('disabled', true);
    } else {
      $frameworks.prop('disabled', false);
    }
  });
  
  // Node.js Workshop
  $node.change(function() {
    if($(this).is(':checked')){
      $jsLibs.prop('disabled', true);
    } else {
      $jsLibs.prop('disabled', false);
    }
  });

//Created a new div to display total
$activities.append('<br><div class="totalDiv"><label name="total-to-pay" class="totalCost">Total: </label></div>');
$activities.append('<br><div class="error"><font color="#ff0000">Please select at least one activity.</div>');

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

  //Credit Card Section

  