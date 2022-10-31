"""
Predictions
This takes a json file containing the results from a user survey,
then converts it to a pandas dataframe, encodes it using a one hot
encoder, and makes a prediction. It saves the prediction to a json
file containing the predicted search key
"""

import pandas as pd
import pickle
from sklearn.compose import ColumnTransformer
from sklearn.preprocessing import OneHotEncoder
import json
import argparse


class Prediction:
    
    def __init__(self):
        self.input_df = self.json_to_df()
        self.loaded_df = pickle.load(open('data.sav', 'rb'))
        self.loaded_df = pd.concat([self.loaded_df, self.input_df], ignore_index=True)
        self.input_df = self.convert_one_hot(loaded_df)
        self.prediction = self.get_prediction(input_df)

        
    def json_to_df():
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


    def convert_one_hot(in_df):
        # transform the features
        cat_features = ["Music", "Game", "Activity", "Food", "Movie"]
        one_hot = OneHotEncoder()
        transformer = ColumnTransformer([("one_hot", one_hot, cat_features)],
                                    remainder="passthrough",
                                    sparse_threshold=0)
        features_transformed = transformer.fit_transform(in_df)

        # get the one we want to predict for
        return pd.DataFrame(features_transformed).tail(1)


    def get_prediction(in_data):
        # make and save the prediction
        loaded_kmeans = pickle.load(open('model.sav', 'rb'))
        prediction = loaded_kmeans.predict(in_data)
        prediction = transform_with_map(prediction)
        with open('search.json', 'w', encoding='utf-8') as outfile:
            outfile.write('{\"search_value\": \"' + prediction + '\"}')
        return prediction


    def transform_with_map(in_data):
        mapping = {0: 'no', 1: 'dancing', 2: 'funny', 3: 'crying', 4: 'hello'}
        return mapping.get(in_data[0])

def main():
    prediction = Prediction()
    
    
if __name__ == '__main__':
    main()
