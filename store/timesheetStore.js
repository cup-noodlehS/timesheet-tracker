import create from 'zustand';

const useTimesheetStore = create((set) => ({
    timeSheet: [],
    fetchLogs: () => set({ timeSheet: JSON.parse(localStorage.getItem('timeSheet')) || [] }),
    addLog: (data) => {
        const newLog = {
        name: data.name.trim(),
        hours: data.hours,
        createdOn: new Date()
        };
        set((state) => {
        const updatedTimeSheet = [...state.timeSheet, newLog];
        localStorage.setItem('timeSheet', JSON.stringify(updatedTimeSheet));
        return { timeSheet: updatedTimeSheet };
        });
    },
    sortLogs: (data) => {
        const descending = data;
        set((state) => {
            const updatedTimeSheet = [...state.timeSheet].sort((a, b) => {
                if (descending) {
                return b.createdOn - a.createdOn;
                }
                return a.createdOn - b.createdOn;
            });
            return { timeSheet: updatedTimeSheet };
        });
    }
}));

export default useTimesheetStore;
