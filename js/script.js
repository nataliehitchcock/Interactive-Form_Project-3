//Setting up Variables//
const $jobTitle = $("#userTitle");
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
const $creditCardOption = $('#payment option[value="Credit Card"]').text();
const $paymentOption = $('#payment');
const $creditOption = $('#credit');
const $paypalOption = $('#paypalOption');
const $bitcoinOption = $('#bitcoinOption');
const $paypal = $('#paypal');
const $bitcoin = $('#bitcoin');
const $selectMethod = $('#selectMethod');
const $nameField = $('#name');
const $eMail = $('#mail');
const $creditCardNum = $('#cc-num');
const $zipCode = $('#zip');
const $cvv = $('#cvv');
const $form = $('form')
let totalCost = 0;

const totalCostDiv = document.createElement('div');
const emailHelperRealTimeSpan = document.createElement('span');
const helperSpanName = document.createElement('span');
const helperSpanEmailBlank = document.createElement('span');
const helperSpanEmailFormat = document.createElement('span');
const helperSpanOneActivity = document.createElement('span');
const helperSpanCCNumber = document.createElement('span');
const helperSpanCCZipCode = document.createElement('span');
const helperSpanCCcvv = document.createElement('span');

//Adding classes to the following DOM elements
$(totalCostDiv).addClass('total-cost');
$(emailHelperRealTimeSpan).addClass('helperText');
$(helperSpanName).addClass('helperText');
$(helperSpanEmailBlank).addClass('helperText');
$(helperSpanEmailFormat).addClass('helperText');
$(helperSpanOneActivity).addClass('helperText');
$(helperSpanCCNumber).addClass('helperText');
$(helperSpanCCZipCode).addClass('helperText');
$(helperSpanCCcvv).addClass('helperText');

//These items are hidden upon page load
$otherJobTitle.hide();
$tshirtColor.hide();
$paypalOption.hide();
$bitcoinOption.hide();

//Allows the cursor to be placed in the "Name" field upon page load
window.onload = () => {
  $nameField.focus();
}
//Job Role Section//

//Shows "Your Job Role" when the "Other" selection is made for Job Titles
$jobTitle.change( () => {
  const option = $jobTitle.find(':selected').text();
  if (option === 'Other') {
      $otherJobSection.show();
  }
});

//T-Shirt Section//
const $colorTomato = $('#color option[value="tomato"]');
    const $colorSteelBlue = $('#color option[value="steelblue"]');
    const $colorDimGrey = $('#color option[value="dimgrey"]');
    const $colorCornflowerBlue = $('#color option[value="cornflowerblue"]');
    const $colorDarkSlateGrey = $('#color option[value="darkslategrey"]');
    const $colorGold = $('#color option[value="gold"]');
    const $firstSelect = $('#color option:first');
    const $secondSelect = $('#color option[value="tomato"]');
    
    if (option === 'Theme - JS Puns') {
        $firstSelect.prop('selected', true);
        //When JS Puns is selected it should only show the colors: "Cornflower Blue," "Dark Slate Grey," and "Gold."
        $colorTomato.attr('hidden', true).attr('disabled', true);
        $colorSteelBlue.attr('hidden', true).attr('disabled', true);
        $colorDimGrey.attr('hidden', true).attr('disabled', true);
        $colorCornflowerBlue.attr('hidden', false).attr('disabled', false);
        $colorDarkSlateGrey.attr('hidden', false).attr('disabled', false);
        $colorGold.attr('hidden', false).attr('disabled', false);
        $colorOptions.show();
    } else if (option === 'Theme - I ♥ JS') {
        $secondSelect.prop('selected', true);
        //When I heart JS is selected it should only show the colors: "Tomato," "Steel Blue," and "Dim Grey."
        $colorCornflowerBlue.attr('hidden', true).attr('disabled', true);
        $colorDarkSlateGrey.attr('hidden', true).attr('disabled', true);
        $colorGold.attr('hidden', true).attr('disabled', true);
        $colorTomato.attr('hidden', false).attr('disabled', false);
        $colorSteelBlue.attr('hidden', false).attr('disabled', false);
        $colorDimGrey.attr('hidden', false).attr('disabled', false);
        $colorOptions.show();
    }

    //Function Validation//

    function isValidNameBlank(nameField){
      if (nameField === '') {
          return true;
      } else  {
          return false;
      }
  }
  function isValidEmailBlank(emailField) {
      if (emailField === '') {
          return true;
      } else {
          return false;
      }
  }
  function isValidEmail(emailField) {
      return /^[^@]+@[^@.]+\.[a-z]+$/i.test(emailField);
  }
  function isValidOneCheckbox(checkboxes) {
      for (i = 0; i < checkboxes.length; i++) {
          if (checkboxes[i].checked) {
              return true;
          } else {
              return false;
          }
      }
  }
  function isValidCreditCardNumber(ccField) {
  return  /^\d{13,16}$/.test(ccField);
  }
  function isValidCCZipcode(zipCodeField) {
      return /^\d{5}$/.test(zipCodeField);
  }
  function isValidCvv(cvvField) {
      return /^\d{3}$/.test(cvvField);
  }
 
  //Activities Section//
  
 //This does not allow the user to select multiple events for the same time slot
$activities.change( (event) => {
  const clicked = event.target;
  const $clickedTime = $(clicked).attr("data-day-and-time");
  const $clickedCost = parseInt($(clicked).attr("data-cost").replace("$", ""));

  //If an activity is selected/unselected add/subtract from Total Cost
  if (clicked.checked) {
      totalCost += $clickedCost;
      $activitiesSection.append($(totalCostDiv).text('Total Cost: $' + totalCost));
  } else {
      totalCost -= $clickedCost;
      $activitiesSection.append($(totalCostDiv).text('Total Cost: $' + totalCost));
  }
//Disable the option for users to select multiple time slots for the same day
for (let i = 0; i < $activities.length; i++) {
  const currentCheckbox = $activities[i];
  const currentCheckboxDayTime = $(currentCheckbox).attr("data-day-and-time");
  if (currentCheckboxDayTime === $clickedTime && currentCheckbox !== clicked) {
      if (clicked.checked) {
          $(currentCheckbox).prop('disabled', true);
      } else {
          $(currentCheckbox).prop('disabled', false);
      }
  }
}
});
//Payment Info/CC Section//
$paymentOption.change( (event) => {
  const option = event.target;
  const $optionValue = $(option).prop("value");

  //Payment Option Variables
  const $paypalOption = $('#payment option[value="PayPal"]').text();
  const $bitcoinOption = $('#payment option[value="Bitcoin"]').text();
  const $creditOption = $('#payment option[value="Credit Card"]').text();
  
  if ($optionValue === $paypalOption) {
      $creditOption.hide();
      $bitcoinOption.hide();
      $paypalOption.show();
  }

  if ($optionValue === $bitcoinOption) {
      $creditOption.hide();
      $paypalOption.hide();
      $bitcoinOption.show();
  }

  if ($optionValue === $creditOption) {
      $paypalOption.hide();
      $bitcoinOption.hide();
      $creditOption.show();
  }

});

//Prompts user that email needs to be in the correct format (ex: dave@teamtreehouse.com)

$eMail.on('input', (event) => {
  const text = event.target.value;
  if (isValidEmail(text)) {
      $eMail.after($(emailHelperRealTimeSpan).text(''));

  } else {
      $eMail.after($(emailHelperRealTimeSpan).text('Email field must be in valid email format. Example: "name@email.com"'));
      $eMail.after($(helperSpanEmailBlank).text(''));
      $eMail.after($(helperSpanEmailFormat).text(''));
  }
});

//Prompts user to enter their name
$form.on('submit', (event) => {
    
  //If name field is blank prevent submit and show error message
  if (isValidNameBlank($nameField.val())) {
      event.preventDefault();
      $nameField.after($(helperSpanName).text('Please enter your name.'));
      $nameField.addClass('input-border-red');
  } else {
      $nameField.after($(helperSpanName).text(''));
      $nameField.removeClass('input-border-red');


  }

// If email field is blank prevent submit and show error message 
if (isValidEmailBlank($eMail.val())) {
  event.preventDefault();
  $eMail.after($(helperSpanEmailBlank).text('Email field cannot be blank.'));
  $eMail.after($(emailHelperRealTimeSpan).text(''));
  $eMail.addClass('input-border-red');
} else if (!isValidEmailBlank($eMail.val()) && !isValidEmail($eMail.val())) {
  event.preventDefault();
  $eMail.after($(helperSpanEmailFormat).text('Email field must be in valid email format. Example: "name@email.com'));
  $eMail.after($(emailHelperRealTimeSpan).text(''));
  $eMail.addClass('input-border-red');        
} else {
  $eMail.after($(helperSpanEmailBlank).text(''));
  $eMail.after($(helperSpanEmailFormat).text(''));
  $eMail.removeClass('input-border-red');
}

//Prompts user to select an activity and if they don't show error message
if (isValidOneCheckbox($activities)) {
  $activities.append($(helperSpanOneActivity).text(''));
} else {
  event.preventDefault();
  $activities.append($(helperSpanOneActivity).text('You must select at least one activity.'));
}

//Credit Card needs to be between 13-16 digits 
if ($paymentOption.val() === $cardInfo) {
//Credit Card format between 13 and 16 digits. If it doesn't match prevent submit 
  if (isValidCreditCardNumber($creditCardNumberField.val())) {
      $creditCardNumberField.after($(helperSpanCCNumber).text(''));
      $creditCardNumberField.removeClass('input-border-red');
  } else {
      event.preventDefault();
      $creditCardNumberField.after($(helperSpanCCNumber).text('Credit Card number must be between 13 and 16 digits.'));
      $creditCardNumberField.addClass('input-border-red');
  }
   //Zipcode needs to be 5 digits. If it isn't prevent submit
   if (isValidCCZipcode($zipCode.val())) {
    $zipCode.after($(helperSpanCCZipCode).text(''));
    $zipCode.removeClass('input-border-red');
} else {
    event.preventDefault();
    $zipcode.after($(helperSpanCCZipCode).text('Zip Code must be 5 digits'));
    $zipCode.addClass('input-border-red');
}

 //CVV must be 3 digits. If not then prevent submit
 if (isValidCvv($cvv.val())) {
  $cvv.after($(helperSpanCCcvv).text(''));
  $cvv.removeClass('input-border-red');
} else {
  event.preventDefault();
  $cvv.after($(helperSpanCCcvv).text('CVV must be 3 digits.'));
  $cvv.addClass('input-border-red');
}
}
});

//Sets CC as default payment option
$('#payment option[value="Credit Card"]').prop('selected', true);

//Disables "Select Payment Option" from the drop down list
$('#payment option[value="select method"]').prop('disabled', true);

