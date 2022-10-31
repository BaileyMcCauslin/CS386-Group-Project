# 1. Introduction
> Gif Machine is an online application that will give users a personal meme viewing experience that is tailored to them. The value of the application is giving users that personal aspect along with providing convenience. With GifMachine, people can log into their accounts. Each account will have their preference in gifs, along with their email address and password. Accounts will store preferences based on a series of questions, each one having multiple choices. The user can reset their preferences by simply answering the questions again. The gifs will appear sequentially, almost like TikTok shows videos. Instead, we will pull gifs from other sources that store gifs, such as Giphy. This means that gifs will instead be stored with a source URL and users can click on that to access the original gif.

# 2. Implemented requirements
> Requirement: As a college student, I want to be able to view gifs personalized to my humor so that I have a more entertaining gif viewing experience. <br>
  Issue: https://github.com/BaileyMcCauslin/CS386-Group-Project/issues/11 <br>
  Pull request: https://github.com/BaileyMcCauslin/CS386-Group-Project/pull/22 <br>
  Implemented by: Cody Beck <br>
  Approved by: Bailey McCaulsin <br>
  ![alt text](images/display.png "Gifs")
  
  
> Requirement: The college student will be able to complete a survey to find their gif preferences. <br>
  Issue: https://github.com/BaileyMcCauslin/CS386-Group-Project/issues/23 <br>
  Pull Request: https://github.com/BaileyMcCauslin/CS386-Group-Project/pull/25<br>
  Implemented by: Bailey McCauslin <br>
  Approved by: Andrew Usvat<br>
  ![alt text](images/survey.png "Survey")  

> Requirement: As a college student, I want to be able to have my own account so I dont have to answer the survey everytime.
  Issue:  https://github.com/BaileyMcCauslin/CS386-Group-Project/issues/11 <br>
  Pull request: https://github.com/BaileyMcCauslin/CS386-Group-Project/pull/22 <br>
  Implemented by: Bailey McCauslin and Andrew Usvat <br>
  Approved by: Bailey McCauslin <br>
  ![alt text](images/login.png "Login")



# 3. Tests
You should implement automated tests that aim to verify the correct behavior of your code. Provide the following information:
Test framework you used to develop your tests (e.g., JUnit, unittest, pytest, etc.):

The framework we used to develop our tests for the ML prediction program was unittest.

Link to your GitHub folder where your automated unit tests are located: [GitHub](https://github.com/BaileyMcCauslin/CS386-Group-Project/tree/testing)

An example of a test case. Include in your answer a GitHub link to the class being tested and to the test.
An example of a test case is: 
```
def test_transform(self):
    self.assertEqual('no', p.transform_with_map([0]))
 ```

[Class](https://github.com/BaileyMcCauslin/CS386-Group-Project/blob/testing/predictions.py)
<br>
[Test](https://github.com/BaileyMcCauslin/CS386-Group-Project/blob/testing/testing.py)

A print screen showing the result of the execution of the automated tests. 
![alt text](images/test.png "Test")

# 4. Adopted technologies
> React JS - We are using React as our web framework because it allows for dynamic components, state handling, and easy styling. It’s extremely easy to load in GIF’s dynamically and route to different pages.  

> Firebase/Firestore - Since we need to store little amounts of data, we chose to use firebase and firestore because of its easy user authentication and store small data in collections in firestore. Firebase is extremely easy to use with very little set up time without being overkill for our project. 

> Pandas - We are using Pandas dataframes to provide the inputs into the machine learning algorithm, as scikit-learn expects input in the form of a dataframe. We also used Pandas because Pandas dataframes are very easy to work with, as Pandas allows dataframes to be easily saved to and from .csv files.

> Scikit-learn - We chose scikit-learn over PyTorch and TensorFlow for its simplicity. Scikit-learn is really easy to use for simple machine learning problems. Seeing as we have are using a clustering model, which is super simple, it made more sense to just chose the simplest ML library. With scikit-learn, we are using the KMeans algorithm, as KMeans is a pretty simple and well used clustering algorithm. 

> Pickle - We used pickle to save the trained ML model. Using pickle you can save entire objects and open them in different .py files. This made our code lightweight as we did not have to retrain the algorithm every time we use. 

# 5. Learning/training
> Bailey McCauslin - Im familiar with both react and firebase so the web development went really smoothly. However, I went over some of the technologies used in the ML model and made sure I understood what was happening in case help was needed. To learn this I collaborated with Cody who worked on the ML model. 

> Andrew Usvat -  I learned how to implement backend into the front end so the group could develop the web application faster. I took an online course on react and firebase implementation and also collaborated with Bailey to see how the implementation is done in our current application.

> Nick Henderson - I had no prior experience in react so learning it was a steep curve but I’m slowly learning the in’s and out’s of the framework. To learn to react I had watched many youtube videos and made a basic starter app to make sure I could apply my new react skills. I also asked a bunch of questions to the group members on how something would be implemented to react and it helped a lot.

> Cody Beck - I learned how to use scikit-learn. Previously, I had only used TensorFlow for machine learning. However, this was just a simple clustering problem, unlike image processing problems I had worked with in the past. Because of this, TensorFlow would have been overkill. Also I just wanted to get some experience working with scikit-learn so I knew how it compared to TensorFlow. To do this, I just watched some videos on Udemy about how sci-kit learn works. I also consulted their documentation to learn how to use their KMeans model. I also gained some more familiarity with Pandas from using it with scikit-learn. I had some previous experience with Pandas, but for this project, I actually had to use it in ways that I never had before. Because I had some exposure to Pandas, I just used the documentation to find the features I needed to use. 


# 6. Deployment

# 7. Licensing
We chose the MIT License. We chose this license for this permissibility. We liked that it allowed for many different uses, as we are all supporters of open source software. We also chose it because it provides no guarantees or warranties, and as this is student code, we do not want anyone to assume it to be perfect.

# 8. Readme File
https://github.com/BaileyMcCauslin/CS386-Group-Project/blob/main/README.md

# 9. Look & feel

The approach to the design is quite simple. We wanted to apply a simple theme that sort of appeals to people who are joke enthusiasts and is similar to other joke sites but is unique at the same time. We used a unique color background theme and a set color scheme for all the text and implemented some cool front end design elements.

![alt text](images/login.png "Login")
![alt text](images/login_retry.png "Wrong Password")
![alt text](images/survey.png "Survey")
![alt text](images/display.png "Display")


# 10. Lessons learned
We learned that we should make more time to deploy the application because it took longer than expected to accomplish deployment. We also learned the lesson of communicating on what dependencies we are going to use, we ran into a bunch of dependency discrepancies that could've been avoided if we just communicated. We also need to clean up our version control a little bit, it got messy at times. We also want to make sure everyone is in the loop about the technologies each of us specialize in so if we need to fix something and someone is not available, someone else will know how to work with that technology.

# 11. Demo
