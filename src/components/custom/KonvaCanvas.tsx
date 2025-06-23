// app/components/KonvaCanvas.tsx
"use client";

import React, { useState } from 'react';
import { Stage, Layer, Rect, Text } from 'react-konva';
import Konva from 'konva';

const KonvaCanvas = () => {
    // In a real app, you'd get these dimensions dynamically
    const stageWidth = 800;
    const stageHeight = 600;
    // State for stage position and scale
    const [stage, setStage] = useState({
        scale: { x: 1, y: 1 },
        x: 0,
        y: 0,
    });

    return (
        <div className="border border-gray-400">
            <Stage width={stageWidth} height={stageHeight}>
                {/* A Layer is like a transparent canvas sheet for drawing on */}
                <Layer>
                    {/* A simple rectangle shape */}
                    <Rect
                        x={20}
                        y={50}
                        width={100}
                        height={100}
                        fill="red"
                        shadowBlur={5}
                    />

                    {/* A welcome text object */}
                    <Text
                        text="What are you looking at huh?"
                        x={250}
                        y={70}
                        fontSize={24}
                        fontFamily="Calibri"
                        fill="#ddd"
                    />
                </Layer>
            </Stage>
        </div>
    );
};

export default KonvaCanvas;