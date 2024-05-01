import React, { useEffect, useState } from 'react'

const Covid = () => {

    const [data, setData] = useState([]);

    const getCovidData = async () => {
        try {
            const res = await fetch('https://data.covid19india.org/data.json');
            const actualData = await res.json();
            console.log(actualData.statewise[0]);
            setData(actualData.statewise[0]);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getCovidData();
    }, []);

    return (
        <div className='bg-black py-5'>
            <div className='container'>
                <h1 className='text-center text-white'>LIVE</h1>
                <h2 className='text-center text-white'>COVID-19 CORONAVIRUS TRACKER</h2>

                <div className='row'>
                    <div className='col-lg-4 pt-5'>
                        <div class="card border-0 rounded-0 shadow bg-primary text-white">
                            <div class="card-body text-center">
                                <p>OUR <span className='fs-3'>COUNTRY</span></p>
                                <h1>INDIA</h1>
                            </div>
                        </div>
                    </div>

                    <div className='col-lg-4 pt-5'>
                        <div class="card border-0 rounded-0 shadow bg-success text-white">
                            <div class="card-body text-center">
                                <p>TOTAL <span className='fs-3'>RECOVERED</span></p>
                                <h1>{data.recovered}</h1>
                            </div>
                        </div>
                    </div>

                    <div className='col-lg-4 pt-5'>
                        <div class="card border-0 rounded-0 shadow bg-secondary text-white">
                            <div class="card-body text-center">
                                <p>TOTAL <span className='fs-3'>CONFIRMED</span></p>
                                <h1>{data.confirmed}</h1>
                            </div>
                        </div>
                    </div>

                    <div className='col-lg-4 pt-5'>
                        <div class="card border-0 rounded-0 shadow bg-danger text-white">
                            <div class="card-body text-center">
                                <p>TOTAL <span className='fs-3'>DEATH</span></p>
                                <h1>{data.deaths}</h1>
                            </div>
                        </div>
                    </div>

                    <div className='col-lg-4 pt-5'>
                        <div class="card border-0 rounded-0 shadow bg-info text-white">
                            <div class="card-body text-center">
                                <p>TOTAL <span className='fs-3'>ACTIVE</span></p>
                                <h1>{data.active}</h1>
                            </div>
                        </div>
                    </div>

                    <div className='col-lg-4 pt-5'>
                        <div class="card border-0 rounded-0 shadow bg-warning text-white">
                            <div class="card-body text-center">
                                <p>LAST <span className='fs-3'>UPDATE</span></p>
                                <h1>{data.lastupdatedtime}</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Covid