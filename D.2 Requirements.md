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
 > * Testers: Testers will be college students who are given early access to our product. Their job is to try to break our product, provide feedback on their results, and use the product before others. Their feedback will be crucial to see what works and what does not before our launch.


# 3. Functional requirements (features)

  > * Gifs can be shared to others by the user
  > * An account can be created by the user
  > * An account can be logged into by the user
  > * Gifs can be viewed by the user
  > * The next of previous gif can be viewed by the user
  > * A survey can be completed to determine gif preferences by the user
  > * The survey can be recompleted by the user

# 4. Non-functional requirements

> * Accuracy - Our product must provide images to the testers/users that match their needs at least 85% of the time.
> * Efficiency - At least 90% of our testers/users should feel that the matches the speed of their social media messaging, allowing them to send gifs/memes at the speed of their conversations.
> * Security (if we use accounts) - At least 95% of testers/users feel comfortable with the level of security we use to protect their data (i.e. hashing passwords)
> * Usability - At least 85% of our users/testers find the application is easy to navigate and use.
> * Sharability - At least 95% of our users/testers find that it is easy to send gifs/memes found on our site to others.
> * Documentation - At least 95% of experienced software engineers find that our code and software architecture is well documented and easy to follow.
> * Reachability - Our website will accept requests from 99% of users/testers, meaning that we will never go down.
> * Reusability - We want to make sure that the user can reuse the web application without it breaking and getting stale for the user. To test this we will use the    application everyday for a week to see if the reusability is an issue. 
> * Reliability - We want the application to be reliable for the user so it’s not frustrating for the user to use.  If the web app is not reliable the user will most likely use it to avoid frustration. To test this we all test the application at once to see if it crashes/performance issues. 
> * Safety - We want to make sure that the user is protected from any sort of security breaches. We will be hashing the user credentials and storing them in firebase. To test that the website is secure we will make sure that the base security measures are intact and aren’t easy to crack. 

# 5. MVP <br>
> Our MVP will be a web page that delivers login, sign up, UI, meme delivery, and machine learning algorithm to determine users preferences for content. We will verify all of these features besides the UI (No real need to test  visual components). To test login we will stress test many different scenarios, especially when a user enters incorrect credentials, does not have an account, and doesn’t have a connection. To test the sign up we also test many different configurations of emails and passwords( invalid and valid ones ) and test that it doesn’t allow for the same emails. To test the machine learning algorithm we will stress test it with a lot of different preferences and see the accuracy. We will also feed it skewed data that doesn't really make sense to see how it interacts.

# 6.1. Use Case Diagram
> ![Use Case Diagram](https://github.com/BaileyMcCauslin/CS386-Group-Project/blob/Deliverable2/UseCase.JPG)

# 6.2. Use Case Description and Interface Sketch

**Use Case** : View personalized gif\
**Actor**: College student\
**Description**: The college student views gifs that are personalized to their humor preferences\
**Pre-Condition(s)**:
- College student has an account
- College student has completed the personalization survey

**Main Flow**:
- The use case begins when the college student signs in to their account
- The college student cycles through the gifs that the website provides
- The use case ends when the college student exit the website or sign out

**Alternative Flow**:
- The college student can re-personalize the gifs they see by filling out a new survey
- The college student sees gifs with their new preferences

**Post Condition**: The college student is entertained by gifs that they find entertaining and have a higher quality gif viewing experience\

**Use Case** : Share gifs with friends\
**Actor**: College Student\
**Description**: The college student will be able to share gifs with their friends\
**Pre-Condition(s)**:
- College student has an account ( if preferences not answered, show all gifs )

**Main Flow**
- The use case begins when the college student signs into their account
- The college student cycles through the gifs that the website provides
- The use case ends when the college student exit the website or sign out

**Alternative Flow**:
- College students can send a specific gif to friend(s)

**Post Condition**: The college student is entertained by gifs that they find entertaining and have a higher quality gif viewing experience and can be satisfied that the GIF sent to friend is sent and received

**Use Case** : Fill out gif survey\
**Actor**: College Student\
**Description**: The college student will be able to complete a survey to find their gif preferences.
**Pre-Condition(s)**:
- College student has an account

**Main Flow**
- The use case begins when the college studnet signs into their account
- The college student decides to fill out the survey to generate gif preferences
- The college student answers each question in the survey
- The use case ends when the college student finishes the survey

**Alternative Flow**:
- College student can decide to view a random gif by not completing the survey

**Post Conditions**: The college student has been prescibed an attribute by which to generate gifs for them.


## Sketch: 
 ![UI Example](https://github.com/BaileyMcCauslin/CS386-Group-Project/blob/d2-Nick/UI%20Example.JPG)
 
# 7. User Stories 
- As a college student, I want to view gifs on a website so that I can be entertained. (Priority #1; approximately 25 hours)
- As a college student, I want to be able to view gifs personalized to my humor so that I have a more entertaining gif viewing experience.\
(Priority #2; approximately 15 hours)
- As a college student, I want to be able to share gifs to my friends so they can view gifs that I find entertaining.\
		(Priority #3; approximately 6 hours)
- As a college student, I want to be able to have my own account so I dont have to answer the survey everytime. 
(Priority #4; approximately 6 hours)
- As a college student, I want to have a smooth experience so I can come back and use the app more frequently without issues. 
(Priority #5; approximately 2 days)
- As a college student, I want to be able to have variable gif experiences, so that as I am looking for different kinds of humor, the results change.\
(Priority #6; approximately 3 hours)
- As a college student, I want to find and share gifs very quickly and efficiently. (Priority #7; approximately 3 hours)

# 8. Issue Tracker
![Issue Tracker](https://github.com/BaileyMcCauslin/CS386-Group-Project/blob/d2-Nick/IssueTracking.JPG)\
Link: https://github.com/BaileyMcCauslin/CS386-Group-Project/blob/d2-Nick/IssueTracking.JPG

