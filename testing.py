import unittest
import pandas as pd
import pickle
from predictions import Prediction


class TestPredictions(unittest.TestCase):


    def test_json_to_df(self):
        p = Prediction()
        data = ['folk', 'risk', 'watching', 'apple', 'drama']
        df = pd.DataFrame(data).T
        self.assertEqual(df.values.tolist(), p.json_to_df().values.tolist())

    def test_prediction(self):
        p = Prediction()
        in_df = pickle.load(open('input_df.sav', 'rb'))
        self.assertEqual('crying', p.get_prediction(in_df))

    def test_convert(self):
        p = Prediction()
        loaded_df = pickle.load(open('loaded_df.sav', 'rb'))
        data = [1.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  1.0,  0.0,  0.0,
                0.0,  0.0,  1.0,  1.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,
                1.0,  0.0]
        df = pd.DataFrame(data).T
        df = df.set_index(pd.Index([50]))
        self.assertEqual(df.values.tolist(),
                         p.convert_one_hot(loaded_df).values.tolist())

    def test_transform(self):
        p = Prediction()
        self.assertEqual('no', p.transform_with_map([0]))


if __name__ == '__main__':
    unittest.main()
