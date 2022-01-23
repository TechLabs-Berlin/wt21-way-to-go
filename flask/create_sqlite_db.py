import pandas as pd

data = pd.read_csv ("joint_data.csv")   
df = pd.DataFrame(data)

import flask
from sqlalchemy import create_engine
engine = create_engine('sqlite://', echo=False)
df.to_sql('routes.db', con=engine)

#engine.execute("SELECT * FROM routes").fetchall()