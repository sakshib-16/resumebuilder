import React, { useState, useEffect } from "react";
import { ExperienceWrapper } from "./ExperienceWrapper";
import { Submit } from "./Submit/Submit";
import { useNavigate } from "react-router-dom";
import { setData, getData } from "./server";
import { AddButton } from "./AddButton";

export const Experience = () => {
  const [experience, setExperience] = useState("");
  const [json, setJson] = useState([]);
  const [counter, setCounter] = useState(0);
  let navigate = useNavigate();
  const [push, setPush] = useState(false);

  const addData = () =>
    experience && setJson([...json, { id: Date.now(), ...experience }]);

  const handleClick = () => {
    addData();
    setCounter(counter + 1);
  };
  useEffect(() => {
    if (push) {
      setData("experience", [...json]).then(() => {
        navigate("/layout/education");
      });
    }
  }, [push]);

  const Push = () => {
    addData();
    setPush(true);
  };

  useEffect(() => {
    getData("experience", setJson);
  }, []);

  if (json.length && !counter) setCounter(json.length);
  const remove = (data) => {
    setJson(json.filter((i) => i.id !== data.id));
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
              data={json?.[i]}
              click={() => remove(json?.[i])}
              set={(name, e) =>
                setExperience({
                  ...experience,
                  [name]: e,
                })
              }
            />
          );
        })}
        <Submit click={Push} />
      </div>
    </>
  );
};
