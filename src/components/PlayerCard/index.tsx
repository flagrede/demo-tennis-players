import React from "react";
import cx from "classnames";
import { PlayerType } from "../../types/players";
import traduction from "../../i18n/fr";
import computeResult from "../../utils/computeResult";
import convertWeight from "../../utils/weightConverter";

interface PropType {
  player: PlayerType;
  className?: string;
}

export default ({ player, className }: PropType) => {
  const matchResult = computeResult(player.data.last);
  return (
    <div
      className={cx(
        "max-w-sm rounded overflow-hidden shadow-lg hover:shadow-xl",
        className
      )}
    >
      <img
        className="w-full"
        src={player.picture}
        alt={`${player.firstname} ${player.lastname}`}
      />
      <div className="px-6 py-4">
        <div className="flex items-center font-bold text-xl mb-2">
          <span className="mr-2 text-gray-800">{`${player.firstname} ${player.lastname}`}</span>
          <img
            className="h-6"
            src={player.country.picture}
            alt={player.country.code}
          />
        </div>
        <ul className="text-gray-700 text-base mb-2">
          <li className="text-center font-bold text-lg">
            #{`${player.data.rank}`}
          </li>
          <li className="flex justify-between">
            <span>
              <span className="font-semibold">{player.data.height}</span> cm
            </span>
            <span>
              <span className="font-semibold">
                {convertWeight(player.data.weight)}
              </span>{" "}
              kg
            </span>
          </li>
          <li className="flex justify-between">
            <span>
              <span className="font-semibold">{player.data.points}</span>{" "}
              {traduction.points}
            </span>
            <span>
              <span className="font-semibold">{player.data.age}</span>{" "}
              {traduction.yearOld}
            </span>
          </li>
        </ul>
        <ul className="text-gray-700 text-base">
          <li className="bg-green-200 inline-block rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            {`${traduction.win}: ${matchResult.win}`}
          </li>
          <li className="bg-red-200 inline-block rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            {`${traduction.lose}: ${matchResult.lose}`}
          </li>
        </ul>
      </div>
    </div>
  );
};
