-- UCMR 5 PFOA/PFOS technical-assistance screening views.
-- NOT regulatory compliance determinations.
-- EPA benchmark: full monitoring set; <MRL -> 0; PFOA/PFOS average >=4.05 ng/L is identified
-- as above the 4.0 ng/L MCL after EPA's two-significant-digit comparison.

DROP VIEW IF EXISTS pws_screening;
DROP VIEW IF EXISTS sample_point_screening;
DROP VIEW IF EXISTS sample_point_screening_scenarios;
DROP VIEW IF EXISTS sample_point_event_completeness;
DROP VIEW IF EXISTS pfas_core;

CREATE VIEW pfas_core AS
SELECT * FROM silver_ucmr5
WHERE upper(contaminant) IN ('PFOA','PFOS');

CREATE VIEW sample_point_event_completeness AS
SELECT
  pws_id, pws_name, pws_size, facility_id, facility_name, facility_water_type,
  sample_point_id, sample_point_name, sample_point_key, contaminant,
  COUNT(DISTINCT sample_event_code) AS observed_events,
  CASE WHEN facility_water_type='GW' THEN 2
       WHEN facility_water_type IN ('SW','GU','MX') THEN 4 END AS expected_events,
  CASE WHEN facility_water_type='GW' AND COUNT(DISTINCT sample_event_code)=2 THEN 1
       WHEN facility_water_type IN ('SW','GU','MX') AND COUNT(DISTINCT sample_event_code)=4 THEN 1
       ELSE 0 END AS is_complete_monitoring_set
FROM pfas_core
GROUP BY pws_id,pws_name,pws_size,facility_id,facility_name,facility_water_type,
         sample_point_id,sample_point_name,sample_point_key,contaminant;

CREATE VIEW sample_point_screening_scenarios AS
SELECT
  r.pws_id,r.pws_name,r.pws_size,r.facility_id,r.facility_name,r.facility_water_type,
  r.sample_point_id,r.sample_point_name,r.sample_point_key,r.contaminant,
  c.is_complete_monitoring_set,
  COUNT(*) AS result_rows,
  COUNT(DISTINCT r.sample_event_code) AS observed_events,
  SUM(r.is_detect) AS detected_events,
  AVG(CASE WHEN r.result_ng_l IS NOT NULL THEN r.result_ng_l WHEN r.is_censored=1 THEN 0.0 END) AS avg_epa_zero_ng_l,
  AVG(CASE WHEN r.result_ng_l IS NOT NULL THEN r.result_ng_l WHEN r.is_censored=1 THEN 0.5*r.mrl_ng_l END) AS avg_half_mrl_ng_l,
  AVG(CASE WHEN r.result_ng_l IS NOT NULL THEN r.result_ng_l WHEN r.is_censored=1 THEN r.mrl_ng_l END) AS avg_mrl_ng_l,
  MAX(r.result_ng_l) AS max_detected_ng_l,
  4.05 AS epa_comparison_cutoff_ng_l
FROM pfas_core r
JOIN sample_point_event_completeness c
  ON r.pws_id=c.pws_id AND r.facility_id=c.facility_id
 AND r.sample_point_id=c.sample_point_id AND r.contaminant=c.contaminant
GROUP BY r.pws_id,r.pws_name,r.pws_size,r.facility_id,r.facility_name,r.facility_water_type,
         r.sample_point_id,r.sample_point_name,r.sample_point_key,r.contaminant,
         c.is_complete_monitoring_set;

CREATE VIEW sample_point_screening AS
SELECT *,
  CASE
    WHEN is_complete_monitoring_set=0 THEN 'INCOMPLETE'
    WHEN avg_epa_zero_ng_l>=epa_comparison_cutoff_ng_l THEN 'ROBUST_ABOVE'
    WHEN avg_mrl_ng_l<epa_comparison_cutoff_ng_l THEN 'ROBUST_BELOW'
    ELSE 'ASSUMPTION_SENSITIVE'
  END AS sensitivity_class,
  CASE WHEN is_complete_monitoring_set=1 AND avg_epa_zero_ng_l>=epa_comparison_cutoff_ng_l THEN 1 ELSE 0 END AS epa_average_above_mcl_comparison
FROM sample_point_screening_scenarios;

CREATE VIEW pws_screening AS
SELECT
  pws_id,
  MAX(pws_name) AS pws_name,
  MAX(pws_size) AS pws_size,
  COUNT(DISTINCT sample_point_key) AS core_pfas_sample_points,
  SUM(CASE WHEN epa_average_above_mcl_comparison=1 THEN 1 ELSE 0 END) AS flagged_point_analytes,
  MAX(max_detected_ng_l) AS max_detected_pfoa_or_pfos_ng_l,
  CASE
    WHEN SUM(CASE WHEN epa_average_above_mcl_comparison=1 THEN 1 ELSE 0 END)>0 THEN 'ENGINEERING_REVIEW_HIGH'
    ELSE 'NO_EPA_AVERAGE_SCREENING_TRIGGER'
  END AS review_queue
FROM sample_point_screening
GROUP BY pws_id;
