// useTimesheetStore.js

import create from 'zustand';

const currentDate = new Date();
// remove this :)
const mockData = [
    {
        name: "Project A",
        hours: 5,
        createdOn: currentDate.setDate(currentDate.getDate() - 2)
    },
    {
        name: "Project B",
        hours: 3,
        createdOn: currentDate.setDate(currentDate.getDate() - 1)
    },
    {
        name: "Project C",
        hours: 8,
        createdOn: currentDate
    },
    {
        name: "Project Z",
        hours: 7,
        createdOn: currentDate.setDate(currentDate.getDate() - 2)
    },
    {
        name: "Project 2",
        hours: 3,
        createdOn: currentDate.setDate(currentDate.getDate() - 1)
    },
    {
        name: "Project v",
        hours: 8,
        createdOn: currentDate
    },
    {
        name: "Project A",
        hours: 5,
        createdOn: currentDate.setDate(currentDate.getDate() - 2)
    },
    {
        name: "Project B",
        hours: 3,
        createdOn: currentDate.setDate(currentDate.getDate() - 1)
    },
    {
        name: "Project C",
        hours: 8,
        createdOn: currentDate
    },
    {
        name: "Project Z",
        hours: 7,
        createdOn: currentDate.setDate(currentDate.getDate() - 2)
    },
    {
        name: "Project 2",
        hours: 3,
        createdOn: currentDate.setDate(currentDate.getDate() - 1)
    },
    {
        name: "Project v",
        hours: 8,
        createdOn: currentDate
    },
]
const useTimesheetStore = create((set) => ({
    timeSheet: [...mockData],
    fetchLogs: () => set({ timeSheet: JSON.parse(localStorage.getItem('timeSheet')) || [...mockData] }),
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
}));

export default useTimesheetStore;
