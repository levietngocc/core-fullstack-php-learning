import roadmap from "../data/roadmap";

const SELECTED_DAY_KEY = "selected-roadmap-day";

function canUseLocalStorage() {
  return (
    typeof window !== "undefined" && typeof window.localStorage !== "undefined"
  );
}

export function getRoadmap() {
  return roadmap;
}

export function getDays() {
  return roadmap.days || [];
}

export function getPhases() {
  return roadmap.phases || [];
}

export function getPhasesWithDays() {
  const days = getDays();

  return getPhases().map((phase) => {
    const phaseDays = days.filter((day) => day.phaseId === phase.id);

    const totalDays = phaseDays.length;
    const doingDays = phaseDays.filter((day) => day.status === "doing").length;
    const doneDays = phaseDays.filter((day) => day.status === "done").length;

    const progress =
      totalDays > 0 ? Math.round((doneDays / totalDays) * 100) : 0;

    return {
      ...phase,
      days: phaseDays,
      totalDays,
      doingDays,
      doneDays,
      progress,
    };
  });
}

export function getDayById(dayId) {
  if (!dayId) return null;

  return getDays().find((day) => day.id === dayId) || null;
}

export function getDayIndex(dayId) {
  if (!dayId) return -1;

  return getDays().findIndex((day) => day.id === dayId);
}

export function getAdjacentDays(dayId) {
  const days = getDays();
  const index = getDayIndex(dayId);

  if (index === -1) {
    return {
      prevDay: null,
      nextDay: null,
    };
  }

  return {
    prevDay: index > 0 ? days[index - 1] : null,
    nextDay: index < days.length - 1 ? days[index + 1] : null,
  };
}

export function getInitialDayId() {
  const days = getDays();

  if (canUseLocalStorage()) {
    const savedDayId = window.localStorage.getItem(SELECTED_DAY_KEY);

    if (savedDayId && getDayById(savedDayId)) {
      return savedDayId;
    }
  }

  const doingDay = days.find((day) => day.status === "doing");

  return doingDay?.id || days[0]?.id || null;
}

export function saveSelectedDay(dayId) {
  if (!dayId || !getDayById(dayId)) return;

  if (canUseLocalStorage()) {
    window.localStorage.setItem(SELECTED_DAY_KEY, dayId);
  }
}
