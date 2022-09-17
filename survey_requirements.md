# Questions and Implications

We ask a total of 10 questions, each have four answers. For each question, there
are a number of category "hooks" attached to it. So for an example, a question 
could light up as playful, fun, and happy. We then give all of this data to our 
model, and then that just tries to classify what the user wants. So if it comes
out saying 67% dog, then we do a search of the giphy API for dog images. If the 
user says no, we can do a search for the keyword with the next highest amount of 
confidence from the model.

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
