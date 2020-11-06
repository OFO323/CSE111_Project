
-- Search query
SELECT ()

-- Insert query
INSERT INTO Product(s_Name, p_name, p_price, p_release date, p_lastShipment[DATE] ), Store(s_cityID, s_storeName,  s_storeNum, p_Name)
VALUES();

INSERT INTO locations(storeName, storeNum, c_ID, c_name)
VALUES();

INSERT INTO SupplyDemand(p_name, p_price, p_lastShipment[DATE], r_nintendoRating, r_storeRating)
VALUES();

INSERT INTO priceChngFreq(p_name, p_price, p_lastShipment[DATE], b_name, b_basePrice)
VALUES();


-- Delete query ------------------------------------

--used for deleting outdated products or unavlaible items from a store's inventory 
DELETE *
FROM Store 
WHERE 
    p_Name = '' AND
    s_storeName = '' AND
    s_cityID = 1 AND
    s_storeNum = 1 


