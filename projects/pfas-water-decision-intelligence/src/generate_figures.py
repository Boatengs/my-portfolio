from __future__ import annotations

import argparse
from pathlib import Path

import matplotlib.pyplot as plt
import pandas as pd


def build(project: Path) -> None:
    out = project / "figures"
    out.mkdir(parents=True, exist_ok=True)
    pws = pd.read_csv(project / "results" / "pws_engineering_priority.csv")
    alloc = pd.read_csv(project / "results" / "capital_allocation_summary.csv")

    plt.figure(figsize=(8,5))
    plt.hist(pws["priority_score_100"], bins=20)
    plt.xlabel("Engineering review priority score (0–100)")
    plt.ylabel("Flagged public water systems")
    plt.title("Distribution of engineering review priority")
    plt.tight_layout()
    plt.savefig(out / "priority_score_distribution_rebuilt.png", dpi=180)
    plt.close()

    bal = alloc[alloc["Model"].eq("BALANCED")].sort_values("Budget_M")
    plt.figure(figsize=(8,5))
    plt.plot(bal["Budget_M"], bal["Systems_Selected"], marker="o")
    plt.xlabel("Program budget ($M)")
    plt.ylabel("Systems selected")
    plt.title("Balanced PFAS assistance portfolio reach")
    plt.tight_layout()
    plt.savefig(out / "capital_allocation_portfolio_reach_rebuilt.png", dpi=180)
    plt.close()

    print("Figures rebuilt.")


def main() -> None:
    p = argparse.ArgumentParser()
    p.add_argument("--project", type=Path, default=Path("."))
    args = p.parse_args()
    build(args.project.resolve())


if __name__ == "__main__":
    main()
