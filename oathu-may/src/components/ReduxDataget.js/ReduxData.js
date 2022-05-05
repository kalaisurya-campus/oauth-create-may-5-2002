import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import GET_ACTION_DATA_GETUSERS from "../../Redux/actions/Action";

function ReduxData(props) {
    const dispatch = useDispatch();

    const state = useSelector((state) => state);
    console.log(state);

    useEffect(() => {
        dispatch(GET_ACTION_DATA_GETUSERS());
    }, []);
    return (
        <div>
            {state.datauser.loading ? (
                <div>Loading .......</div>
            ) : (
                <div>
                    {state.datauser.item.map((items, index) => {
                        return (
                            <div>
                                <p>{items.name}</p>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
}

export default ReduxData;
