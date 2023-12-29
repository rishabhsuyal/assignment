import React from 'react'

function Summary() {
    return (
        <div>

            <div className='bg-[url(https://t3.ftcdn.net/jpg/05/12/01/78/360_F_512017875_2R6eN5krsEM9ZOcbGnYwtuHLIyAQCMyS.jpg)] backdrop-blur-sm h-36 flex justify-center items-center'>
                <div className='bg-yellow-300 font-bold w-fit h-16 p-4 '>
                    Lucknow Zone/ Summary
                </div>
            </div>
            <div className='flex justify-center mt-10'>
            <div className='w-1/2'>
                <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table class="w-full text-sm text-left rtl:text-right text-gray-500 ">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 ">
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
                            <tr class="bg-white border-b  hover:bg-gray-50 ">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                    STW 1
                                </th>
                                <td class="px-6 py-4">
                                    Yes
                                </td>
                                <td class="px-6 py-4">
                                    10 hrs
                                </td>
                            </tr>
                            <tr class="bg-white border-b  hover:bg-gray-50 ">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                    STW 2
                                </th>
                                <td class="px-6 py-4">
                                    Yes
                                </td>
                                <td class="px-6 py-4">
                                    10 hrs
                                </td>
                            </tr>
                            <tr class="bg-white border-b  hover:bg-gray-50 ">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                    STW 3
                                </th>
                                <td class="px-6 py-4">
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