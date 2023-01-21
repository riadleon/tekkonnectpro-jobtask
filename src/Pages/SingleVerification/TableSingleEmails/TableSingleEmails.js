import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaBeer, FaFileCsv, FaMarkdown, FaThumbsUp } from 'react-icons/fa';
import { CSVLink } from "react-csv"

const TableSingleEmails = () => {
    const emails = useLoaderData([])
    console.log(emails);

    const headers = [

        {
            label: "email", key: "email",
        },

    ]

    const CsvLink = {
        filename: "singleVerifiedEmail.csv",
        headers: headers,
        data: emails
    }

    return (
        <div className="bg min-h-screen justify-center  items-center text-lg  pt-10">
            <div className='flex justify-around'>
                <CSVLink {...CsvLink}> <span><FaFileCsv></FaFileCsv></span> Download to Csv </CSVLink>

            </div>
            <table className="table w-3/4 mx-auto">

                <thead>
                    <tr>

                        <th>Serial</th>
                        <th>Verified Email</th>
                        <th>Verified Status</th>

                    </tr>
                </thead>
                <tbody>

                    {
                        emails.map((user, i) => <tr key={user._id}>
                            <th>{i + 1}</th>

                            <td>{user.email}</td>
                            <td className='success-color'> Done </td>


                        </tr>)
                    }



                </tbody>
            </table>
        </div>
    );
};

export default TableSingleEmails;