import { useMemo, useState } from "react";
import {
  getAdjacentDays,
  getDayById,
  getInitialDayId,
  getPhasesWithDays,
  getRoadmap,
  saveSelectedDay,
} from "../utils/roadmapUtils";

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Badge({ children, variant = "light" }) {
  const styles = {
    light: "bg-white/80 text-slate-700 ring-1 ring-slate-200 backdrop-blur",
    dark: "bg-slate-950/70 text-white ring-1 ring-white/10 backdrop-blur",
    blue: "bg-blue-50 text-blue-700 ring-1 ring-blue-100",
    emerald: "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-100",
    amber: "bg-amber-50 text-amber-700 ring-1 ring-amber-100",
    rose: "bg-rose-50 text-rose-700 ring-1 ring-rose-100",
    violet: "bg-violet-50 text-violet-700 ring-1 ring-violet-100",
    pink: "bg-pink-50 text-pink-700 ring-1 ring-pink-100",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-black",
        styles[variant] || styles.light,
      )}
    >
      {children}
    </span>
  );
}

function Section({ title, subtitle, icon, children, accent = "slate" }) {
  const accents = {
    slate: "from-slate-50 via-white to-slate-50",
    blue: "from-blue-50 via-white to-cyan-50",
    violet: "from-violet-50 via-white to-fuchsia-50",
    emerald: "from-emerald-50 via-white to-lime-50",
    amber: "from-amber-50 via-white to-orange-50",
    rose: "from-rose-50 via-white to-pink-50",
  };

  return (
    <section className="overflow-hidden rounded-[2rem] border border-white/80 bg-white/85 shadow-xl shadow-slate-200/60 backdrop-blur">
      <div
        className={cn(
          "border-b border-white/70 bg-gradient-to-r px-5 py-4",
          accents[accent] || accents.slate,
        )}
      >
        <div className="flex items-center gap-3">
          {icon && (
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-slate-950 to-slate-700 text-lg text-white shadow-lg shadow-slate-900/20">
              {icon}
            </div>
          )}

          <div>
            <h2 className="text-lg font-black tracking-tight text-slate-950">
              {title}
            </h2>
            {subtitle && (
              <p className="mt-0.5 text-sm text-slate-500">{subtitle}</p>
            )}
          </div>
        </div>
      </div>

      <div className="p-5">{children}</div>
    </section>
  );
}

function List({ items }) {
  if (!items?.length) return null;

  return (
    <ul className="space-y-3">
      {items.map((item, index) => (
        <li key={index} className="group flex gap-3 text-sm leading-6">
          <span className="mt-1.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-slate-100 to-white text-[10px] font-black text-slate-600 ring-1 ring-slate-200 transition group-hover:from-slate-950 group-hover:to-slate-700 group-hover:text-white">
            {index + 1}
          </span>
          <span className="text-slate-700">{item}</span>
        </li>
      ))}
    </ul>
  );
}

function createTaskCopyText(selectedDay, block, items = []) {
  return [
    `Tao đang học ${selectedDay.day}: ${selectedDay.title}`,
    `Block: ${block.time} — ${block.label}`,
    "",
    "Việc cần làm:",
    ...items.map((item, index) => `${index + 1}. ${item}`),
  ].join("\n");
}

function createFullDayCopyText(selectedDay) {
  const lines = [
    `Tao đang học ${selectedDay.day}: ${selectedDay.title}`,
    "",
    "Mục tiêu hôm nay:",
    ...(selectedDay.goal || []).map((item, index) => `${index + 1}. ${item}`),
    "",
    "Các block học:",
  ];

  (selectedDay.timeBlocks || []).forEach((block, blockIndex) => {
    lines.push("");
    lines.push(`${blockIndex + 1}. ${block.time} — ${block.label}`);
    lines.push("Việc cần làm:");

    (block.tasks || []).forEach((task, taskIndex) => {
      lines.push(`  ${taskIndex + 1}. ${task}`);
    });

    lines.push("Output:");

    (block.output || []).forEach((output, outputIndex) => {
      lines.push(`  ${outputIndex + 1}. ${output}`);
    });
  });

  return lines.join("\n");
}

async function copyToClipboard(text) {
  if (navigator.clipboard && window.isSecureContext) {
    await navigator.clipboard.writeText(text);
    return;
  }

  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.style.position = "fixed";
  textarea.style.left = "-9999px";
  document.body.appendChild(textarea);
  textarea.focus();
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
}

function CopyButton({ text, children = "Copy", className = "" }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await copyToClipboard(text);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 1200);
    } catch (error) {
      console.error("Copy failed:", error);
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-xl px-3 py-2 text-xs font-black transition active:scale-95",
        copied
          ? "bg-emerald-500 text-white shadow-lg shadow-emerald-500/25"
          : "bg-slate-950 text-white shadow-lg shadow-slate-900/20 hover:-translate-y-0.5 hover:bg-blue-600",
        className,
      )}
    >
      <span>{copied ? "✅" : "📋"}</span>
      {copied ? "Đã copy" : children}
    </button>
  );
}

function TaskCopyPanel({ selectedDay, block }) {
  const items = block.tasks || [];
  const copyText = createTaskCopyText(selectedDay, block, items);

  if (!items.length) return null;

  return (
    <div className="overflow-hidden rounded-3xl border border-blue-200/80 bg-gradient-to-br from-blue-50 via-white to-cyan-50 shadow-lg shadow-blue-100/50">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-blue-100 bg-white/70 px-4 py-3 backdrop-blur">
        <h4 className="flex items-center gap-2 text-sm font-black text-slate-950">
          <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-500/25">
            🛠️
          </span>
          Việc phải làm
        </h4>

        <CopyButton text={copyText}>Copy block</CopyButton>
      </div>

      <div className="space-y-3 p-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="group flex gap-3 rounded-2xl border border-white/80 bg-white/85 p-3 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-200 hover:bg-white hover:shadow-md"
          >
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-violet-600 text-xs font-black text-white shadow-md shadow-blue-500/20">
              {index + 1}
            </div>

            <p className="flex-1 text-sm leading-6 text-slate-700">{item}</p>

            <CopyButton
              text={[
                `Tao đang học ${selectedDay.day}: ${selectedDay.title}`,
                `Block: ${block.time} — ${block.label}`,
                "",
                `Task ${index + 1}: ${item}`,
              ].join("\n")}
              className="shrink-0 self-start opacity-80 group-hover:opacity-100"
            >
              Copy
            </CopyButton>
          </div>
        ))}
      </div>
    </div>
  );
}

function OutputPanel({ items }) {
  if (!items?.length) return null;

  return (
    <div className="overflow-hidden rounded-3xl border border-emerald-200/80 bg-gradient-to-br from-emerald-50 via-white to-lime-50 shadow-lg shadow-emerald-100/50">
      <div className="border-b border-emerald-100 bg-white/70 px-4 py-3 backdrop-blur">
        <h4 className="flex items-center gap-2 text-sm font-black text-slate-950">
          <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-600 to-lime-500 text-white shadow-lg shadow-emerald-500/25">
            ✅
          </span>
          Output cần có
        </h4>
      </div>

      <div className="p-4">
        <List items={items} />
      </div>
    </div>
  );
}

function MethodCard({ label, text }) {
  const colors = {
    mapping: "from-blue-50 to-cyan-50 border-blue-100",
    ultralearning: "from-violet-50 to-fuchsia-50 border-violet-100",
    goldilocks: "from-amber-50 to-orange-50 border-amber-100",
    hardMode: "from-rose-50 to-pink-50 border-rose-100",
  };

  return (
    <div
      className={cn(
        "rounded-3xl border bg-gradient-to-br p-5 shadow-sm transition hover:-translate-y-1 hover:bg-white hover:shadow-lg",
        colors[label] || "from-slate-50 to-white border-slate-200",
      )}
    >
      <p className="mb-2 text-sm font-black capitalize text-slate-950">
        {label}
      </p>
      <p className="text-sm leading-6 text-slate-600">{text}</p>
    </div>
  );
}

function ProgressBar({ value }) {
  const safeValue = Math.max(0, Math.min(100, value || 0));

  return (
    <div className="h-2 overflow-hidden rounded-full bg-slate-200">
      <div
        className="h-full rounded-full bg-gradient-to-r from-blue-500 via-violet-500 to-pink-500"
        style={{ width: `${safeValue}%` }}
      />
    </div>
  );
}

function getStatusBadgeVariant(status) {
  if (status === "done") return "emerald";
  if (status === "doing") return "blue";
  if (status === "blocked") return "rose";
  return "light";
}

function getBlockTypeStyle(type) {
  const styles = {
    setup:
      "border-blue-200 bg-gradient-to-br from-blue-50 via-white to-cyan-50",
    deep: "border-violet-200 bg-gradient-to-br from-violet-50 via-white to-fuchsia-50",
    practice:
      "border-emerald-200 bg-gradient-to-br from-emerald-50 via-white to-lime-50",
    review:
      "border-amber-200 bg-gradient-to-br from-amber-50 via-white to-orange-50",
    break:
      "border-slate-200 bg-gradient-to-br from-slate-50 via-white to-slate-100",
  };

  return styles[type] || styles.break;
}

function getBlockDotStyle(type) {
  const styles = {
    setup: "from-blue-500 to-cyan-400",
    deep: "from-violet-500 to-fuchsia-400",
    practice: "from-emerald-500 to-lime-400",
    review: "from-amber-500 to-orange-400",
    break: "from-slate-500 to-slate-400",
  };

  return styles[type] || styles.break;
}

function RightTimeline({
  selectedDay,
  activeBlockId,
  onJumpBlock,
  currentProgress,
}) {
  const blocks = selectedDay.timeBlocks || [];

  return (
    <aside className="xl:sticky xl:top-6 xl:h-[calc(100vh-48px)] xl:overflow-y-auto">
      <div className="overflow-hidden rounded-[2rem] border border-white/80 bg-white/80 shadow-2xl shadow-slate-300/60 backdrop-blur-xl">
        <div className="bg-gradient-to-br from-violet-950 via-slate-950 to-blue-950 p-5 text-white">
          <p className="text-xs font-black uppercase tracking-[0.25em] text-cyan-300">
            Quick Jump
          </p>

          <h2 className="mt-2 text-xl font-black">Timeline</h2>

          <p className="mt-2 text-sm leading-6 text-slate-300">
            Bấm phát nhảy tới block, khỏi kéo chuột mỏi tay.
          </p>

          <div className="mt-4 rounded-2xl bg-white/10 p-4 ring-1 ring-white/10">
            <div className="mb-2 flex items-center justify-between text-xs font-black">
              <span>Ngày hiện tại</span>
              <span>{currentProgress}%</span>
            </div>

            <div className="h-2 overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full rounded-full bg-gradient-to-r from-cyan-300 via-blue-400 to-fuchsia-400"
                style={{ width: `${currentProgress}%` }}
              />
            </div>
          </div>

          <CopyButton
            text={createFullDayCopyText(selectedDay)}
            className="mt-4 w-full bg-white text-slate-950 hover:bg-cyan-100"
          >
            Copy ngày này
          </CopyButton>
        </div>

        <div className="p-4">
          <div className="mb-3 flex items-center justify-between gap-3">
            <p className="text-sm font-black text-slate-950">
              {selectedDay.day}
            </p>
            <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-black text-slate-500">
              {blocks.length} block
            </span>
          </div>

          <div className="relative space-y-2">
            <div className="absolute bottom-4 left-4 top-4 w-px bg-gradient-to-b from-blue-200 via-violet-200 to-pink-200" />

            {blocks.map((block, index) => {
              const active = activeBlockId === block.id;

              return (
                <button
                  key={block.id}
                  type="button"
                  onClick={() => onJumpBlock(block.id)}
                  className={cn(
                    "group relative w-full rounded-2xl p-3 pl-10 text-left transition",
                    active
                      ? "bg-slate-950 text-white shadow-lg shadow-slate-900/20"
                      : "bg-white text-slate-700 ring-1 ring-slate-200 hover:-translate-y-0.5 hover:ring-blue-200 hover:shadow-md",
                  )}
                >
                  <span
                    className={cn(
                      "absolute left-[11px] top-4 h-3.5 w-3.5 rounded-full bg-gradient-to-br ring-4",
                      getBlockDotStyle(block.type),
                      active ? "ring-slate-700" : "ring-white",
                    )}
                  />

                  <div className="flex items-start justify-between gap-2">
                    <div className="min-w-0">
                      <div
                        className={cn(
                          "text-[11px] font-black",
                          active ? "text-cyan-300" : "text-blue-600",
                        )}
                      >
                        #{index + 1} · {block.time}
                      </div>

                      <p
                        className={cn(
                          "mt-1 line-clamp-2 text-sm font-black leading-5",
                          active ? "text-white" : "text-slate-800",
                        )}
                      >
                        {block.label}
                      </p>

                      <p
                        className={cn(
                          "mt-1 text-[11px] font-bold uppercase tracking-wide",
                          active ? "text-slate-300" : "text-slate-400",
                        )}
                      >
                        {block.type}
                      </p>
                    </div>

                    <span
                      className={cn(
                        "mt-1 rounded-full px-2 py-1 text-[10px] font-black",
                        active
                          ? "bg-white/10 text-white"
                          : "bg-slate-100 text-slate-500",
                      )}
                    >
                      GO
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </aside>
  );
}

export default function LearningRoadmapPage() {
  const roadmap = getRoadmap();
  const phases = useMemo(() => getPhasesWithDays(), []);
  const [selectedDayId, setSelectedDayId] = useState(getInitialDayId);
  const [activeBlockId, setActiveBlockId] = useState(null);

  const selectedDay = getDayById(selectedDayId) || roadmap.days[0];
  const { prevDay, nextDay } = getAdjacentDays(selectedDay.id);

  const selectedDayIndex = roadmap.days.findIndex(
    (day) => day.id === selectedDay.id,
  );

  const totalDays = roadmap.meta?.totalDays || roadmap.days.length;
  const currentProgress = Math.round(
    ((selectedDayIndex + 1) / totalDays) * 100,
  );

  const selectDay = (dayId) => {
    setSelectedDayId(dayId);

    const nextDayData = getDayById(dayId);
    setActiveBlockId(nextDayData?.timeBlocks?.[0]?.id || null);

    saveSelectedDay(dayId);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const jumpToBlock = (blockId) => {
    setActiveBlockId(blockId);

    const element = document.getElementById(blockId);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,#bfdbfe_0,#f8fafc_30%,#ede9fe_65%,#fce7f3_100%)] text-slate-900">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -left-24 top-24 h-72 w-72 rounded-full bg-blue-400/20 blur-3xl" />
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-violet-400/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-80 w-80 rounded-full bg-pink-400/10 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-[1800px] grid-cols-1 gap-6 px-4 py-6 lg:grid-cols-[340px_minmax(0,1fr)] xl:grid-cols-[340px_minmax(0,1fr)_300px]">
        <aside className="lg:sticky lg:top-6 lg:h-[calc(100vh-48px)] lg:overflow-y-auto">
          <div className="overflow-hidden rounded-[2rem] border border-white/70 bg-white/75 shadow-2xl shadow-slate-300/70 backdrop-blur-xl">
            <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 p-5 text-white">
              <div className="mb-4 flex items-center justify-between gap-3">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.25em] text-cyan-300">
                    Learning Map
                  </p>
                  <h1 className="mt-2 text-2xl font-black tracking-tight">
                    Laravel / React
                  </h1>
                </div>

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-2xl ring-1 ring-white/10">
                  🦈
                </div>
              </div>

              <p className="text-sm leading-6 text-slate-300">
                {totalDays} ngày hard mode. Học tới đâu bấm tới đó, khỏi lạc như
                gà mới cài Arch.
              </p>

              <div className="mt-5 rounded-2xl bg-white/10 p-4 ring-1 ring-white/10">
                <div className="mb-2 flex items-center justify-between text-xs font-black">
                  <span>Tiến độ hiện tại</span>
                  <span>{currentProgress}%</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-white/10">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400"
                    style={{ width: `${currentProgress}%` }}
                  />
                </div>
              </div>

              <div className="mt-4">
                <CopyButton
                  text={createFullDayCopyText(selectedDay)}
                  className="w-full bg-white text-slate-950 hover:bg-cyan-100"
                >
                  Copy toàn bộ ngày này
                </CopyButton>
              </div>
            </div>

            <div className="space-y-5 p-4">
              {phases.map((phase) => {
                const phaseTotalDays = phase.totalDays || phase.days.length;
                const phaseDoneDays =
                  phase.doneDays ||
                  phase.days.filter((day) => day.status === "done").length;
                const phaseProgress =
                  phaseTotalDays > 0
                    ? Math.round((phaseDoneDays / phaseTotalDays) * 100)
                    : 0;

                return (
                  <div key={phase.id} className="rounded-3xl bg-slate-50 p-3">
                    <div className="mb-3">
                      <div className="mb-2 flex items-center justify-between gap-3">
                        <p className="text-sm font-black text-slate-950">
                          {phase.name}
                        </p>
                        <span className="text-xs font-bold text-slate-400">
                          {phaseTotalDays} ngày
                        </span>
                      </div>

                      <p className="mb-3 line-clamp-2 text-xs leading-5 text-slate-500">
                        {phase.title}
                      </p>

                      <ProgressBar value={phaseProgress} />
                    </div>

                    <div className="space-y-1.5">
                      {phase.days.map((day) => {
                        const active = day.id === selectedDay.id;

                        return (
                          <button
                            key={day.id}
                            type="button"
                            onClick={() => selectDay(day.id)}
                            className={cn(
                              "group w-full rounded-2xl px-3 py-3 text-left transition",
                              active
                                ? "bg-gradient-to-br from-slate-950 via-blue-950 to-violet-950 text-white shadow-lg shadow-blue-900/20"
                                : "bg-white text-slate-700 ring-1 ring-slate-200 hover:-translate-y-0.5 hover:ring-blue-200 hover:shadow-md",
                            )}
                          >
                            <div className="flex items-start justify-between gap-3">
                              <div className="min-w-0">
                                <div className="flex items-center gap-2">
                                  <span
                                    className={cn(
                                      "text-xs font-black",
                                      active
                                        ? "text-cyan-300"
                                        : "text-blue-600",
                                    )}
                                  >
                                    {day.day}
                                  </span>
                                  <span
                                    className={cn(
                                      "h-1.5 w-1.5 rounded-full",
                                      day.status === "doing"
                                        ? "bg-blue-400"
                                        : day.status === "done"
                                          ? "bg-emerald-400"
                                          : "bg-slate-300",
                                    )}
                                  />
                                </div>

                                <p
                                  className={cn(
                                    "mt-1 truncate text-sm font-bold",
                                    active ? "text-white" : "text-slate-800",
                                  )}
                                >
                                  {day.title}
                                </p>
                              </div>

                              {active && (
                                <span className="rounded-full bg-white/10 px-2 py-1 text-[10px] font-black text-white">
                                  OPEN
                                </span>
                              )}
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </aside>

        <main className="space-y-6">
          <header className="overflow-hidden rounded-[2rem] border border-white/70 bg-slate-950 shadow-2xl shadow-slate-400/60">
            <div className="relative p-6 text-white md:p-8">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#3b82f6_0,transparent_32%),radial-gradient(circle_at_bottom_left,#ec4899_0,transparent_28%),radial-gradient(circle_at_center,#8b5cf6_0,transparent_22%)] opacity-50" />

              <div className="relative">
                <div className="mb-5 flex flex-wrap gap-2">
                  <Badge variant="dark">{selectedDay.day}</Badge>
                  <Badge variant="dark">{selectedDay.difficulty}</Badge>
                  <Badge variant="dark">{selectedDay.duration}</Badge>
                  <Badge variant={getStatusBadgeVariant(selectedDay.status)}>
                    {selectedDay.status}
                  </Badge>
                </div>

                <h1 className="max-w-4xl text-3xl font-black leading-tight tracking-tight md:text-5xl">
                  {selectedDay.title}
                </h1>

                <p className="mt-5 max-w-4xl text-sm leading-7 text-slate-300 md:text-base">
                  {selectedDay.hook}
                </p>

                <div className="mt-7 grid gap-3 sm:grid-cols-3">
                  <div className="rounded-3xl bg-white/10 p-4 ring-1 ring-white/10 backdrop-blur">
                    <p className="text-xs font-black uppercase tracking-wider text-slate-400">
                      Ngày
                    </p>
                    <p className="mt-1 text-2xl font-black">
                      {selectedDayIndex + 1}/{totalDays}
                    </p>
                  </div>

                  <div className="rounded-3xl bg-white/10 p-4 ring-1 ring-white/10 backdrop-blur">
                    <p className="text-xs font-black uppercase tracking-wider text-slate-400">
                      Blocks
                    </p>
                    <p className="mt-1 text-2xl font-black">
                      {selectedDay.timeBlocks?.length || 0}
                    </p>
                  </div>

                  <div className="rounded-3xl bg-white/10 p-4 ring-1 ring-white/10 backdrop-blur">
                    <p className="text-xs font-black uppercase tracking-wider text-slate-400">
                      Checklist
                    </p>
                    <p className="mt-1 text-2xl font-black">
                      {selectedDay.checklist?.length || 0}
                    </p>
                  </div>
                </div>

                <div className="mt-7 flex flex-wrap gap-3">
                  <button
                    type="button"
                    disabled={!prevDay}
                    onClick={() => prevDay && selectDay(prevDay.id)}
                    className="rounded-2xl bg-white px-5 py-3 text-sm font-black text-slate-950 shadow-lg shadow-black/10 transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    ← Ngày trước
                  </button>

                  <button
                    type="button"
                    disabled={!nextDay}
                    onClick={() => nextDay && selectDay(nextDay.id)}
                    className="rounded-2xl bg-gradient-to-r from-blue-500 to-violet-500 px-5 py-3 text-sm font-black text-white shadow-lg shadow-blue-500/30 transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    Ngày tiếp →
                  </button>

                  <CopyButton
                    text={createFullDayCopyText(selectedDay)}
                    className="bg-cyan-400 text-slate-950 hover:bg-cyan-300"
                  >
                    Copy ngày này
                  </CopyButton>
                </div>
              </div>
            </div>
          </header>

          <Section
            title="Mục tiêu hôm nay"
            subtitle="Xong mấy cái này mới được gáy."
            icon="🎯"
            accent="blue"
          >
            <List items={selectedDay.goal} />
          </Section>

          <Section
            title="Góc nhìn học"
            subtitle="Đọc để biết vì sao phải học, không học vẹt."
            icon="🧠"
            accent="violet"
          >
            <div className="grid gap-4 md:grid-cols-3">
              {selectedDay.perspectives?.map((item) => (
                <div
                  key={item.label}
                  className="rounded-3xl border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-blue-50 p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-violet-600 text-white shadow-lg shadow-blue-500/20">
                    ✦
                  </div>
                  <h3 className="mb-2 text-base font-black text-slate-950">
                    {item.label}
                  </h3>
                  <p className="text-sm leading-6 text-slate-600">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </Section>

          <Section
            title="Phương pháp"
            subtitle="Bốn cái khung để học không bị trôi não."
            icon="⚙️"
            accent="amber"
          >
            <div className="grid gap-4 md:grid-cols-2">
              {selectedDay.methods &&
                Object.entries(selectedDay.methods).map(([key, value]) => (
                  <MethodCard key={key} label={key} text={value} />
                ))}
            </div>
          </Section>

          <Section
            title="Lịch học trong ngày"
            subtitle="Cứ theo block mà đập, copy gửi tao check cho lẹ."
            icon="⏱️"
            accent="rose"
          >
            <div className="relative space-y-5">
              <div className="absolute bottom-4 left-5 top-4 hidden w-px bg-gradient-to-b from-blue-300 via-violet-300 to-pink-300 md:block" />

              {selectedDay.timeBlocks?.map((block, index) => (
                <article
                  id={block.id}
                  key={block.id}
                  className={cn(
                    "scroll-mt-6 relative rounded-3xl border p-5 shadow-lg shadow-slate-200/50 transition hover:-translate-y-0.5 hover:shadow-xl",
                    activeBlockId === block.id ? "ring-4 ring-blue-300/50" : "",
                    getBlockTypeStyle(block.type),
                  )}
                >
                  <div className="absolute left-4 top-5 hidden h-3 w-3 rounded-full bg-slate-950 ring-4 ring-white md:block" />

                  <div className="md:pl-8">
                    <div className="mb-4 flex flex-wrap items-center gap-2">
                      <Badge variant="light">#{index + 1}</Badge>
                      <Badge variant="blue">{block.time}</Badge>
                      <Badge variant="violet">{block.type}</Badge>
                    </div>

                    <h3 className="text-lg font-black tracking-tight text-slate-950">
                      {block.label}
                    </h3>

                    {block.description && (
                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        {block.description}
                      </p>
                    )}

                    <div className="mt-5 grid gap-4 xl:grid-cols-2">
                      <TaskCopyPanel selectedDay={selectedDay} block={block} />
                      <OutputPanel items={block.output} />
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </Section>

          <div className="grid gap-6 xl:grid-cols-2">
            <Section
              title="Checklist cuối ngày"
              subtitle="Tick hết thì mới qua ngày sau."
              icon="📌"
              accent="emerald"
            >
              <List items={selectedDay.checklist} />
            </Section>

            <Section
              title="Benchmark"
              subtitle="Chuẩn pass/fail, đừng tự lừa."
              icon="🏁"
              accent="blue"
            >
              <p className="whitespace-pre-line text-sm leading-7 text-slate-700">
                {selectedDay.benchmark}
              </p>
            </Section>
          </div>

          {selectedDay.definitionOfDone && (
            <Section title="Definition of Done" icon="🔒" accent="violet">
              <List items={selectedDay.definitionOfDone} />
            </Section>
          )}

          {selectedDay.evidence && (
            <Section title="Evidence phải lưu lại" icon="📂" accent="amber">
              <List items={selectedDay.evidence} />
            </Section>
          )}
        </main>

        <RightTimeline
          selectedDay={selectedDay}
          activeBlockId={activeBlockId}
          onJumpBlock={jumpToBlock}
          currentProgress={currentProgress}
        />
      </div>
    </div>
  );
}
