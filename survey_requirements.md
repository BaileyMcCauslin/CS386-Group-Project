# Questions and Implications

We ask a total of 10 questions, each have four answers.
Each question has a set of "mood hooks" attached to it. For example, a question
could as the user why they're looking for a meme/gif, and their response would
light up certain values in a dictionary, i.e. jovial, which would be saved to 
the input list, which is then fed into the machine learning algorithm which 
predicts an output for the user.

We could also go "buzzfeed style". We ask the users to select from a number of 
gif/memes. We then use the pixel values of these images as the inputs into a 
convolutional neural network, and it tries to find patterns between these images,
and then spits out one final classification. We would probably have to supply
a more limitied set of images to our users, but have them be relatively identifiable,
i.e. cats, dogs, people, and then just output a classification based on the user's
answer. So if the CNN came out with dog as an answer, we could just do a search
for a dog. 

Both situations would require a large amount of manual labor on our part. In
either case we would have to generate our own test sets to train our model with,
even with relatively small test sets, it would still require a fair amount of 
work from us to put the test data together.


# Other options

We could look for something on TensorFlow hub that already does some sort of 
machine learning with images. This would save us a lot of time because the people
would have already uploaded both the code of their machine learning models,
and they would already be trained against test sets so that we don't have to do
anything.
