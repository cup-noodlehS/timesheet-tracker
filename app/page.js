'use client';

import { useState, useEffect, useRef } from "react";

import useTimesheetStore from "@/store/timesheetStore";

import Card from "@/components/timesheet/Card";
import NewLogModal from "@/components/timesheet/NewLogModal";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const { timeSheet, fetchLogs, addLog } = useTimesheetStore();
  const [showNewLogModal, setShowNewLogModal] = useState(false);
  const logsRef = useRef();  

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => { // Simulate API call
      fetchLogs(); // await this
      setIsLoading(false);
    }, 2000);
  }, []);

  const scrollToBottom = () => {
    logsRef.current.scrollTop = logsRef.current.scrollHeight;
  }

  useEffect(() => {
    scrollToBottom();
  }, [timeSheet])

  return (
    <div className="h-lvh">
      <header className="flex justify-center bg-blue-400 py-5 mb-3">
        <h1 className="font-bold text-xl text-white">Timesheet Tracker App</h1>
      </header>
      <main className="flex flex-col items-center h-[800px]">
        <div className="w-[400px] flex flex-col max-h-full rounded-md border border-gray-500/25 shadow-md">
          <div className="flex justify-between items-center px-5 py-4 bg-gray-100 border-b">
            <div className="font-semibold text-lg">
              Projects
            </div>
            <div className="bg-red-400 text-white text-center p-1 min-w-[25px] rounded-md">
              {timeSheet.length}
            </div>
          </div>
          <div className="flex justify-between font-medium border-b px-5 py-2">
            <div>
              Name
            </div>
            <div>
              Hours worked
            </div>
          </div>
          <div ref={logsRef} className="flex flex-col gap-3 py-3 grow overflow-y-auto">
            {timeSheet.map((item, index) => (
              <Card key={index} {...item} />
            ))}
            <div className="text-center">
              {isLoading && <div>Loading...</div>}
              {!isLoading && timeSheet.length === 0 && <div>No logs...</div>}
            </div>
          </div>
        </div>
        <button
          onClick={() => setShowNewLogModal(true)}
          className="flex justify-center items-center bg-blue-400 w-[400px] my-5 py-4 rounded-md text-white hover:bg-blue-500 transition duration-200"
        >
          Log Time
        </button>
      </main>
      {showNewLogModal && <NewLogModal close={() => setShowNewLogModal(false)} />}
    </div>
  );
}
