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


def main():
    # load the saved files
    loaded_kmeans = pickle.load(open('model.sav', 'rb'))
    loaded_df = pickle.load(open('data.sav', 'rb'))
    input_json = None

    mapping = {0: 'no', 1: 'dancing', 2: 'funny', 3: 'crying', 4: 'hello'}
    
    # get the argument for the json file
    parser = argparse.ArgumentParser()
    parser.add_argument('-j', required=True, help='give json file')
    args = parser.parse_args()

    # open the json file
    with open(args.j, 'r+', encoding='utf-8') as json_file:
        for line in json_file:
            input_json = json.loads(line)

    # convert to dataframe
    input_json = {k: [v] for k, v in input_json.items()}
    input_df = pd.DataFrame(input_json)
    loaded_df = pd.concat([loaded_df, input_df], ignore_index=True)

    # transform the features
    cat_features = ["Music", "Game", "Activity", "Food", "Movie"]
    one_hot = OneHotEncoder()
    transformer = ColumnTransformer([("one_hot", one_hot, cat_features)],
                                    remainder="passthrough",
                                    sparse_threshold=0)
    features_transformed = transformer.fit_transform(loaded_df)

    # get the one we want to predict for
    input_df = pd.DataFrame(features_transformed).tail(1)

    # make and save the prediction
    prediction = mapping.get(loaded_kmeans.predict(input_df)[0])
    with open('search.json', 'w', encoding='utf-8') as outfile:
        outfile.write('{\"search_value\": \"' + prediction + '\"}')

if __name__ == '__main__':
    main()
