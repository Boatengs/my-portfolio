# Data

The full raw EPA UCMR 5 archive is intentionally **not committed** to this portfolio repository.

Download the UCMR 5 Occurrence Data Text Files ZIP from EPA and save it as:

```text
data/raw/ucmr5-occurrence-data.zip
```

The project `.gitignore` excludes `data/raw/*` and `data/derived/*`. Compact reviewer-facing outputs are retained in `results/` so the findings can be inspected without committing the large source archive.
