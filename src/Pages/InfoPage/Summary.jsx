import React from 'react'
import { useParams } from 'react-router-dom';

function Summary() {
    let { zone } = useParams();
    return (
        <div>

            <div className='bg-[url(https://t3.ftcdn.net/jpg/05/12/01/78/360_F_512017875_2R6eN5krsEM9ZOcbGnYwtuHLIyAQCMyS.jpg)] backdrop-blur-sm h-36 flex justify-center items-center'>
                <div className='bg-yellow-300 font-bold w-fit h-16 p-4 '>
                    {zone}/ Summary
                </div>
            </div>
            <div className='flex justify-center mt-6'>
            <div className='w-1/2'>
                <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table class="w-full text-sm text-left rtl:text-right  ">
                        <thead class="text-xs uppercase bg-gray-50 ">
                            <tr>
                                <th scope="col" class="px-6 py-3">
                                    STW
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Status
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Running Time
                                </th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr class="bg-green-500 border-b ">
                                <th scope="row" class="px-6 py-4 font-medium whitespace-nowrap ">
                                    STW 1
                                </th>
                                <td class="px-6 py-4 ">
                                    Yes
                                </td>
                                <td class="px-6 py-4">
                                    10 hrs
                                </td>
                            </tr>
                            <tr class="bg-red-600 border-b ">
                                <th scope="row" class="px-6 py-4 font-medium  whitespace-nowrap ">
                                    STW 2
                                </th>
                                <td class="px-6 py-4">
                                    No
                                </td>
                                <td class="px-6 py-4">
                                    10 hrs
                                </td>
                            </tr>
                            <tr class="bg-green-500 border-b ">
                                <th scope="row" class="px-6 py-4 font-medium whitespace-nowrap ">
                                    STW 3
                                </th>
                                <td class="px-6 py-4 ">
                                    Yes
                                </td>
                                <td class="px-6 py-4">
                                    10 hrs
                                </td>
                            </tr>
                            <tr class="bg-green-500 border-b ">
                                <th scope="row" class="px-6 py-4 font-medium whitespace-nowrap ">
                                    STW 4
                                </th>
                                <td class="px-6 py-4 ">
                                    Yes
                                </td>
                                <td class="px-6 py-4">
                                    10 hrs
                                </td>
                            </tr>
                            <tr class="bg-green-500 border-b ">
                                <th scope="row" class="px-6 py-4 font-medium whitespace-nowrap ">
                                    STW 5
                                </th>
                                <td class="px-6 py-4 ">
                                    Yes
                                </td>
                                <td class="px-6 py-4">
                                    10 hrs
                                </td>
                            </tr>
                            

                        </tbody>
                    </table>
                </div>

            </div>
            </div>

        </div>
    )
}

export default Summary