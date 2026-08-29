# Method Notes

## Regulatory language
UCMR 5 occurrence results are used for technical screening and prioritization; they are not represented as regulatory compliance determinations.

## EPA benchmark for PFOA/PFOS location averages
- full monitoring set required
- groundwater: generally 2 monitoring events
- surface water / GWUDI / mixed: generally 4 monitoring events
- results below MRL set to zero for the EPA technical-assistance comparison
- PFOA/PFOS comparison cutoff: 4.05 ng/L for the two-significant-digit comparison to 4.0 ng/L

## Sensitivity layer
One-half-MRL and MRL substitution scenarios are retained so nondetect treatment remains visible.

## Priority framework
The engineering-review priority model is configured in `config/priority_score.yaml`. It is a planning tool, not a health-risk score.

## Encoding
EPA national text files are read using Windows-1252 (`cp1252`) to preserve the `µ` character in `µg/L`.
