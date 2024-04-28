import create from 'zustand';

const useTimesheetStore = create((set) => ({
    timeSheet: [],
    fetchLogs: () => set({ timeSheet: JSON.parse(localStorage.getItem('timeSheet')) || [] }),
    filterLogsByName: (nameFilter) => {
        const logs = JSON.parse(localStorage.getItem('timeSheet')) || [];
        if (!nameFilter.trim().length || !logs.length) {
            set({ timeSheet: logs });
        } else {
            const filteredLogs = logs.filter(obj => obj.name.includes(nameFilter.trim()));
            set({ timeSheet: filteredLogs });
        }
    },      
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
                return b.hours - a.hours;
                }
                return a.hours - b.hours;
            });
            return { timeSheet: updatedTimeSheet };
        });
    }
}));

export default useTimesheetStore;
