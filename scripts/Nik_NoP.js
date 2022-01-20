var icon_img = 'https://jinqili0310.github.io/assets/nike/nike-logo.png'
var playAd = 0;
var bye = 0;
var sayBye// = setInterval(sayGoodbye, 600000);
var user_name = '';
var type_anim_on = 0;
console.log("ok");

var prescripted_questions = new Array();
var prescripted_mode = 0;
var cur_question_index = 0;
var bot_typing = 0;
var correct_answer='';


//bot-initiated dialogue
class Question {
	constructor(text, answers, next_questions, correct_answer_index) {
		this.text = text;
		this.answers = answers;
		this.next_questions = next_questions;
		this.correct_answer_index = correct_answer_index;
	}
}

function createQuestions() {

	prescripted_questions[0] = new Question(['How\’s your day going?'], ['I’m doing well 😃', 'It’s alright 😶','I need a nap 😏'], 1, 1)
	prescripted_questions[1] = new Question(['Okay. Let me cheer you up by showing you our awesome Nike products'], [""], 2, 0)
	prescripted_questions[2] = new Question(["https://jinqili0310.github.io/assets/nike/Nike%20GIF4.gif"], [""], 3, 0);
	prescripted_questions[3] = new Question(["How can I help today?"], ['New Releases', 'Shoes & Clothes', 'Shop by Sport', 'Our Commitment to the Athlete in You'], 4, 3);
	prescripted_questions[4] = new Question([ "What would you like to know more about?"], ['Our Mission 👊', 'Our Team 💯', 'Nike News 📑'], 5, 0);
	prescripted_questions[5] = new Question(["Our mission is to bring inspiration and innovation to every athlete in the world! And if you have a body (unlike me), you’re an athlete!"],[''], 6, 0);
	prescripted_questions[6] = new Question(["What else can I help you with?"], ['Nike News', 'Learn About Our Community Impact', 'Explore Our Product Lines', 'You’ve Answered My Question!'], 7, 1);
	prescripted_questions[7] = new Question(["At Nike, we believe in the power of sport to move the world! From the start, community has been at the core of who we are. With sport as a unifying force, we’re committed to helping everyone reach their greatest potential and creating an equal playing field for all!"], [''], 8, 0);
	prescripted_questions[8] = new Question(["Can I help you with anything else?"], ['Learn More About Our Community Impact', 'Nike News', 'Explore Our Product Lines', 'You Answered My Questions, I’m Good!'], 9, 2);
	prescripted_questions[9] = new Question(["What are you interested in?"], ['New Releases', 'Summer Essentials', 'Shop by Sport', 'Something Else!'], 10, 2);
	prescripted_questions[10] = new Question(["From basketball and soccer to tennis and training, we have you covered. We even have some new styles on sale that are up to 25% off! What else can I do for you?"], ['Specify Your Sport 🏈', 'Specify Your Product 👚', 'New Styles on Sale 🔥', 'That’s all!'], 11, 0);
	prescripted_questions[11] = new Question(["What sport do you want to explore?"], ['Running', 'Basketball', 'Soccer', 'Baseball or Softball', 'Tennis', 'Something Else! 😜'], 12, 2);
	prescripted_questions[12] = new Question(["In our soccer category, we offer cleats, clothing, training equipment, and club teams! How else can I help?"], ['I\'m all set.', 'I\'d like more help.'], -1, 0);
s
}

function askNextQuestion(answer_text) {
	//var pretext_needed = [4, 8];
	var questions = prescripted_questions[cur_question_index].text;
	var answer = prescripted_questions[cur_question_index].answers; // one number as index
	var next_question = prescripted_questions[cur_question_index].next_questions; //one number as index
	var correct_index = prescripted_questions[cur_question_index].correct_answer_index;

	if(answer_text == answer[correct_index]) {
		if(next_question > -1) {
			bot_typing = 1;
			var next_question_text = prescripted_questions[next_question].text;
			var text = next_question_text[0]; //only one question for this script
			var delay_time = 0;
			var delay_img = 7000;

			if(text.indexOf('gif') > -1) {
				//post gif
				image = text;
				postImage(image);
				delay_img = 1000;
				//console.log(image);
				/*setTimeout(function() {
					postImage(image);
				}, 5000);*/
			} else {
				//waitForBot = setInterval(typingAnim, 500);
				
				/*setTimeout(function() {
					postBotAnswer(text);
				}, 2000);*/
				var post_text = text;

				/*if (pretext_needed.includes(cur_question_index)) {
					post_text = pretext + post_text;
				}*/
				//console.log(i);
				//console.log(post_text);

				//postBotAnswer(post_text);

				// create node here to have typing animation
				var newNode = document.createElement("div");
		    	newNode.setAttribute("class", "chat_message_bot");
		    	var newImg = document.createElement("img");
		    	newImg.src = icon_img;
		    	newImg.setAttribute("width", "8%");
		    	newNode.appendChild(newImg);
		    	newNode.appendChild(document.createTextNode("  Bot is typing..."));
		    	var spaceHolderNode = document.getElementById("test");
		    	

		    	setTimeout(function() {
		    		document.getElementById("chat_box").insertBefore(newNode, spaceHolderNode);
		    		document.getElementById("chat_box").scrollTop = document.getElementById("chat_box").scrollHeight;
				}, 2000);


				if (text.split(' ').length > 22) { //long sentence
					delay_time = 6000;
					delay_img = 15000;
					setTimeout(function() {
						//postBotAnswer(post_text)
						newNode.childNodes[1].nodeValue="  " + post_text;
						var audio = new Audio('audio/Pling-KevanGC-1485374730.mp3');
						audio.play();
					}, 6000); //5000
				} else {
					delay_time = 4000;
					setTimeout(function() {
						//postBotAnswer(post_text)
						newNode.childNodes[1].nodeValue="  " + post_text;
						var audio = new Audio('audio/Pling-KevanGC-1485374730.mp3');
						audio.play();
					}, 4000);
				}
				setTimeout(function() {
					document.getElementById("chat_box").scrollTop = document.getElementById("chat_box").scrollHeight
				}, 6000);
			}
			
			cur_question_index = next_question;	

			if(prescripted_questions[cur_question_index].answers[0] == "") {
				//clearInterval(waitForBot);
				setTimeout(function() {
					askNextQuestion("");
				}, delay_img); //4000, 12000
			} else {
				setTimeout(function() {
					createButtonQuickReply(prescripted_questions[cur_question_index].answers, cur_question_index);
				}, delay_time);
				bot_typing = 0;
			}
				

		} else { //last closing chat
			bye = 1;
			setTimeout(function() {
				var outstring = "If you need anything else, feel free to stop by and chat anytime.";
				postBotAnswer(outstring);
			}, 2000);
		}
	}
}

function createButtonQuickReply(options, question_index) {
   // options is a string array
   
	var newNode = document.createElement("div");
	newNode.setAttribute("class", "chat_message_bot");
	
	options.forEach(function(answer) {
		var button = document.createElement('button');
		button.setAttribute('class', 'chat_button');
		button.innerHTML = answer;
		button.onclick = function() {
			//console.log(answer);
			//console.log(prescripted_questions[cur_question_index].answers[prescripted_questions[cur_question_index].correct_answer_index])
			if(answer == prescripted_questions[cur_question_index].answers[prescripted_questions[cur_question_index].correct_answer_index]) {
				document.getElementById("chat_box").removeChild(newNode);
				document.getElementById("user_input").value = answer;
				postUserInput();
			}
		};
		newNode.appendChild(button);
	});
	var spaceHolderNode = document.getElementById("test");
	document.getElementById("chat_box").insertBefore(newNode, spaceHolderNode);
	document.getElementById("chat_box").scrollTop = document.getElementById("chat_box").scrollHeight;	
}


function postImage(img_filename) {
	var newNode = document.createElement("div");
	newNode.setAttribute("class", "chat_message_bot");
	var newImg = document.createElement("img");
	newImg.src = img_filename;
	newImg.setAttribute("width", "60%");
	//newImg.setAttribute("align", "middle");
	newNode.appendChild(newImg);
	newNode.setAttribute("align", "middle");
	var spaceHolderNode = document.getElementById("test");
	//var height = newImg.getAttribute("height");
  	document.getElementById("chat_box").insertBefore(newNode, spaceHolderNode);
   	//document.getElementById("chat_box").scrollTop = document.getElementById("chat_box").scrollHeight;
   	setTimeout(function() {
		document.getElementById("chat_box").scrollTop = document.getElementById("chat_box").scrollHeight
	}, 500);
}

function postBotAnswer(text)
{
	//clearInterval(waitForBot);
	
	if (text!="") {
		var newNode = document.createElement("div");
    	newNode.setAttribute("class", "chat_message_bot");
    	var newImg = document.createElement("img");
    	newImg.src = icon_img;
    	newImg.setAttribute("width", "8%");
    	newNode.appendChild(newImg);
    	newNode.appendChild(document.createTextNode(" " + text));
    	var spaceHolderNode = document.getElementById("test");
    	document.getElementById("chat_box").insertBefore(newNode, spaceHolderNode);
    	document.getElementById("chat_box").scrollTop = document.getElementById("chat_box").scrollHeight;

    	var audio = new Audio('audio/Pling-KevanGC-1485374730.mp3');
		audio.play();
	}
	
	setTimeout(function() {
		document.getElementById("chat_box").scrollTop = document.getElementById("chat_box").scrollHeight
	}, 1000);
}

function postUserInput() 
{
    var newNode = document.createElement("div");
    newNode.setAttribute("class", "chat_message");
    var text = document.getElementById("user_input").value;
    
    user_input = text.toLowerCase();
    
    var valid_input = false;
    var wait_for_bot_response = false;


	if(user_name == "") {
		var input = text.split(" ");
		user_name = input[input.length-1];
		user_name = user_name.charAt(0).toUpperCase() + user_name.slice(1);


		setTimeout(function() {
			postBotAnswer("Hi, " + user_name + "! Nice to meet you 😊")
		}, 1000);

		//ask the first question
		setTimeout(function() {
			postBotAnswer(prescripted_questions[cur_question_index].text);
			createButtonQuickReply(prescripted_questions[cur_question_index].answers, 1);
			prescripted_mode = 1;
		}, 5000);
	
		valid_input = true;
	
	} else {
		if(bye == 0 && bot_typing == 0) {
			//if(text == correct_answer) {
			//	valid_input = true;
				setTimeout(function() {
					//wait_for_bot_response = true;
					askNextQuestion(text);
				}, 500);
		} 
	}

	//if(valid_input) {
		newNode.appendChild(document.createTextNode(text));
	    var spaceHolderNode = document.getElementById("test");
	    //document.getElementById("chat_box").appendChild(newNode);
	    document.getElementById("chat_box").insertBefore(newNode, spaceHolderNode);
	    document.getElementById("chat_box").scrollTop = document.getElementById("chat_box").scrollHeight;
	    document.getElementById("user_input").value = "";	
	//}
}

function displayBot()
{

	document.getElementById("chat_box").style.display = "block";
	document.getElementById("chat_input").style.display = "block";

	
	if(user_name == '') {
		setTimeout(function() {
		    postBotAnswer("Hi! I am Nike’s chatbot powered by artificial intelligence! What’s your name?")
		}, 500);
	}
}

function start() 
{
    document.getElementById("chat_box").style.display = "none";
    document.getElementById("chat_input").style.display = "none";
    setTimeout(displayBot, 5000); // display chat box after 5 seconds

    //pre-scripted questions
    createQuestions();
}

window.addEventListener("load", start, false);