import * as S from "./style";

import React, { useRef, useEffect } from "react";

interface Project {
    title: string;
    description: string;
    link: string;
}

const projects: Project[] = [
    {
        title: "경소마고 · 경소고 랩실 대여 서비스",
        description: "2024.10.01 ~ 2024.10.14 (2024 1학기 캡스톤 플랩 리모델링 및 재구성)",
        link: "https://example.com/project-a",
    },
    {
        title: "감정일기",
        description: "2024.06.21 ~  (개인 팀 프로젝트)",
        link: "https://example.com/project-b",
    },
];

interface DelayProps {
    delay: number;
}

const Project: React.FC<DelayProps> = ({ delay }) => {
    const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && entry.target) {
                        const el = entry.target as HTMLDivElement;
                        el.style.animation = `slideIn 0.5s ease-out forwards ${el.dataset.delay}s`;
                    }
                });
            },
            { threshold: 0.1 }
        );

        contentRefs.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => {
            contentRefs.current.forEach((ref) => {
                if (ref) observer.unobserve(ref);
            });
        };
    }, []);

    return (
        <S.Project>
            <S.ContentCont delay={`${delay}s`}>
                <h2 style={{ padding: "20px 0" }}>Projects</h2>
                {projects.map((project, index) => (
                    <S.ProjectWrap
                        key={index}
                        ref={(el) => (contentRefs.current[index] = el)}
                        data-delay={`${delay + index}`}
                    >
                        <h3>{project.title}</h3>
                        <p>{project.description}</p> <br />
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                            View Project
                        </a>
                    </S.ProjectWrap>
                ))}
            </S.ContentCont>
        </S.Project>
    );
};

export default Project;
