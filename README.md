# Milk_Bottles
MVP:
    an hbs for home, question (including form), result.
    question.hbs accepts data from the database depending on the /:id of the URL in order to display the relevent question, 
    form submission is then updated to that same row (based on ID)
    
    5 questions per pair

    db accepts id, question, answer A,answer B,answer C,answer D, and selected_answer (check db)

    after each question is answered, add to a 'let tally = 0' based on the answer (e.g a = 10, b = 5, c = 3, d = 1) <= to be decided, needs to allow for variation in answer
        if tally is between X and Y then display "you are a ___" else if tally is between Z and V then display "you are a ___" on results page


stretch:
    display list of selected answers on results page

    implement different media types into questions such as audio files and pictures


*** some of this is my (james) interpretation of our discussion on thursday evening and can be changed when we get together tomorrow