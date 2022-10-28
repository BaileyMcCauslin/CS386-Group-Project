# How to use the prediction script

First, have the results from the survey in the following form:
`{"Music": "folk", "Game": "risk", "Activity": "watching", "Food": "apple", "Movie": "drama"}`

Next, run the script with python, passing the json file name as an argument, like so:
`python3 prediction.py -j input.json`

Then, the script will create a new json file in the following form:
`{"search_value": "funny"}`

The script does not do any cleanup, so all files will be kept from its run.

# Survey Questions

The survey questions used for predictions are the following multiple choice questions:

What kind of music are you currently in the mood to listen to?
> * lofi
> * rock
> * folk
> * rap

Which game do you feel most inclined to play?
> * risk
> * chess
> * checkers
> * tic-tac-toe

Which activity sounds most appealing to you?
> * sleeping
> * running
> * watching tv (save to json just as watching)
> * swimming

Which snack sounds good to you?
> * oreos
> * goldfish
> * apple
> * cheerios

Which genre of movie would you like to watch?
> * drama
> * comedy
> * horror
> * action

