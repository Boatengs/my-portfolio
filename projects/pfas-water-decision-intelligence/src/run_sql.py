from __future__ import annotations

import argparse
import sqlite3
from pathlib import Path


def main() -> None:
    p = argparse.ArgumentParser()
    p.add_argument("--db", required=True, type=Path)
    p.add_argument("--sql", required=True, type=Path)
    args = p.parse_args()

    sql = args.sql.read_text(encoding="utf-8")
    con = sqlite3.connect(args.db)
    statements = [s.strip() for s in sql.split(";") if s.strip()]
    for stmt in statements:
        if stmt.lstrip().upper().startswith(("SELECT", "WITH")):
            cur = con.execute(stmt)
            cols = [d[0] for d in cur.description]
            print("\n" + " | ".join(cols))
            print("-" * min(140, len(" | ".join(cols)) + 20))
            for row in cur.fetchmany(100):
                print(" | ".join("" if v is None else str(v) for v in row))
        else:
            con.execute(stmt)

    con.commit()
    con.close()


if __name__ == "__main__":
    main()
