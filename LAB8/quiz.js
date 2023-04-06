$(document).ready(function(){
     const correct = ["Artery", "Ascorbic acid", "Chlorophyll", "Egg-laying", "Capillaries"];
     const questions = ["Which of the following is a large blood vessel that carries blood away from the heart?","Which of the following is not a member of the vitamin B complex?","Fungi are plants that lack........", "What makes a reptile a reptile?", "Which blood vessels have the smallest diameter? "];
     const choice_options = [["Vein","Artery","Capillary","Nerve"],["Thiamine","Riboflavin","Folic acid","Ascorbic acid"],["Oxygen","Carbon dioxide","Chlorophyll","None of these"],["Cold-blooded","Warm-blooded","Non-Hearing", "Egg-laying"],["Capillaries","Arterioles","Venules", "Lymphatic"]];
     const answers = [];
 
     for (let i = 0; i < questions.length; i++) {
         const questionDiv = $("<div class='question" + (i + 1) + "'>");
         questionDiv.append("<p class='d'> Q" + (i + 1) + ". " + questions[i] + "</p>");
 
         for (let j = 0; j < choice_options[i].length; j++) {
             questionDiv.append("<label><input type='radio' name='q" + (i + 1) + "' value='" + choice_options[i][j] + "'>" + choice_options[i][j] + "</label>");
         }
 
         $("#quiz-box").append(questionDiv);
     }
 
     let countCorrect = 0;
     $("#quiz-box").on("click", ".button-3", function() {
         $(".correct").remove();
         $(".incorrect").remove();
         countCorrect = 0;
 
         for (let i = 0; i < questions.length; i++) {
             const selectedOption = $("input[name='q" + (i + 1) + "']:checked").val();
 
             if (selectedOption !== undefined) {
                 answers[i] = selectedOption;
 
                 if (selectedOption === correct[i]) {
                     $(".question" + (i + 1)).append("<div class='correct' style = 'color:green'>Correct</div>");
                     countCorrect++;
                 } else {
                     $(".question" + (i + 1)).append("<div class='incorrect' style = 'color:red'>Incorrect</div>");
                 }
             }
         }
         
         $("#score").html("Score: " + countCorrect + "/" + questions.length);
         $("#score").remove();
         $("#quiz-box").append ("<h2 id='score'>Result of the quiz is: " + countCorrect + "</h2>");
         countCorrect = 0;
     });
 });
