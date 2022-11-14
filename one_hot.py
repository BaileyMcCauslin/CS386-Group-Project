from sklearn.compose import ColumnTransformer
from sklearn.preprocessing import OneHotEncoder
import pandas as pd
from interfaces import Converter_Interface


class Converter(Converter_Interface):

    def __init__(self, in_df, cat_features):
        self.convert_one_hot(in_df, cat_features)

    def convert_one_hot(self, in_df, cat_features):
        # transform the features
        cat_features = ["Music", "Game", "Activity", "Food", "Movie"]
        one_hot = OneHotEncoder()
        transformer = ColumnTransformer([("one_hot", one_hot, cat_features)],
                                        remainder="passthrough",
                                        sparse_threshold=0)
        features_transformed = transformer.fit_transform(in_df)

        # get the one we want to predict for
        return pd.DataFrame(features_transformed).tail(1)
