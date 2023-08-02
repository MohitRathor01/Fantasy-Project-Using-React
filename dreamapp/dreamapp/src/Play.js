import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Play = () => {
    const [mData, setData] = useState([]);
    useEffect(() => {
        axios.get("https://rest.entitysport.com/v2/matches/?status=2&token=ec471071441bb2ac538a0ff901abd249&per_page=10&&paged=1")
            .then((res) => setData(res.data.response.items))
            .catch((err) => console.log(err));
    }, []);

    console.log(">>>>><<<<", mData)
    return (
        <div className="match-table">
            <table>
                <thead>
                    <tr>
                        <th>Match</th>
                        <th>Status</th>
                        <th>id</th>
                        <th>Title</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        mData?.map((item, index) => {
                            return <tr>
                                <td>{item.short_title}</td>
                                <td>
                                    {item.subtitle
                                    }
                                </td>
                                <td>
                                    {
                                        item.match_id
                                    }
                                </td>
                                <td>
                                    {
                                        item.title
                                    }
                                </td>
                            </tr>
                        })}

                </tbody>

            </table>
        </div>
    );
};

export default Play;
