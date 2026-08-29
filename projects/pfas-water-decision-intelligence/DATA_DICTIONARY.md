# PFAS Analysis Data Dictionary

## UCMR 5 analytical-result grain
One analytical-result record represents one contaminant, one sampling location and one sampling event.

| EPA field | Meaning | Project handling |
|---|---|---|
| PWSID | Public Water System ID | text; never numeric |
| PWSName | Public Water System name | preserved |
| Size | UCMR size class | preserved |
| FacilityID | Facility identifier | text |
| FacilityWaterType | SW/GW/GU/MX | preserved |
| SamplePointID | Sampling point identifier | text |
| CollectionDate | Sample date | parsed date |
| Contaminant | Analyte | standardized text |
| MRL | Minimum Reporting Level, µg/L | numeric |
| AnalyticalResultsSign | `<` or `=` | censor/detect flag |
| AnalyticalResultValue | Numeric result in µg/L; blank below MRL | numeric nullable |
| SampleEventCode | SE1–SE4 | text |

## Derived fields
- `result_ng_l = result_ug_l * 1000`
- `mrl_ng_l = mrl_ug_l * 1000`
- `is_detect`
- `is_censored`
- `sample_point_key`
- `sample_event_key`
- `collection_year`

## Screening benchmark
The project uses complete monitoring sets, zero substitution for the EPA benchmark average, and a 4.05 ng/L comparison cutoff for PFOA/PFOS. This is not a regulatory compliance calculation.
