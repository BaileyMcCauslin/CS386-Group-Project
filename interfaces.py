

class Prediction_Interface:

    def __init__(self):
        pass

    def transform_with_map(self, in_data):
        pass


class Converter_Interface:

    def __init__(self):
        pass

    def convert_one_hot(self, in_df, cat_features):
        pass


class Json_to_df_Interface:

    def __init__(self):
        pass

    def json_to_df(self):
        pass
