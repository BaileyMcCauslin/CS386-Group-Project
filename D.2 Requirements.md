# 1. Positioning
 > * Problem statement:
  The problem of inefficient media procurement affects many college students; the impact of which is that many people spend a very large amount of time        looking at gifs and Memes that they do not like, just so they can find one they do like.

 > * Product Position Statement:
  For college students who like to use gifs and Memes, GifMachine is a image procurement app that uses machine learning to figure out what category of media a user wants, and supplies it to them without the need for the user to navigate through search bars and large lists of results; unlike Giphy, our product does not rely on users entering keywords to find gifs, and helps them find what they are looking for when they do not know exactly what they want.

 > * Value proposition:
  Gifmachine is an image procurement app that allows college students to find gifs and memes to find gifs and memes more efficiently, providing them with gifs and memes that they want without forcing them to scroll through long lists of images.
  
 > * Consumer segment: College students who often send gifs and memes through messages and social media.

# 2. Stakeholders

 > * College Students: College students often use gifs and memes in social media conversations, so they want to find and send gifs and memes quickly.
 > * Developers: Develop the application, from the machine learning model to the front-end website. The developers may also use the application, serve as testers, work on debugging, and even manage the project.
 > * Competitors: Our main competitor is Giphy, as that is the most commonly used site for getting gifs at the moment. The integrated gif keyboard that is provided by iMessage also serves as competition.
 > * Testers: Testers will be college students who are given early access to our product. Their job is to try to break out product, provide feedback on their results, and use the product before others. Their feedback will be crucial to see what works and what does not before our launch.


# 3. Functional requirements (features)

  > * Accuracy - Our product must provide images to the testers/users that match their needs at least 85% of the time.
  > * Efficiency - At least 90% of our testers/users should feel that the matches the speed of their social media messaging, allowing them to send gifs/memes at the speed of their conversations.
  > * Security (if we use accounts) - At least 95% of testers/users feel comfortable with the level of security we use to protect their data (i.e. hashing passwords)
  > * Usability - At least 85% of our users/testers find the application is easy to navigate and use.
  > * Sharability - At least 95% of our users/testers find that it is easy to send gifs/memes found on our site to others.
  > * Documentation - At least 95% of experienced software engineers find that our code and software architecture is well documented and easy to follow.
  > * Reachability - Our website will accept requests from 99% of users/testers, meaning that we will never go down.

# 4. Non-functional requirements

> * Reusability - We want to make sure that the user can reuse the web application without it breaking and getting stale for the user. To test this we will use the    application everyday for a week to see if the reusability is an issue. 
> * Reliability - We want the application to be reliable for the user so it’s not frustrating for the user to use.  If the web app is not reliable the user will most likely use it to avoid frustration. To test this we all test the application at once to see if it crashes/performance issues. 
> * Safety - We want to make sure that the user is protected from any sort of security breaches. We will be hashing the user credentials and storing them in firebase. To test that the website is secure we will make sure that the base security measures are intact and aren’t easy to crack. 

# 5. MVP <br>
> Our MVP will be a web page that delivers login, sign up, UI, meme delivery, and machine learning algorithm to determine users preferences for content. We will verify all of these features besides the UI (No real need to test  visual components). To test login we will stress test many different scenarios, especially when a user enters incorrect credentials, does not have an account, and doesn’t have a connection. To test the sign up we also test many different configurations of emails and passwords( invalid and valid ones ) and test that it doesn’t allow for the same emails. To test the machine learning algorithm we will stress test it with a lot of different preferences and see the accuracy. We will also feed it skewed data that doesn't really make sense to see how it interacts.