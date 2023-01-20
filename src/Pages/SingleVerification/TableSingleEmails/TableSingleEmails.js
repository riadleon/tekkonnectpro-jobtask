import React from 'react';

const TableSingleEmails = () => {
    return (
        <div className="overflow-x-auto">
            <table className="table w-3/4 mx-auto">

                <thead>
                    <tr>
                        <th></th>
                        <th>Email</th>
                        <th>Verified Status</th>
                    </tr>
                </thead>
                <tbody>

                    <tr className="hover">
                        <th>1</th>
                        <td>Cy Ganderton</td>
                        <td>Blue</td>
                    </tr>

  
                </tbody>
            </table>
        </div>
    );
};

export default TableSingleEmails;