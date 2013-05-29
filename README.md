monitise
========
README FILE


I DIDNT WANT TO FOCUS ON THE CSS DESIGN SO MUCH, I WANTED TO PUT MY ATTENTION MORE ON THE FUNCTIONALITY. 

IN TERMS, OF OOP; I DEF UNDERSTOOD THEM AND AS I STARTED TO DEVELOP MORE AND MORE, I BEGAN TO UNDERSTAND WHAT I REALLY WANTED TO DO BUT I RAN OUT OF TIME. 

I WANTED TO CREATE MESSAGES OBJECT THAT IS ESENTIALLY AN ARRAY THAT HOLD THREE ITMES (USER, TEXT, TIME). EACH TIME A USER SEND A MESSAGES, THE ARRAY IS PUSHED TO THE OBJECT TO KEEP TRACK OF EACH MESSAGES, USERS ASSOCIATED WITH THAT MESSAGE AND THE TIMESTAMP. 

I GOT TO THE POINT OF UNDERSTANDING WHAT I WANTED TO DO AND HOW I WAS GOING TO DO IT , BUT I RAN OUT OF TIME AND INSTEAD JUST WANTED TO MAKE SURE THE EVENT MODEL IS GOOD TO GO. 

I DID NOT USE ANY FRAMEWORKS 

---------------------------------------------------------------------------------------------------------------

So after submitting the code, I asked Kevin if I could just revisit this file and write what I wanted to do after thinking about it. 

So essentially I created a messages object which contains user, text and time. Everytime the user enters text and clicks the send button, an object is created and then added onto an array which holds all of the messages sent in one session. 
Hence, each message is associated with a user and time and what is written in that message as well as associating a session with all the messages sent between the two users. 

So far right now, the code that I wrote displays the new messages by default (old to new; top to bottom) but having this array, we can sort based on time and display it from old to new order in a much more semantic way rather than the way that I just did it.  Also, each message object should be associated with an ID which I dod not add but if we were to add the message objects to a server, it would need an ID (or server would automaticlaly create one for us) so we can differentiate between all of the message much easier. 

I did not want to focus too much on the design because I felt the core was much more important given the 2 hour time slot. I added different colors on the time, user and text strings only to differentiate between each one of them; there are way better steps to display them nicely but I didnt have the time to do so. 
I hope this helps a little bit. 
