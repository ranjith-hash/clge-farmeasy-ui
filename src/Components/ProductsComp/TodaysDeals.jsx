import React from 'react';

import SampleItems from "./SampleItems";

function TodaysDeals() {
    return (
        <>
            <div className="text-gray-700 grid grid-cols-3 gap-2">
                <SampleItems/>
                <SampleItems/>
                <SampleItems/>
                <SampleItems/>
                <SampleItems/>
                <SampleItems/>
                <SampleItems/>
                <SampleItems/>
                <SampleItems/>
                <SampleItems/>
                <SampleItems/>
            </div>

        </>
    );
}

export default TodaysDeals;