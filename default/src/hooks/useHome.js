import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { homeSelector, setHome } from "slices/homeSlice";

import _ from "lodash";

const useHome = ({ home }) => {
    const dispatch = useDispatch();
    const homeState = useSelector(homeSelector);

    useEffect(() => {
        if (!_.isEqual(homeState, { home })) {
            dispatch(setHome({ home }));
        }
    }, [dispatch, homeState, home]);
};

export default useHome;
