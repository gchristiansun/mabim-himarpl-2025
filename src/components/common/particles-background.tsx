"use client";

import React, { FC, useCallback } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import particlesConfigJson from "@/lib/particles.json";
import { Engine } from "@tsparticles/engine";
import type { IOptions, RecursivePartial } from "@tsparticles/engine";

interface ParticlesComponentProps {
  id?: string;
}


const ParticlesComponent: FC<ParticlesComponentProps> = ({ id = "tsparticles" }) => {
    const particlesConfig = particlesConfigJson as RecursivePartial<IOptions>;

    return (
        <Particles
            id={id}
            className="absolute inset-0 z-2"
            options={particlesConfig}
            
        />
    );
};
export default ParticlesComponent;
