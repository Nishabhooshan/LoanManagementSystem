
# Python code to illustrate
# inserting data in MongoDB
from pymongo import MongoClient
import sys

try:
	conn = MongoClient('localhost', 3001, retryWrites=False )
except:
	print("Could not connect to MongoDB")

# database
db = conn.local

# Created or Switched to collection names: my_gfg_collection
collection = db.loan_users


found=db.loan_users.find()
foundFlag=False
for x in found:
    if x['e_mail'] == sys.argv[1]:
            print(x['lander'])
            foundFlag=True

if foundFlag==False:
    print('None')

