import React from "react";
import { useContext } from "react";
import DATAPROVIDERMAINS_APP from "../../ContextApi/DataProviderMain";

function ContextAPIData(props) {
    const contextapis = useContext(DATAPROVIDERMAINS_APP);
    // console.log(contextapis);

    const datas = () => {
        return contextapis.fisrtdata.map((firsts, index) => {
            return (
                <div key={index}>
                    <p>{firsts.title}</p>
                </div>
            );
        });
    };
    return (
        <div>
            {contextapis.loading ? (
                <div>{datas()}</div>
            ) : (
                <div>Loading.......</div>
            )}
        </div>
    );
}

export default ContextAPIData;
