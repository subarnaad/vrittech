"use client"
import { useState } from "react"
import CourseCard from "./CourseCard"
import { courseData, courseImages } from "@/src/data/courseData"

export default function CourseSection() {


    const [active, setActive] = useState(0)

    const handleClick = (id: number) => {
        setActive(id)
    }

    return (

        <div className="flex gap-6 mx-20 w-auto h-150 mt-10">
            {courseData.map((card) => (
                <CourseCard
                    key={card.id}
                    card={card}
                    images={courseImages}
                    active={active === card.id}
                    onClick={() => handleClick(card.id)}
                />
            ))}

        </div>

    )
}