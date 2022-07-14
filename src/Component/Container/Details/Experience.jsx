import React, { useState, useEffect } from "react";
import { ExperienceWrapper } from "./ExperienceWrapper";
import { Submit } from "./Submit/Submit";
import { useNavigate } from "react-router-dom";
import { setData, getData } from "./server";
import { AddButton } from "./AddButton";

export const Experience = () => {
  const [experience, setExperience] = useState([]);
  const [counter, setCounter] = useState(0);
  let navigate = useNavigate();

  const handleClick = () => setCounter(counter + 1);

  const Push = () => {
    setData("experience", [...experience]).then(() => {
      navigate("/layout/education");
    });
  };

  useEffect(() => {
    getData("experience", setExperience);
    return () => setExperience([]);
  }, []);

  if (experience.length && !counter) setCounter(experience.length);

  const remove = (data) => {
    setExperience(experience.filter((i) => i.id !== data?.id));
    setCounter(counter - 1);
  };

  return (
    <>
      <div>
        <AddButton click={handleClick} title="Experience" />

        {Array.from(Array(counter)).map((c, i) => {
          return (
            <ExperienceWrapper
              key={i}
              data={experience?.[i]}
              click={() => remove(experience?.[i])}
              set={(name, value) => {
                setExperience(
                  experience[i]?.id
                    ? experience.map((a) => {
                        if (a.id === experience[i].id)
                          a = { ...a, [name]: value };
                        return a;
                      })
                    : [...experience, { [name]: value, id: Date.now() }]
                );
              }}
            />
          );
        })}
        <Submit click={Push} />
      </div>
    </>
  );
};
