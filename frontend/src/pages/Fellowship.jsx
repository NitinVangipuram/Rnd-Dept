import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PageSkeleton from '../components/LoadingSkeleton/PageSkeleton';

export default function Fellowship() {
    const [info, setInfo] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [totalEntries, setTotalEntries] = useState(0);
    const [totalValue, setTotalValue] = useState(0);

    const SPREADSHEET_ID = '1ebO7W5s2yQEWFcNnhX5Jr2n4tMwzspFc';
    const GID = '1256952165';
    const CSV_EXPORT_URL = `https://docs.google.com/spreadsheets/d/${SPREADSHEET_ID}/export?format=csv&gid=${GID}`;

    
    // This will replace problematic characters and make the header a valid, consistent key
    const sanitizeHeader = (header) => {
        
        if (header.includes('Value') && header.includes('₹1,00,000')) {
            return 'value_inr_lakh';
        }
        
        if (header.includes('Sanction date')) {
            return 'sanction_date';
        }
        
        if (header.includes('Duration (years)')) {
            return 'duration_years';
        }
        // For other headers, replace non-alphanumeric with underscore and convert to lowercase
        return header
            .trim()
            .replace(/[^a-zA-Z0-9_]+/g, '_') 
            .replace(/_+/g, '_') 
            .toLowerCase(); 
    };

    // Robust CSV line parser that handles quoted fields
    const parseCsvLine = (line) => {
        const result = [];
        let inQuote = false;
        let currentField = '';

        for (let i = 0; i < line.length; i++) {
            const char = line[i];

            if (char === '"') {
                inQuote = !inQuote;
                // If it's an escaped double quote inside a field (""), then add one double quote
                // This handles cases like "Some ""quoted"" text"
                if (inQuote && i > 0 && line[i - 1] === '"') {
                    currentField += '"';
                }
            } else if (char === ',' && !inQuote) {
                result.push(currentField.trim());
                currentField = '';
            } else {
                currentField += char;
            }
        }
        result.push(currentField.trim()); // Add the last field
        return result;
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);

                const res = await axios.get(CSV_EXPORT_URL);
                const csvText = res.data;

                const lines = csvText.split('\n').filter(line => line.trim() !== '');
                if (lines.length === 0) {
                    throw new Error("No data found in the CSV file.");
                }

                // Parse headers using the robust parser
                const rawHeaders = parseCsvLine(lines[0]);
                const headers = rawHeaders.map(sanitizeHeader);

                if (headers.length === 0) {
                    throw new Error("Could not parse headers from CSV data.");
                }

                // console.log("Raw Headers:", rawHeaders);
                // console.log("Sanitized Headers:", headers);

                const parsedData = lines.slice(1).map(line => {
                    const values = parseCsvLine(line); // Use robust parser for data rows too
                    let obj = {};
                    headers.forEach((header, index) => {
                        obj[header] = (values[index] || '').trim();
                    });
                    return obj;
                }).filter(item => Object.values(item).some(val => val !== '')); // Filter out completely empty rows

                if (parsedData.length === 0) {
                    console.warn("No valid data rows found after parsing CSV. Check sheet content.");
                }

                setInfo(parsedData);

            } catch (err) {
                console.error("Failed to fetch or parse fellowship documents:", err);
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [CSV_EXPORT_URL]);

    useEffect(() => {
        let sumValue = 0;
        let count = 0;

        info.forEach((item) => {
            // Use the consistent, sanitized key for the "Value" column
            const valueKey = 'value_inr_lakh';

            const rawValue = item[valueKey];

            if (rawValue) { 
                const numericValue = parseFloat(String(rawValue).replace(/[^0-9.]/g, ''));

                if (!isNaN(numericValue)) {
                    sumValue += numericValue * 100000; // Convert lakhs to rupees
                } else {
                    console.warn(`Skipping non-numeric or invalid value for "${valueKey}":`, rawValue);
                }
            } else {
                console.warn(`"${valueKey}" key not found or is empty in item:`, item);
            }
            count++;
        });

        setTotalEntries(count);
        setTotalValue(sumValue);
    }, [info]);

    // Function to handle smooth scrolling to the top
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    if (loading) {
        return <PageSkeleton />;
    }

    if (error) {
        return (
            <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8 text-gray-800 flex flex-col justify-center items-center text-red-600">
                <p className="text-xl font-semibold">Error: {error.message}</p>
                <p className="text-sm mt-2 text-center">Please ensure the Google Sheet is publicly accessible for CSV export and the GID is correct.</p>
            </div>
        );
    }

    return (
        <div className="p-6" id="sponsored-projects-table">
            <h1 id='fellowship-top' className='text-3xl font-bold text-center text-gray-800 mb-6'>
                Fellowships
            </h1>
            {loading ? (
                <div className="animate-pulse space-y-2 mb-4">
                    <div className="h-4 bg-gray-200 rounded w-1/3"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                </div>
            ) : (
                <ul className="project-summary">
                    <li><b>Total Projects:</b> {totalEntries}</li>
                    <li><b>Total Value of Projects:</b> ₹{totalValue.toLocaleString('en-IN')} </li>
                </ul>
            )}

            <div className="overflow-x-auto shadow-lg rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                    {info.length > 0 && (
                        <thead className="bg-purple-800">
                            <tr>
                                {Object.keys(info[0]).map((key, index) => {
                                    let displayKey = key;

                                    // Specific display names for sanitized keys
                                    if (key === 'value_inr_lakh') {
                                        displayKey = 'Value (₹1,00,000)'; // Or 'Value in Lakhs' as preferred
                                    } else if (key === 'sanction_date') {
                                        displayKey = 'Sanction Date';
                                    } else if (key === 'duration_years') {
                                        displayKey = 'Duration (Years)';
                                    } else {
                                        // For other keys, just capitalize words and replace underscores
                                        displayKey = key.replace(/_/g, ' ')
                                            .replace(/\b\w/g, char => char.toUpperCase());
                                    }

                                    return (
                                        <th
                                            key={index}
                                            className="px-6 py-2 text-left text-sm font-medium text-white uppercase tracking-wider whitespace-nowrap"
                                        >
                                            {displayKey}
                                        </th>
                                    );
                                })}
                            </tr>
                        </thead>
                    )}
                    <tbody className="bg-white divide-y divide-gray-200">
                        {info.map((item, idx) => (
                            <tr key={idx}>
                                {Object.keys(info[0]).map((key, i) => (
                                    <td
                                        key={i}
                                        className="px-6 py-4 whitespace-normal text-sm text-gray-700 break-words"
                                        style={{ maxWidth: '300px' }}
                                    >
                                        {item[key] === '' ? <>&nbsp;</> : item[key]}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Back to Top Button */}
            <div className="cursor-pointer text-center mt-10">
                <button
                    onClick={scrollToTop}
                    className="cursor-pointer inline-block bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition duration-300"
                >
                    Back to Top
                </button>
            </div>
        </div>
    );
}