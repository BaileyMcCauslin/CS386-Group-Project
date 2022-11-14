import pandas as pd
import argparse
import json


class Json_to_df:

    def __init__(self):
        self.input_df = self.json_to_df()

    def json_to_df(self):
        # get the argument for the json file
        input_json = None
        parser = argparse.ArgumentParser()
        parser.add_argument('-j', help='give json file')
        args = parser.parse_args()

        # convert to dataframe
        try:
            input_json = json.loads(args.j)
        except TypeError:
            input_json = json.loads('{"Music": "folk", "Game": "risk", "Activity": \
                                       "watching", "Food": "apple", "Movie": "drama"}')

        input_json = {k: [v] for k, v in input_json.items()}
        return pd.DataFrame(input_json)
