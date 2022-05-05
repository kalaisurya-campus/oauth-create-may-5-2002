import React, { useEffect, useState } from "react";
import { GET_PURUSH_DATA } from "./api/Get";
import DATAPROVIDERMAINS_APP from "./DataProviderMain";

function GetDatasStoresApi(props) {
    const [fisrtdata, setData] = useState([]);

    const [loading, SetLoading] = useState(false);
    useEffect(() => {
        GET_PURUSH_DATA()
            .then((res) => {
                setData(res.data);
                SetLoading(true);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const Dataproviders = {
        loading,
        fisrtdata,
    };
    return (
        <div>
            <DATAPROVIDERMAINS_APP.Provider value={Dataproviders}>
                {props.children}
            </DATAPROVIDERMAINS_APP.Provider>
        </div>
    );
}

export default GetDatasStoresApi;
