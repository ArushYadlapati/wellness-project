"use client";

import { useState } from "react";
import "./styles.css";
import { Github } from "lucide-react";

export default function Home() {
    const [birthRate, setBirthRate] = useState(15);
    const [deathRate, setDeathRate] = useState(5);
    const [immigrationRate, setImmigrationRate] = useState(5);
    const [emigrationRate, setEmigrationRate] = useState(5);
    const [economy, setEconomy] = useState(5);

    const getDemographicStage = () => {
        if (birthRate >= 35 && deathRate >= 30 && economy <= 3) {
            return {
                stage: "Stage 1: Preindustrial",
                description: "High birth and deaths rates (from poor sanitation, nutrition and medical care) → stable population",
                examples: ["Remote Villages", "Isolated Native Tribes"]
            };
        }

        if (birthRate >= 30 && deathRate <= 15 && economy <= 5) {
            return {
                stage: "Stage 2: Transitional",
                description: "Death rate lowers because of improved nutrition sanitation and medical care, but birth rates stay high → rapid pop growth",
                examples: ["Niger", "Mali", "Angola", "Democratic Republic of Congo"]
            };
        }

        if (birthRate >= 15 && birthRate <= 30 && deathRate <= 15 && economy >= 4 && economy <= 7) {
            return {
                stage: "Stage 3: Industrial",
                description: "Education + higher living standards lower birth rates → population starts to level off",
                examples: ["Indonesia", "Brazil", "Mexico", "Indonesia"]
            };
        }

        if (birthRate <= 20 && deathRate <= 15 && economy >= 7) {
            return {
                stage: "Stage 4: Postindustrial",
                description: "Low birth rates and low death rates are in equilibrium → stabilization of population or decline ",
                examples: ["US", "UK", "Japan"]
            };
        }

        return {
            stage: "In-between two stages",
            description: "Somewhere in between 2 stages",
            examples: ["Countries experience big changes in a short time span"]
        };
    };

    const stage = getDemographicStage();
    const growthRate = ((birthRate + immigrationRate) - (deathRate + emigrationRate)) / 10;
    let doublingTime = Math.round(70 / growthRate);
    if (growthRate <= 0) {
        doublingTime = Infinity;
    }
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-slate-900 dark:to-slate-800 p-4 sm:p-8">
            <div className="max-w-4xl mx-auto">
                <header className="text-center mb-8">
                    <div className="flex items-center justify-center gap-3 mb-2">
                        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
                            Arush's Demographic Transition Model
                        </h1>
                        <a
                            href="https://github.com/ArushYadlapati/wellness-project"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                        >
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                        </a>
                    </div>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6">
                        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                            Demographic Controls
                        </h2>

                        <div className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Birth Rate: { birthRate } per 1,000 people
                                </label>
                                <input type="range" min="0" max="100" value={ birthRate } onChange={(e) => setBirthRate(parseInt(e.target.value))}
                                    className="w-full h-2 bg-green-200 rounded-lg appearance-none cursor-pointer slider"
                                />
                                <div className="flex justify-between text-xs text-gray-500 mt-1">
                                    <span>0 (Low)</span>
                                    <span>100 (High)</span>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Death Rate: { deathRate } per 1,000 people
                                </label>
                                <input type="range" min="0" max="100" value={ deathRate } onChange={(e) => setDeathRate(parseInt(e.target.value))}
                                    className="w-full h-2 bg-red-200 rounded-lg appearance-none cursor-pointer slider"
                                />
                                <div className="flex justify-between text-xs text-gray-500 mt-1">
                                    <span>0 (Low)</span>
                                    <span>100 (High)</span>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Immigration Rate: { immigrationRate } per 1,000 people
                                </label>
                                <input type="range" min="0" max="100" value={ immigrationRate } onChange={(e) => setImmigrationRate(parseInt(e.target.value))}
                                    className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer slider"
                                />
                                <div className="flex justify-between text-xs text-gray-500 mt-1">
                                    <span>0 (None)</span>
                                    <span>100 (High)</span>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Emigration Rate: { emigrationRate } per 1,000 people
                                </label>
                                <input type="range" min="0" max="100" value={ emigrationRate } onChange={(e) => setEmigrationRate(parseInt(e.target.value))}
                                    className="w-full h-2 bg-orange-200 rounded-lg appearance-none cursor-pointer slider"
                                />
                                <div className="flex justify-between text-xs text-gray-500 mt-1">
                                    <span>0 (None)</span>
                                    <span>100 (High)</span>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Economic Development Level: { economy }/10
                                </label>
                                <input type="range" min="1" max="10" value={ economy } onChange={(e) => setEconomy(parseInt(e.target.value))}
                                    className="w-full h-2 bg-purple-200 rounded-lg appearance-none cursor-pointer slider"
                                />
                                <div className="flex justify-between text-xs text-gray-500 mt-1">
                                    <span>
                                        1 (Least Developed)
                                    </span>
                                    <span>
                                        10 (Most Developed)
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6">
                        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                            Results
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                            <div className="bg-gradient-to-r from-purple-500 to-purple-700 text-white p-4 rounded-lg text-center">
                                <div className="text-2xl font-bold">
                                    { growthRate }%
                                </div>
                                <div className="text-sm">
                                    Net Growth Rate
                                </div>
                            </div>
                            <div className="bg-gradient-to-r to-indigo-500 from-purple-500 text-white p-4 rounded-lg text-center">
                                <div className="text-2xl font-bold">
                                    { doublingTime } years
                                </div>
                                <div className="text-sm">
                                    Doubling Time
                                </div>
                            </div>
                        </div>

                        <div className="border-l-4 border-indigo-500 pl-4 mb-6">
                            <h3 className="text-xl font-semibold text-indigo-700 dark:text-indigo-300 mb-2">
                                { stage.stage }
                            </h3>
                            <p className="text-gray-700 dark:text-gray-300 mb-3">
                                { stage.description }
                            </p>
                        </div>

                        <div>
                            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                                Example Countries
                            </h4>
                            <div className="flex flex-wrap gap-2">
                                {stage.examples.map((country, index) => (
                                    <span key={ index } className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 rounded-full text-sm">
                                        { country }
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}