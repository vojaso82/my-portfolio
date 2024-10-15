get item_from_dynamodb_batch_items(keys_to_get):
    
logger.info(f"Getting DynamoDB batch")

try:
    
dynamodb_client = boto3.client ("dynamodb")
tries = 0
max_tries = 5
sleepy_time = 1
# Start with 1 second of sleep, then exponentially increase.
while tries ‹ max_tries:
# TODO: Remove extra columns from request
dynamodb_response = dynamodb_client.batch_get_item
RequestItems={DynamoDB.TABLE_NAME.value: {"Keys": keys_to_get}},
ConsistentRead=True
unprocessed = dynamodb_response["UnprocessedKeys"]
# IF there are Unprocessedkeys try processing them
if len(unprocessed) > 0:
logger.info("Unprocessed keys returned")
batch_keys = unprocessed
unprocessed_count = sum([len(batch_key["Keys"]) for batch_key in batch_ keys.values()])

logger. info(F" (unprocessed_count) unprocessed keys returned. Sleep, then retry.")

tries += 1
if tries < max_tries:
logger.info(f"Sleeping for {sleepy_time} seconds.")
time.sleep(sleepy_time)
sleepy_time - min(sleepy_time * 2, 32)
  else:
   break

data = dynamodb response["Responses*] [DynamoDB. TABLE NAME .value]
iF len(keys to get)
1= len(data):
logger info(F'
Retrieved item count does not match input datal [len(keys_to get)} 1= (len(data)}")
Row = nanedtuple("Row", ["InternalControNumber". Lineltemumber"1)
# Convert data to arrays to be compared
output data = flatten_dynamo_ structure(data)
input data = flatten_dynamo_ structure(keys_to_get)
# Convert data to tuples to be hashed for set comparison
input_set = set ([Row (row["InternalControlNumber"], row["LineltenNumber"}) for ron in input datal)
output_set = set ([Row(row["InternalControlNumber"], row["LineItemNumber"]) for row in output datal)
# Get difference
diff = input set .difference(output set)
1ogger,info(F"Missing data: {diff)")
raise Exception(f"Not all data was able to be read: (diff)")
return data
except
Exception as et
sys,exit(F"Exception: Unable to read from DynamoDB: {e)")