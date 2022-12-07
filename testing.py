import unittest
from unittest.mock import Mock
import pandas as pd


class TestPredictions(unittest.TestCase):

    def test_json_to_df(self):
        p = Mock()
        p.json_to_df.return_value = pd.DataFrame({'Music': ['folk'],
                                                  'Game': ['risk'],
                                                  'Activity': ['watching'],
                                                  'Food': ['apple'],
                                                  'Movie': ['drama']})
        self.assertEqual(pd.DataFrame, type(p.json_to_df()))

    def test_prediction(self):
        p = Mock()
        p.get_prediction.return_value = 'crying'
        self.assertEqual(str, type(p.get_prediction()))
        self.assertEqual('crying', p.get_prediction())

    def test_convert(self):
        p = Mock()
        loaded_df = pd.DataFrame({'Music': ['folk'], 'Game': ['risk'],
                                  'Activity': ['watching'], 'Food': ['apple'],
                                  'Movie': ['drama']})
        data = [1.0,  1.0,  1.0,  1.0,  1.0]
        df = pd.DataFrame(data).T
        df = df.set_index(pd.Index([1]))
        p.convert_one_hot.return_value = \
            pd.DataFrame([1.0, 1.0, 1.0, 1.0, 1.0]).T
        self.assertEqual(df.values.tolist(),
                         p.convert_one_hot(loaded_df).values.tolist())
        self.assertEqual(type(p.convert_one_hot()), pd.DataFrame)

    def test_transform(self):
        p = Mock()
        p.transform_with_map.return_value = 'no'
        self.assertEqual('no', p.transform_with_map([0]))
        self.assertEqual(str, type(p.transform_with_map([0])))


if __name__ == '__main__':
    unittest.main()
