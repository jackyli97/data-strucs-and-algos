function decrypt(word) {
  // your code goes here
}

/*
Decrypted message:	c	r	i	m	e
Step 1:	99	114	105	109	101
Step 2:	100	214	319	428	529
Step 3:	100	110	111	116	113
Encrypted message: d n o t q


 Steps:
  -convert the input into asci
    100	110	111	116	113
    
    -If first letter is === 97, then add 26, subtract 1
    -Else subtract 1
  
  100 
   99	110	111	116	113
      -added 100 to something and continuosly subtracted 26 to arrive at 110
      
      110 - 100 = 10 
      
      97 - 1 = 96 + 26 
      
      
 // dont mutate input
 
 // create an array for output
 
 // iterate through input
    encrpyt first letter by -1
     check if that number is in range,
     while loop until that number is in range, by continuosly adding 26
   for next indexes, do the same but instead you want to
   save the value of the prev ele in the input and subtract by that isntead of 1
   once while loop is done for respective iteration, push that final val into result array
   
   at the end, return the joined version of the arry

// lowercase -> 97-122

*/
