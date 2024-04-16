import React, {useEffect, useState} from 'react';
import {apiService} from "../../apiService";
import img1 from "../../images/10638.jpg";
import {Button} from "antd";

function Crops(props) {

    const [respData, setRespData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        HandleCategory()
    }, []);

    const HandleCategory = async () => {
        const resp = await apiService.get('/Products/type?category=crop')
        if (resp.data.sucess){
            setRespData(resp.data.apiData)
            setLoading(false)
        }
    }

    return (
        <div>
            {
                loading ? <>Loading ...</> :
                    <>
                        {
                            respData.map((r) =>

                                <div>
                                    <div className="m-4">
                                        <div className="border shadow hover:shadow-gray-500 ">
                                            <div className="flex space-x-2">
                                                <img src={img1} alt="img" className="w-48 h-48"/>
                                                <div className="p-6">
                                                    <h2 className="text-xl font-semibold">{r.productName}</h2>
                                                    <p className="text-xs"> Seller: {r.seller}</p>
                                                    <p className="text-xs">Category: {r.category} </p>
                                                    <p className="font-mono mt-2 mb-2 font-semibold">Price: &#8377;{r.price}/- </p>
                                                    {/*<p className="text-xs text-gray-50 p-1 w-20 text-center bg-red-800 border rounded-md">*/}
                                                    {/*    20% OFF*/}
                                                    {/*</p>*/}
                                                    {/*<p className="text-xs text-stone-500 mb-1 mt-1">Actual Price*/}
                                                    {/*    : &#8377;250</p>*/}
                                                </div>
                                            </div>
                                            <div className="flex justify-end mb-3 mr-2">
                                                <Button>+ Add to Cart</Button>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            )
                        }

                    </>
            }
        </div>
    );
}

export default Crops;