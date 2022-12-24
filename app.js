
function getAverageWordLength(tokens){
	let totalLength = tokens.join('').length;
	return (totalLength/tokens.length).toFixed(2);
}

function countUniqueWords(tokens){
	let uniqueWordsNum = new Set(tokens);
	return uniqueWordsNum.size;
}

// Tokenize Text 
/* 
	Tokenization is the process of turning a meaningful piece of data,
 	into a random string of characters called a token 
 	that has no meaningful value if breached. 
*/

function tokenizeText(text){
	return text.toLowerCase().match(/\b[^d\s]+\b/g);
}

function removeReturns(text) {
  return text.replace(/\r?\n|\r/g, "");
}

function reportOnText(text){
	// Tokenize input and Compute data points

	let tokens = tokenizeText(text);
	let numWordsTotal = tokens.length;
	let numUniqueWords = countUniqueWords(tokens);
	let numWordAverage = getAverageWordLength(tokens);

	// Display data in the DOM 

	let textReport = $('.js-text-report');
	textReport.find('.js-word-count').text(numWordsTotal);
	textReport.find('.js-unique-word-count').text(numUniqueWords);
	textReport.find('.js-average-word-length').text(numWordAverage);
	textReport.removeClass('hidden');

}

function onFormSubmit(){
	$('.js-text-form').submit(function(event){
		event.preventDefault();

		// Get user input
		let userInput = $(this).find('#user-text').val();
		reportOnText(removeReturns(userInput));
	});
}


$(function() {
  onFormSubmit();
});

//Count Words
//Count Unique Words
//Count Average Word Length
//Tokenize Input
//Report Input
//Action on Form Submission