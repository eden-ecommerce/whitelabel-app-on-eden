const HOSTS = [
  { name: "Margaret H.",   assigned: 18, confirmed: 18, flagged: 0, score: 100 },
  { name: "David C.",      assigned: 15, confirmed: 14, flagged: 1, score:  90 },
  { name: "Ruth B.",       assigned: 12, confirmed: 10, flagged: 0, score:  83 },
  { name: "Thomas A.",     assigned: 10, confirmed:  6, flagged: 2, score:  58 },
  { name: "Lydia F.",      assigned:  8, confirmed:  8, flagged: 0, score: 100 },
];

function scoreColor(s: number) {
  if (s >= 90) return "text-emerald-600";
  if (s >= 70) return "text-amber-600";
  return "text-red-600";
}

function bar(value: number, max: number, color: string) {
  const pct = Math.round((value / max) * 100);
  return (
    <div className="h-1.5 w-full overflow-hidden rounded-full bg-gray-100">
      <div className={`h-full rounded-full ${color}`} style={{ width: `${pct}%` }} />
    </div>
  );
}

export function AdminReliabilityScreen() {
  return (
    <div className="h-full overflow-hidden bg-white font-sans">
      {/* Top bar */}
      <div className="flex items-center justify-between border-b border-gray-100 px-4 py-3">
        <div>
          <p className="text-xs font-semibold text-gray-800">Volunteer reliability</p>
          <p className="text-[10px] text-gray-400">Prayer Ministry · last 90 days</p>
        </div>
        <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[9px] font-medium text-emerald-700">
          5 active hosts
        </span>
      </div>

      {/* Table */}
      <div className="overflow-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-50">
              {["Host", "Assigned", "Confirmed", "Flagged", "Score"].map((h) => (
                <th key={h} className="px-3 py-2 text-left text-[9px] font-semibold uppercase tracking-wider text-gray-400">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {HOSTS.map((host) => (
              <tr key={host.name} className="hover:bg-gray-50/60">
                <td className="px-3 py-2">
                  <div className="flex items-center gap-2">
                    <span className="flex size-6 items-center justify-center rounded-full bg-emerald-100 text-[9px] font-semibold text-emerald-700">
                      {host.name.split(" ").map((p) => p[0]).join("")}
                    </span>
                    <span className="text-[10px] font-medium text-gray-700">{host.name}</span>
                  </div>
                </td>
                <td className="px-3 py-2 text-center text-[10px] text-gray-600">{host.assigned}</td>
                <td className="px-3 py-2">
                  <div className="space-y-1">
                    <span className="block text-center text-[10px] text-gray-600">{host.confirmed}</span>
                    {bar(host.confirmed, host.assigned, "bg-emerald-400")}
                  </div>
                </td>
                <td className="px-3 py-2 text-center">
                  {host.flagged > 0 ? (
                    <span className="rounded-full bg-amber-100 px-2 py-0.5 text-[9px] font-medium text-amber-700">
                      {host.flagged}
                    </span>
                  ) : (
                    <span className="text-[10px] text-gray-300">—</span>
                  )}
                </td>
                <td className="px-3 py-2">
                  <span className={`text-[11px] font-bold ${scoreColor(host.score)}`}>
                    {host.score}%
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
