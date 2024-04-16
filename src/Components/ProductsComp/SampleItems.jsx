import React from 'react';
import img1 from "../images/10638.jpg";
import {Button} from "antd";

function SampleItems() {
    return (
        <div>
                <div className="m-4">
                    <div className="border shadow hover:shadow-gray-500 " >
                        <div className="flex space-x-2">
                            <img src={img1} className="w-48 h-48"/>
                            <div className="p-6">
                                <h2 className="text-xl font-semibold">Wheat - 1KG</h2>
                                <p className="text-xs"> Seller: Seller A</p>
                                <p className="text-xs">Category: Crop </p>
                                <p className="text-xs">Sub Category: Wheat </p>
                                <p className="font-mono mt-2 mb-2 font-semibold">Price: &#8377;199/- </p>
                                <p className="text-xs text-gray-50 p-1 w-20 text-center bg-red-800 border rounded-md">
                                    20% OFF
                                </p>
                                <p className="text-xs text-stone-500 mb-1 mt-1">Actual Price : &#8377;250</p>
                            </div>
                        </div>
                        <div className="flex justify-end mb-3 mr-2">
                            <Button>+ Add to Cart</Button>
                        </div>
                    </div>
                </div>

        </div>
    );
}

export default SampleItems;