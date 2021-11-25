import React, { useCallback, useState } from "react";

const CustomHook = (initState: number) => {
    const [count, setCount] = useState<number>(initState);

    const increaseCount = useCallback(() => {
        setCount(count + 1);
        console.log(count);
    }, [count]);

    const decreaseCount = useCallback(() => {
        setCount(count - 1);
        console.log(count);
    }, [count]);

    return { count, increaseCount, decreaseCount };
}

export default CustomHook;