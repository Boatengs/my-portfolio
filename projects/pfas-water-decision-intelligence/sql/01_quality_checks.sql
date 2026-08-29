SELECT
  COUNT(*) AS result_rows,
  COUNT(DISTINCT pws_id) AS public_water_systems,
  COUNT(DISTINCT sample_point_key) AS sample_points,
  MIN(collection_date) AS min_collection_date,
  MAX(collection_date) AS max_collection_date
FROM silver_ucmr5;

SELECT source_units, COUNT(*) AS n
FROM silver_ucmr5
GROUP BY source_units
ORDER BY n DESC;

SELECT
  result_sign,
  is_detect,
  is_censored,
  COUNT(*) AS n,
  SUM(CASE WHEN result_ug_l IS NOT NULL THEN 1 ELSE 0 END) AS numeric_values
FROM silver_ucmr5
GROUP BY result_sign, is_detect, is_censored
ORDER BY n DESC;

SELECT
  SUM(CASE WHEN collection_date IS NULL THEN 1 ELSE 0 END) AS bad_dates,
  SUM(CASE WHEN mrl_ug_l IS NULL THEN 1 ELSE 0 END) AS bad_mrl,
  SUM(CASE WHEN result_sign = '=' AND result_ug_l IS NULL THEN 1 ELSE 0 END) AS detected_missing_value,
  SUM(CASE WHEN result_sign = '<' AND result_ug_l IS NOT NULL THEN 1 ELSE 0 END) AS censored_with_numeric_value
FROM silver_ucmr5;

SELECT
  contaminant,
  COUNT(*) AS result_rows,
  COUNT(DISTINCT pws_id) AS systems,
  COUNT(DISTINCT sample_point_key) AS sample_points,
  SUM(is_detect) AS results_at_or_above_mrl
FROM silver_ucmr5
GROUP BY contaminant
ORDER BY contaminant;
