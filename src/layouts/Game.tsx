import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  GameContainer,
  GameTitle,
  GameOpen,
  GamePack,
  GamePackButton,
} from "../styles/Game.style";
import { useActions } from "../hooks/actions";
import { IInstrumental } from "../models";
import { useAppSelector } from "../hooks/redux";

const instrumentals: IInstrumental[] = [
  {
    name: "close",
    image: "https://img.icons8.com/office/16/delete-sign.png",
    animated: false,
  },
];

const Game = () => {
  const navigate = useNavigate();
  const { instrumental } = useAppSelector((state) => state.game);
  const [pack, setPack] = useState(instrumentals);
  const [animated, setAnimated] = useState({
    count: 0,
    animated: false,
    style: "",
  });
  const [animatedPack, setAnimatedPack] = useState(false);
  const [animatedChar, setAnimatedChar] = useState(false);
  const animateHandler = () => {
    if (instrumental?.name === "key") {
      setInstrumental({
        name: "initial",
        image: "none",
      });
      navigate("/shop");
      return;
    }
    if (animated.count === 3) {
      const newInstrumental: IInstrumental = {
        name: "hummer",
        image:
          "https://img.icons8.com/external-those-icons-lineal-color-those-icons/24/external-hammer-settings-those-icons-lineal-color-those-icons.png",
        animated: true,
      };
      animated.count = 4;
      setPack((prev) => [...prev, newInstrumental]);
      setAnimatedPack(true);
      return;
    }
    setAnimated((prev) => ({
      count: prev.count,
      animated: true,
      style: `rotate(-${(prev.count + 1) * 10}deg)`,
    }));
    setTimeout(() => {
      setAnimated((prev) => ({
        count: (prev.count += 1),
        animated: false,
        style: "",
      }));
    }, 800);
  };

  const { setInstrumental } = useActions();
  const setCurrentInstrumental = (instrumental: IInstrumental) => {
    const { name, image } = instrumental;
    if (name === "close") {
      setInstrumental({
        name: "none",
        image: "initial",
      });
    } else {
      setInstrumental({
        name: name,
        image: image,
      });
    }
  };

  const animatedTitleHandler = () => {
    if (instrumental?.name !== "hummer") return;
    setAnimatedChar(true);
  };

  const addKeyToInstrumentalHandler = () => {
    const newInstrumental = {
      name: "key",
      image:
        "https://img.icons8.com/external-dreamstale-lineal-dreamstale/32/external-key-hotel-dreamstale-lineal-dreamstale.png",
      animated: true,
    };
    setInstrumental({
      name: newInstrumental.name,
      image: newInstrumental.image,
    });
  };

  return (
    <GameContainer $animated={animated.animated}>
      <GameTitle $animatedTitle={animated.style} $animatedChar={animatedChar}>
        th
        <span onClick={animatedTitleHandler}>
          <img
            onClick={addKeyToInstrumentalHandler}
            src="https://img.icons8.com/external-dreamstale-lineal-dreamstale/32/external-key-hotel-dreamstale-lineal-dreamstale.png"
            alt="key"
          />
        </span>
        s is not a shop
      </GameTitle>
      <GameOpen disabled={animated.animated} onClick={animateHandler} />
      {animatedPack && (
        <GamePack $animatedPack={animatedPack}>
          {pack.map((instrumental) => (
            <GamePackButton
              $animatedInstrumental={instrumental.animated}
              key={instrumental.name}
              onClick={() => setCurrentInstrumental(instrumental)}
            >
              <img src={instrumental.image} alt={instrumental.name} />
            </GamePackButton>
          ))}
        </GamePack>
      )}
    </GameContainer>
  );
};

export default Game;
