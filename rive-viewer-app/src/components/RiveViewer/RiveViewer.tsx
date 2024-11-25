// Rive preview

import React, { useEffect, useRef } from 'react';
import Rive from 'rive-js';

interface RiveViewerProps {
  riveFile: File;
  onStateMachinesLoaded: (stateMachines: string[]) => void;
}

const RiveViewer: React.FC<RiveViewerProps> = ({ riveFile, onStateMachinesLoaded }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (riveFile) {
      const fileReader = new FileReader();
      fileReader.onload = (event) => {
        const arrayBuffer = event.target?.result as ArrayBuffer;

        const riveInstance = new Rive.Rive({
          canvas: canvasRef.current as HTMLCanvasElement,
          buffer: arrayBuffer,
          autoplay: true,
          onLoad: () => {
            const stateMachines = riveInstance.stateMachineNames;
            onStateMachinesLoaded(stateMachines);
          },
        });
      };
      fileReader.readAsArrayBuffer(riveFile);
    }
  }, [riveFile, onStateMachinesLoaded]);

  return (
    <div>
      <canvas ref={canvasRef} width={500} height={500} />
    </div>
  );
};

export default RiveViewer;
