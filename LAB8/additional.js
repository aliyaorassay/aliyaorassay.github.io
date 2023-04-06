$(document).ready(function(){
    correct = ["Artery", "Ascorbic acid", "Chlorophyll", "Egg-laying", " Capillaries"];
    questions = ["Which year Nazarbayev University was founded?","Which year Nazarbayev University was founded?"]
    choice_options = [["2009","2010","2011","2012"],["2009","2010","2011","2012"]]
    
    // Generate quiz questions
    // ...
    
//     quizBox = document.getElementById ("quiz-box"); // JS way
    quizBox = $("#quiz-box"); // Jquery
    countCorrect = 0;
    quizBox.append ("<div class='question1'>"); 
    $('.question1').append ("<p class='d'> Q1. Which of the following is a large blood vessel that carries blood away from the heart? </p>");
    $('.question1').append ("<label><input type='radio' name='q1' value='a'>Vein</label>")
    $('.question1').append ("<label><input type='radio' name='q1' value='a'>Artery</label>")
    $('.question1').append ("<label><input type='radio' name='q1' value='a'>Capillary</label>")
    $('.question1').append ("<label><input type='radio' name='q1' value='a'>Nerve</label>")
    
 
    quizBox.append ("<div class='question2'>"); 
    $('.question2').append ("<p class='d'> Q2. Which of the following is not a member of the vitamin B complex? </p>");
    $('.question2').append ("<label><input type='radio' name='q2' value='a'>Thiamine<label>")
    $('.question2').append ("<label><input type='radio' name='q2' value='a'>Riboflavin</label>")
    $('.question2').append ("<label><input type='radio' name='q2' value='a'>Folic acid</label>")
    $('.question2').append ("<label><input type='radio' name='q2' value='a'>Ascorbic acid</label>")

     
    quizBox.append ("<div class='question3'>"); 
    $('.question3').append ("<p class='d'> Q3. Fungi are plants that lack........ </p>");
    $('.question3').append ("<label><input type='radio' name='q3' value='a'>Oxygen<label>")
    $('.question3').append ("<label><input type='radio' name='q3' value='a'>Carbon dioxide</label>")
    $('.question3').append ("<label><input type='radio' name='q3' value='a'>Chlorophyll</label>")
    $('.question3').append ("<label><input type='radio' name='q3' value='a'>None of these</label>")

    quizBox.append ("<div class='question4'>"); 
    $('.question4').append ("<p class='d'> Q4. What makes a reptile a reptile? </p>");
    $('.question4').append ("<label><input type='radio' name='q4' value='a'>Cold blooded<label>")
    $('.question4').append ("<label><input type='radio' name='q4' value='a'>Warm Blooded</label>")
    $('.question4').append ("<label><input type='radio' name='q4' value='a'>Non-Hearing</label>")
    $('.question4').append ("<label><input type='radio' name='q4' value='a'>Egg-laying</label>")

    quizBox.append ("<div class='question5'>"); 
    $('.question5').append ("<p class='d'> Q5. Which blood vessels have the smallest diameter? </p>");
    $('.question5').append ("<label><input type='radio' name='q5' value='a'>Capillaries<label>")
    $('.question5').append ("<label><input type='radio' name='q5' value='a'>Arterioles</label>")
    $('.question5').append ("<label><input type='radio' name='q5' value='a'>Venules</label>")
    $('.question5').append ("<label><input type='radio' name='q5' value='a'>Lymphatic</label>")


    $(".button-3").click (function (event){
          $("#corq1").remove();
          $("#corq2").remove();
          $("#corq3").remove();
          $("#corq4").remove();
          $("#corq5").remove();

         $("input[name=q1]").each (function (index){
                choice = $(this).parent().text(); 
                if ($( this ).prop("checked") == true && correct [0] == choice){
                     countCorrect += 1;
                     $('.question1').append("<div id = 'corq1' style = 'color:green'>Correct</div>");
                } else if($( this ).prop("checked") == true && correct [0] != choice){
                    $('.question1').append("<div id = 'corq1' style = 'color:red'>Incorrect</div>");
                }
         });
         $("input[name=q2]").each (function (index){
               choice = $(this).parent().text(); 
               if ($( this ).prop("checked") == true && correct [1] == choice){
                    countCorrect += 1;
                    $('.question2').append("<div id = 'corq2' style = 'color:green'>Correct</div>");
               } else if($( this ).prop("checked") == true && correct [1] != choice){
                    $('.question2').append("<div id = 'corq2' style = 'color:red'>Incorrect</div>");
                }
          });
          $("input[name=q3]").each (function (index){
               choice = $(this).parent().text(); 
               if ($( this ).prop("checked") == true && correct [2] == choice){
                    countCorrect += 1;
                    $('.question3').append("<div id = 'corq3' style = 'color:green'>Correct</div>");
               } else if($( this ).prop("checked") == true && correct [2] != choice){
                    $('.question3').append("<div id = 'corq3' style = 'color:red'>Incorrect</div>");
               }
          });
          $("input[name=q4]").each (function (index){
               choice = $(this).parent().text(); 
               if ($( this ).prop("checked") == true && correct [3] == choice){
                    countCorrect += 1;
                    $('.question4').append("<div id = 'corq4' style = 'color:green'>Correct</div>");
               } else if($( this ).prop("checked") == true && correct [3] != choice){
                    $('.question4').append("<div id = 'corq4' style = 'color:red'>Incorrect</div>");
               }
          });

          $("input[name=q5]").each (function (index){
               choice = $(this).parent().text(); 
               if ($( this ).prop("checked") == true && correct [4] == choice){
                    countCorrect += 1;
                    $('.question5').append("<div id = 'corq5' style = 'color:green'>Correct</div>");
               } else if($( this ).prop("checked") == true && correct [4] != choice){
                    $('.question5').append("<div id = 'corq5' style = 'color:red'>Incorrect</div>");
               }
          });

   




     $("#score").remove();
    $("#quiz-box").append ("<h2 id='score'>Result of the quiz is: " + countCorrect + "</h2>");
    countCorrect = 0;
    }); 
    

});