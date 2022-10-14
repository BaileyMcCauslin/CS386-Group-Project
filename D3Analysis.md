1. System Description
> * The problem of inefficient media procurement affects many college students; the impact of which is that many people spend a very large amount of time 
looking at gifs and Memes that they do not like, just so they can find one they do like. For college students who like to use gifs and Memes, GifMachine is 
a image procurement app that uses machine learning to figure out what category of media a user wants, and supplies it to them without the need for the user 
to navigate through search bars and large lists of results; unlike Giphy, our product does not rely on users entering keywords to find gifs, and helps them 
find what they are looking for when they do not know exactly what they want. GifMachine is an image procurement app that allows college students to find 
gifs and memes to find gifs and memes more efficiently, providing them with gifs and memes that they want without forcing them to scroll through long lists 
of images.
> * With GifMachine, college students can log into their **accounts**. Each **account** will have their *preference* in gifs, along with their *email address* and 
*password*. **Accounts** will store preferences based on a series of **questions**, each one having multiple *choices*. The user can reset their preferences by simply 
<ins>answering the questions</ins> again. They will also be able to share a gif to other social media outlets. The gifs will appear sequentially, almost like TikTok 
shows videos. One would be able to swipe up to view the last gif, and down to view the next one. They will also be able to like gifs. Liked gifs will be 
<ins>saved to a list</ins> associated with an account. **Gif** files will not be stored directly on our site. Instead, we will pull gifs from other sources that store 
gifs, such as Giphy. This means that gifs will instead be stored with a *source URL*, so that they can be accessed in the future. Additionally the *number of 
likes* a gif has will be stored as well, so that it can be recommended more often. Gifs will be recommended using a machine learning model that is trained 
against the question data. The model will also compare gifs so that if multiple gifs are equally likely to be what the user is looking for, it will select 
the one with more likes. The model will receive a user’s preferences as inputs and give back gifs as outputs. 
