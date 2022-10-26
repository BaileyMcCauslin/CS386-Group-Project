# How to use the prediction script

First, have the results from the survey in the following form:
`{"Music": "folk", "Game": "risk", "Activity": "sleeping", "Food": "apple", "Movie": "drama"}`

Next, run the script with python, passing the json file name as an argument, like so:
`python3 prediction.py -j input.json`

Then, the script will create a new json file in the following form:
`{"search_value": "funny"}`

The script does not do any cleanup, so all files will be kept from its run.
