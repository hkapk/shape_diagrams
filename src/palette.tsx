import type { ShapeProps } from '@dgmjs/core';

import { ALargeSmall } from 'lucide-react';

function Button({
    children,
    ...props
}: React.HTMLAttributes<HTMLButtonElement>) {
    return (
        <button
            className="w-4 h-8 hover:bg-slate-100 rounded cursor-pointer"
            {...props}
        >
            {children}
        </button>
    );
}

interface PaletteProps {
    onPropsChange?: (props: ShapeProps) => void;
}

export function Palette({ onPropsChange }: PaletteProps) {
    const changeProps = (props: ShapeProps) => {
        if (onPropsChange) onPropsChange(props);
    };

    return (
        <div className="absolute w-full h-svh flex justify-center items-center pointer-events-none">
            <div className="grid grid-cols-5 gap-4 border p-4 rounded-md pointer-events-auto bg-white drop-shadow">
                <button
                    className="bg-red-500 rounded-full cursor-pointer h-2"
                    onClick={() =>
                        changeProps({ fillColor: '$red4', strokeColor: '$red9' })
                    }
                />
                <button
                    className="bg-blue-500 rounded-full cursor-pointe h-2"
                    onClick={() =>
                        changeProps({ fillColor: '$blue4', strokeColor: '$blue9' })
                    }
                />
                <button
                    className="bg-green-500 rounded-full cursor-pointer h-2"
                    onClick={() =>
                        changeProps({ fillColor: '$green4', strokeColor: '$green9' })
                    }
                />
                <button
                    className="bg-gray-500 rounded-full cursor-pointer h-2"
                    onClick={() =>
                        changeProps({ fillColor: '$gray3', strokeColor: '$gray9' })
                    }
                />
                <button
                    className="bg-black rounded-full cursor-pointer h-2"
                    onClick={() =>
                        changeProps({
                            fillColor: '$background',
                            strokeColor: '$foreground',
                        })
                    }
                />


                <div className="flex gap-x-10 gap-y-4 col-start-1 col-end-7 ">

                    <Button onClick={() => changeProps({ fontSize: 16, strokeWidth: 1 })}>
                        <div className="scale-75"><ALargeSmall /></div>
                    </Button>


                    <Button onClick={() => changeProps({ fontSize: 20, strokeWidth: 2 })}>
                        <div className="scale-100"><ALargeSmall /></div>
                    </Button>


                    <Button onClick={() => changeProps({ fontSize: 28, strokeWidth: 3 })}>
                        <div className="scale-125"><ALargeSmall /></div>
                    </Button>


                    <Button onClick={() => changeProps({ fontSize: 40, strokeWidth: 4 })}>
                        <div className="scale-150"> <ALargeSmall /></div>
                    </Button>

                </div>
            </div>


        </div>
    );
}
