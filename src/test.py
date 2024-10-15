# CASE - Initial claim, denied value
WHEN substring(InternalControlNumber), 13,14) = '00' AND LineDispositionCode IN ('5', '9')
THEN '0°

# Initial claim, Paid value
WHEN substring(InternalControllumber), 13,14) = '00' AND LineDispositionCode IN ('4")
THEN submittedQuantityDispensedValue

# Last 2 digits of ICN are ODD number ( eg.:01,03, etc), reversal claim, so negate the payable quantity value (eg. : -1, -2, ete )
WHEN int(substring(InternalControlNumber), 13,14)) % 2 === 1
THEN CONCAT('-', submittedQuantityDispensedValue)

# Last 2 digits of ICH are EVEN number (eg.: 02,04, ete ) and clain is paid, so populate the original Payable quantity value
WHEN int(substring(InternalControlNumber), 13, 14)) % 2 === 0 AND LineDispositionCode IN ('4")
THEN submittedQuantityDispensedValue

# Last 2 digits of ICH are EVEN number (eg.: 02,04, etc) and Claim is denied, so zero out paybale quantity value
WHEN int(substring(InternalControllumber),13,14)) % 2 === 0 AND LineDispositionCode IN (15%, 9))
THEN "0"
# Else bad data
ELSE'-'




def add_total quantity transform_to dataframe(data_frame: DataFrame) -> DataFrame:
    try:
        logger-info("Adding Total_Quantity column from source columns")
        đf_transformed = data_frame.withColumn(
        "Total_Quantity",
            # WHEN substring(InternalControlNumber), 13,14) = '00' AND LineDispositionCode IN ('5', '9') THEN '0°
             when(data_frame.internalcontrolnumber =="00" & data_frame.linedispositioncode.isIn("5", "9"), "0")
            #  WHEN substring(InternalControllumber), 13,14) = '00' AND LineDispositionCode IN ('4") THEN submittedQuantityDispensedValue
            .when(data_frame.internalcontrolnumber == "0" & data_frame.linedispositioncode == "4", data_frame.Submittedquantitydispensedvalue)
            # WHEN int(substring(InternalControlNumber), 13,14)) % 2 === 1 THEN CONCAT('-', submittedQuantityDispensedValue)
            .when(right(data frame.internalcontrolnumber, 2).cast("int") % 2 = 1, concat("-",data_frame.linedispositioncode))
            # WHEN int(substring(InternalControlNumber), 13, 14)) % 2 === 0 AND LineDispositionCode IN ('4") THEN submittedQuantityDispensedValue
            .when(right(data_frame.internalcontrolnumber, 2).cast("int") % 2 = 0 & data frame.linedispositioncode = "4", data_frame.submittedquantitydispensedvalue)
            # WHEN int(substring(InternalControllumber),13,14)) % 2 === 0 AND LineDispositionCode IN (15%, 9)) THEN "0"
            .when(data_frame.internalcontrolnumber % 2 - 0 & data_frame.linedispositioncode.isIn("5", "9"), "9")
            # ELSE'-'
            .otherwise("_"),
        )
    return df_transformed
    except Exception as e:
    sys-exit(f"Exception: Unable to add_total_quantity_transform_to _dataframe : {e}")


I need unit tests in Pytest

+@pytest.mark.parametrize()