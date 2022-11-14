from interfaces import Prediction_Interface


class Prediction(Prediction_Interface):

    def __init__(self, in_df_name, cat_features):
        pass

    def transform_with_map(self, in_data):
        mapping = {0: 'no', 1: 'dancing', 2: 'funny', 3: 'crying', 4: 'hello'}
        return mapping.get(in_data[0])
