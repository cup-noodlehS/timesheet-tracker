'use client';
import React, { useRef, useEffect, useState } from 'react'

import useTimesheetStore from "@/store/timesheetStore";

function NewLogModal(props) {
    const { addLog } = useTimesheetStore();
    const {close} = props;
    const modalRef = useRef();
    const [name, setName] = useState('');
    const [hours, setHours] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

    const handleClickOutside = (event) => {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
            close();
        }
    };

    const saveLog = () => {
        setIsLoading(true);
        setTimeout(() => { // simulate api call
            const data = {
                name,
                hours
            };
            addLog(data); // await this
            setIsLoading(true);
            close();
        }, 2000);
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
            <div ref={modalRef} className="flex flex-col gap-3 bg-white px-5 py-3 rounded-md">
                <h2 className="text-lg font-bold mb-2">Add New Log</h2>
                <div className="flex flex-col gap-1">
                    <label for="name">Name</label>
                    <input onChange={(e) => setName(e.target.value)} id="name" type="text" placeholder="Project Name" className="border rounded-md px-3 py-2 w-full" />
                </div>

                <div className="flex flex-col gap-1">
                    <label for="hours">Hours Worked</label>
                    <input onChange={(e) => setHours(e.target.value)} id="hours" type="number" placeholder="Hours Worked" className="border rounded-md px-3 py-2 w-full" />
                </div>
                <div className="flex justify-end">
                    <button onClick={close} className="bg-red-400 px-5 py-3 rounded-md text-white hover:bg-red-500 transition duration-200">
                        Cancel
                    </button>
                    <button onClick={saveLog} className="bg-blue-400 px-5 py-3 rounded-md text-white ml-3 hover:bg-blue-500 transition duration-200">
                        {isLoading ? 'Saving...' : 'Add'}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default NewLogModal