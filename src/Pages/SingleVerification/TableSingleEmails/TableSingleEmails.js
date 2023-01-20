import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaBeer, FaMarkdown, FaThumbsUp } from 'react-icons/fa';

const TableSingleEmails = () => {
    const emails = useLoaderData([])
    console.log(emails);
    return (
        <div className="bg min-h-screen justify-center  items-center text-lg  pt-10">
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
                            <td> <FaThumbsUp className='success-color'></FaThumbsUp> </td>


                        </tr>)
                    }



                </tbody>
            </table>
        </div>
    );
};

export default TableSingleEmails;