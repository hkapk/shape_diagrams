import type { Editor } from '@dgmjs/core';
import {
    CircleIcon,
    HandIcon,
    HighlighterIcon,
    ImageIcon,
    MousePointer2Icon,
    PencilIcon,
    SlashIcon,
    SplineIcon,
    SquareIcon,
    TypeIcon,
} from 'lucide-react';



interface ToolItemProps extends React.HTMLAttributes<HTMLButtonElement> {
    active: boolean;
}

function ToolItem({ active = false, children, ...props }: ToolItemProps) {
    return (
        <button
            className={[
                'hover:bg-slate-100 w-8 h-8 flex items-center justify-center rounded',
                active ? 'bg-slate-100' : 'bg-transparent',
            ].join(' ')}
            {...props}
        >
            {children}
        </button>
    );
}

function Separator() {
    return <div className="border-l"></div>;
}

interface ToolbarProps {
    activeHandler?: string;
    onActiveHandlerChange?: (handler: string) => void;
    editor: Editor | null;
}

export function Toolbar({
    activeHandler = 'Select',
    onActiveHandlerChange,
}: ToolbarProps) {
    const setActiveHandler = (handler: string) => {
        if (onActiveHandlerChange) onActiveHandlerChange(handler);
    };

    return (
        <div className="absolute bottom-4 w-full flex justify-center items-center pointer-events-none">
            <div className="flex gap-1 border p-1 rounded-md pointer-events-auto bg-white drop-shadow">
                <MousePointer2Icon className="w-4 h-4" />
                <ToolItem
                    title="Select"
                    active={activeHandler === 'Select'}
                    onClick={() => setActiveHandler('Select')}
                >
                    <MousePointer2Icon className="w-4 h-4" />
                </ToolItem>
                <HandIcon className="w-4 h-4" />
                <ToolItem
                    title="Hand"
                    active={activeHandler === 'Hand'}
                    onClick={() => setActiveHandler('Hand')}
                >
                    <HandIcon className="w-4 h-4" />
                </ToolItem>
                <Separator />
                <SquareIcon className="w-4 h-4" />
                <ToolItem
                    title="Rectangle"
                    active={activeHandler === 'Rectangle'}
                    onClick={() => setActiveHandler('Rectangle')}
                >
                    <SquareIcon className="w-4 h-4" />
                </ToolItem>
                <CircleIcon className="w-4 h-4" />
                <ToolItem
                    title="Ellipse"
                    active={activeHandler === 'Ellipse'}
                    onClick={() => setActiveHandler('Ellipse')}
                >
                    <CircleIcon className="w-4 h-4" />
                </ToolItem>
                <TypeIcon className="w-4 h-4" />
                <ToolItem
                    title="Text"
                    active={activeHandler === 'Text'}
                    onClick={() => setActiveHandler('Text')}
                >
                    <TypeIcon className="w-4 h-4" />
                </ToolItem>
                <ImageIcon className="w-4 h-4" />
                <ToolItem
                    title="Image"
                    active={activeHandler === 'Image'}
                    onClick={() => setActiveHandler('Image')}
                >
                    <ImageIcon className="w-4 h-4" />
                </ToolItem>
                <Separator />
                <SlashIcon className="w-4 h-4" />
                <ToolItem
                    title="Line"
                    active={activeHandler === 'Line'}
                    onClick={() => setActiveHandler('Line')}
                >
                    <SlashIcon className="w-4 h-4" />
                </ToolItem>
                <SplineIcon className="w-4 h-4" />
                <ToolItem
                    title="Connector"
                    active={activeHandler === 'Connector'}
                    onClick={() => setActiveHandler('Connector')}
                >
                    <SplineIcon className="w-4 h-4" />
                </ToolItem>
                <PencilIcon className="w-4 h-4" />
                <ToolItem
                    title="Freehand"
                    active={activeHandler === 'Freehand'}
                    onClick={() => setActiveHandler('Freehand')}
                >
                    <PencilIcon className="w-4 h-4" />
                </ToolItem>
                <HighlighterIcon className="w-4 h-4" />
                <ToolItem
                    title="Highlighter"
                    active={activeHandler === 'Highlighter'}
                    onClick={() => setActiveHandler('Highlighter')}
                >
                    <HighlighterIcon className="w-4 h-4" />
                </ToolItem>
            </div>
        </div>
    );
}
