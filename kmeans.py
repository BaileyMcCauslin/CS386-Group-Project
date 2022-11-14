"""
Predictions
This takes a json file containing the results from a user survey,
then converts it to a pandas dataframe, encodes it using a one hot
encoder, and makes a prediction. It saves the prediction to a json
file containing the predicted search key
"""

from prediction import Prediction
import pickle


class KMean_Prediction(Prediction):

    def __init__(self):
        self.mapping = {0: 'no', 1: 'dancing', 2: 'funny', 3: 'crying',
                        4: 'hello'}
        Prediction.__init__(self, 'data.sav',
                            ["Music", "Game", "Activity", "Food", "Movie"])
        self.prediction = self.get_prediction(self.input_df)

    def get_prediction(self, in_data):
        # make and save the prediction
        loaded_kmeans = pickle.load(open('model.sav', 'rb'))
        prediction = loaded_kmeans.predict(in_data)
        prediction = self.transform_with_map(prediction)
        with open('search.json', 'w', encoding='utf-8') as outfile:
            outfile.write('{\"search_value\": \"' + prediction + '\"}')
        return prediction


def main():
    prediction = KMean_Prediction()


if __name__ == '__main__':
    main()
